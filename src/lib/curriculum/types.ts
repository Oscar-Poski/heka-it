export type Lesson = {
  slug: string;
  title: string;
  summary: string;
  durationMinutes: number;
  objectives: string[];
  contentHtml: string;
};

export type Module = {
  slug: string;
  title: string;
  summary: string;
  lessons: Lesson[];
};

export type Course = {
  slug: string;
  title: string;
  level: 'basico' | 'intermedio';
  summary: string;
  estimatedHours: number;
  modules: Module[];
};

export type LearningTrack = {
  slug: string;
  title: string;
  summary: string;
  courses: Course[];
};

export type LessonNode = {
  id: string;
  href: string;
  title: string;
  moduleTitle: string;
};

export type LessonContext = {
  track: LearningTrack;
  course: Course;
  module: Module;
  lesson: Lesson;
  lessonId: string;
  lessonPath: string;
  nodes: LessonNode[];
  currentIndex: number;
  previous: LessonNode | null;
  next: LessonNode | null;
};
