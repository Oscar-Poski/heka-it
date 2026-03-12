import { getCollection } from 'astro:content';
import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import hljs from 'highlight.js';
import { withBase } from '@/lib/utils';
import { curriculumCatalog } from './catalog';
import type { Course, LearningTrack, Lesson, LessonContext, LessonNode, Module } from './types';

export * from './types';
export { withBase };

type LessonEntry = {
  trackSlug: string;
  courseSlug: string;
  moduleSlug: string;
  lesson: Lesson;
  order: number;
};

let cachedTracksPromise: Promise<LearningTrack[]> | null = null;

const markdown = new Marked(
  markedHighlight({
    langPrefix: 'language-',
    highlight(code, lang) {
      if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(code, { language: lang }).value;
      }

      return hljs.highlightAuto(code, ['bash']).value;
    },
  })
);

async function loadLessonEntries(): Promise<LessonEntry[]> {
  const entries = await getCollection('lessons');

  return entries.map((entry) => ({
    trackSlug: entry.data.trackSlug,
    courseSlug: entry.data.courseSlug,
    moduleSlug: entry.data.moduleSlug,
    order: entry.data.order,
    lesson: {
      slug: entry.data.lessonSlug,
      title: entry.data.title,
      summary: entry.data.summary,
      durationMinutes: entry.data.durationMinutes,
      objectives: entry.data.objectives,
      contentHtml: markdown.parse(entry.body) as string,
    },
  }));
}

async function buildLearningTracks(): Promise<LearningTrack[]> {
  const lessonEntries = await loadLessonEntries();

  return curriculumCatalog.map((track) => ({
    ...track,
    courses: track.courses.map((course) => ({
      ...course,
      modules: course.modules.map((module) => {
        const lessons = lessonEntries
          .filter(
            (entry) =>
              entry.trackSlug === track.slug &&
              entry.courseSlug === course.slug &&
              entry.moduleSlug === module.slug
          )
          .sort((a, b) => a.order - b.order)
          .map((entry) => entry.lesson);

        return {
          ...module,
          lessons,
        };
      }),
    })),
  }));
}

export async function getLearningTracks(): Promise<LearningTrack[]> {
  if (!cachedTracksPromise) {
    cachedTracksPromise = buildLearningTracks();
  }

  return cachedTracksPromise;
}

export async function getTrack(trackSlug: string) {
  const learningTracks = await getLearningTracks();
  return learningTracks.find((track) => track.slug === trackSlug) ?? null;
}

export async function getCourse(trackSlug: string, courseSlug: string) {
  const track = await getTrack(trackSlug);
  if (!track) {
    return null;
  }

  const course = track.courses.find((item) => item.slug === courseSlug);
  if (!course) {
    return null;
  }

  return { track, course };
}

export function buildCourseLessonNodes(trackSlug: string, course: Course): LessonNode[] {
  return course.modules.flatMap((module) =>
    module.lessons.map((lesson) => ({
      id: `${trackSlug}/${course.slug}/${module.slug}/${lesson.slug}`,
      href: withBase(`/cursos/${trackSlug}/${course.slug}/${module.slug}/${lesson.slug}`),
      title: lesson.title,
      moduleTitle: module.title,
    }))
  );
}

export function buildModuleLessonNodes(
  trackSlug: string,
  courseSlug: string,
  module: Module
): LessonNode[] {
  return module.lessons.map((lesson) => ({
    id: `${trackSlug}/${courseSlug}/${module.slug}/${lesson.slug}`,
    href: withBase(`/cursos/${trackSlug}/${courseSlug}/${module.slug}/${lesson.slug}`),
    title: lesson.title,
    moduleTitle: module.title,
  }));
}

export async function getLessonContext(
  trackSlug: string,
  courseSlug: string,
  moduleSlug: string,
  lessonSlug: string
): Promise<LessonContext | null> {
  const courseContext = await getCourse(trackSlug, courseSlug);
  if (!courseContext) {
    return null;
  }

  const { track, course } = courseContext;
  const module = course.modules.find((item) => item.slug === moduleSlug);
  if (!module) {
    return null;
  }

  const lesson = module.lessons.find((item) => item.slug === lessonSlug);
  if (!lesson) {
    return null;
  }

  const nodes = buildCourseLessonNodes(track.slug, course);
  const moduleNodes = buildModuleLessonNodes(track.slug, course.slug, module);
  const lessonId = `${track.slug}/${course.slug}/${module.slug}/${lesson.slug}`;
  const lessonPath = withBase(`/cursos/${track.slug}/${course.slug}/${module.slug}/${lesson.slug}`);
  const currentIndex = nodes.findIndex((node) => node.id === lessonId);
  const moduleCurrentIndex = moduleNodes.findIndex((node) => node.id === lessonId);

  if (currentIndex < 0 || moduleCurrentIndex < 0) {
    return null;
  }

  return {
    track,
    course,
    module,
    lesson,
    lessonId,
    lessonPath,
    nodes,
    moduleNodes,
    currentIndex,
    moduleCurrentIndex,
    previous: currentIndex > 0 ? nodes[currentIndex - 1] : null,
    next: currentIndex < nodes.length - 1 ? nodes[currentIndex + 1] : null,
  };
}
