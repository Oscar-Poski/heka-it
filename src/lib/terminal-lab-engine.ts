type FileNode = {
  kind: 'file';
  content: string;
};

type DirNode = {
  kind: 'dir';
  children: Record<string, Node>;
};

type Node = FileNode | DirNode;

type LabResult = {
  clear?: boolean;
  output?: string[];
};

const HOME_PATH = '/home/student';

function createDefaultFs(): DirNode {
  return {
    kind: 'dir',
    children: {
      home: {
        kind: 'dir',
        children: {
          student: {
            kind: 'dir',
            children: {
              'README.txt': {
                kind: 'file',
                content: 'Simulación de terminal de Heka IT. Usa help para ver los comandos disponibles.',
              },
            },
          },
        },
      },
      tmp: { kind: 'dir', children: {} },
    },
  };
}

function tokenize(input: string): string[] {
  const tokens = input.match(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|>>|>|[^\s]+/g) ?? [];
  return tokens.map((token) => {
    if (
      (token.startsWith('"') && token.endsWith('"')) ||
      (token.startsWith("'") && token.endsWith("'"))
    ) {
      return token.slice(1, -1);
    }
    return token;
  });
}

function normalizePath(inputPath: string | undefined, cwd: string): string {
  const rawPath = (inputPath ?? '').trim();
  if (!rawPath) {
    return cwd;
  }

  let path = rawPath;
  if (path === '~') {
    path = HOME_PATH;
  } else if (path.startsWith('~/')) {
    path = `${HOME_PATH}/${path.slice(2)}`;
  } else if (!path.startsWith('/')) {
    path = `${cwd}/${path}`;
  }

  const segments = path.split('/').filter(Boolean);
  const resolved: string[] = [];

  for (const segment of segments) {
    if (segment === '.') {
      continue;
    }
    if (segment === '..') {
      resolved.pop();
      continue;
    }
    resolved.push(segment);
  }

  return `/${resolved.join('/')}`;
}

function basename(path: string): string {
  const parts = path.split('/').filter(Boolean);
  return parts[parts.length - 1] ?? '';
}

function dirname(path: string): string {
  if (path === '/') {
    return '/';
  }

  const parts = path.split('/').filter(Boolean);
  parts.pop();
  return `/${parts.join('/')}` || '/';
}

function getNode(root: DirNode, path: string): Node | null {
  if (path === '/') {
    return root;
  }

  const segments = path.split('/').filter(Boolean);
  let current: Node = root;

  for (const segment of segments) {
    if (current.kind !== 'dir') {
      return null;
    }

    const next = current.children[segment];
    if (!next) {
      return null;
    }
    current = next;
  }

  return current;
}

function getParentDir(root: DirNode, path: string): { parent: DirNode; name: string } | null {
  if (path === '/') {
    return null;
  }

  const parentPath = dirname(path);
  const parentNode = getNode(root, parentPath);
  if (!parentNode || parentNode.kind !== 'dir') {
    return null;
  }

  return {
    parent: parentNode,
    name: basename(path),
  };
}

function cloneNode(node: Node): Node {
  if (node.kind === 'file') {
    return { kind: 'file', content: node.content };
  }

  const children: Record<string, Node> = {};
  for (const [key, value] of Object.entries(node.children)) {
    children[key] = cloneNode(value);
  }
  return { kind: 'dir', children };
}

function cwdPrompt(cwd: string): string {
  if (cwd === HOME_PATH) {
    return '~';
  }

  if (cwd.startsWith(`${HOME_PATH}/`)) {
    return `~${cwd.slice(HOME_PATH.length)}`;
  }

  return cwd;
}

export function createTerminalLabSession() {
  let root = createDefaultFs();
  let cwd = HOME_PATH;

  const helpers = {
    currentPrompt() {
      return `student@heka:${cwdPrompt(cwd)}$ `;
    },

    reset() {
      root = createDefaultFs();
      cwd = HOME_PATH;
    },
  };

  const commands = {
    pwd(): LabResult {
      return { output: [cwd] };
    },

    ls(args: string[]): LabResult {
      const targetArg = args.find((item) => !item.startsWith('-'));
      const targetPath = normalizePath(targetArg, cwd);
      const node = getNode(root, targetPath);

      if (!node) {
        return { output: [`ls: cannot access '${targetArg ?? targetPath}': No such file or directory`] };
      }

      if (node.kind === 'file') {
        return { output: [basename(targetPath)] };
      }

      const items = Object.entries(node.children)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([name, child]) => (child.kind === 'dir' ? `${name}/` : name));

      return { output: [items.join('  ')] };
    },

    cd(args: string[]): LabResult {
      const targetArg = args[0] ?? '~';
      const targetPath = normalizePath(targetArg, cwd);
      const node = getNode(root, targetPath);

      if (!node || node.kind !== 'dir') {
        return { output: [`cd: ${targetArg}: No such file or directory`] };
      }

      cwd = targetPath;
      return {};
    },

    cat(args: string[]): LabResult {
      if (args.length === 0) {
        return { output: ['cat: missing file operand'] };
      }

      const lines: string[] = [];

      for (const arg of args) {
        const targetPath = normalizePath(arg, cwd);
        const node = getNode(root, targetPath);

        if (!node) {
          lines.push(`cat: ${arg}: No such file or directory`);
          continue;
        }

        if (node.kind !== 'file') {
          lines.push(`cat: ${arg}: Is a directory`);
          continue;
        }

        lines.push(node.content);
      }

      return { output: lines };
    },

    echo(args: string[]): LabResult {
      const redirectIndex = args.findIndex((item) => item === '>' || item === '>>');
      if (redirectIndex === -1) {
        return { output: [args.join(' ')] };
      }

      const operator = args[redirectIndex];
      const target = args[redirectIndex + 1];
      if (!target) {
        return { output: ['echo: redirection target missing'] };
      }

      const text = args.slice(0, redirectIndex).join(' ');
      const targetPath = normalizePath(target, cwd);
      const parent = getParentDir(root, targetPath);
      if (!parent) {
        return { output: [`echo: ${target}: No such file or directory`] };
      }

      const existing = parent.parent.children[parent.name];
      if (existing && existing.kind === 'dir') {
        return { output: [`echo: ${target}: Is a directory`] };
      }

      if (!existing) {
        parent.parent.children[parent.name] = { kind: 'file', content: text };
        return {};
      }

      const file = existing as FileNode;
      file.content = operator === '>>' ? `${file.content}${file.content ? '\n' : ''}${text}` : text;
      return {};
    },

    mkdir(args: string[]): LabResult {
      const targets = args.filter((item) => !item.startsWith('-'));
      if (targets.length === 0) {
        return { output: ['mkdir: missing operand'] };
      }

      const lines: string[] = [];

      for (const target of targets) {
        const targetPath = normalizePath(target, cwd);
        if (getNode(root, targetPath)) {
          lines.push(`mkdir: cannot create directory '${target}': File exists`);
          continue;
        }

        const parent = getParentDir(root, targetPath);
        if (!parent) {
          lines.push(`mkdir: cannot create directory '${target}': No such file or directory`);
          continue;
        }

        parent.parent.children[parent.name] = { kind: 'dir', children: {} };
      }

      return { output: lines };
    },

    touch(args: string[]): LabResult {
      if (args.length === 0) {
        return { output: ['touch: missing file operand'] };
      }

      const lines: string[] = [];

      for (const target of args) {
        const targetPath = normalizePath(target, cwd);
        const existing = getNode(root, targetPath);
        if (existing) {
          if (existing.kind === 'dir') {
            lines.push(`touch: cannot touch '${target}': Is a directory`);
          }
          continue;
        }

        const parent = getParentDir(root, targetPath);
        if (!parent) {
          lines.push(`touch: cannot touch '${target}': No such file or directory`);
          continue;
        }

        parent.parent.children[parent.name] = { kind: 'file', content: '' };
      }

      return { output: lines };
    },

    rm(args: string[]): LabResult {
      if (args.length === 0) {
        return { output: ['rm: missing operand'] };
      }

      const recursive = args.some((item) => item.startsWith('-') && item.includes('r'));
      const force = args.some((item) => item.startsWith('-') && item.includes('f'));
      const targets = args.filter((item) => !item.startsWith('-'));
      const lines: string[] = [];

      for (const target of targets) {
        const targetPath = normalizePath(target, cwd);
        if (targetPath === '/') {
          lines.push("rm: cannot remove '/': Operation not permitted");
          continue;
        }

        const node = getNode(root, targetPath);
        if (!node) {
          if (!force) {
            lines.push(`rm: cannot remove '${target}': No such file or directory`);
          }
          continue;
        }

        if (node.kind === 'dir' && !recursive) {
          lines.push(`rm: cannot remove '${target}': Is a directory`);
          continue;
        }

        const parent = getParentDir(root, targetPath);
        if (!parent) {
          lines.push(`rm: cannot remove '${target}': No such file or directory`);
          continue;
        }

        delete parent.parent.children[parent.name];
      }

      return { output: lines };
    },

    cp(args: string[]): LabResult {
      const recursive = args.some((item) => item.startsWith('-') && item.includes('r'));
      const targets = args.filter((item) => !item.startsWith('-'));
      if (targets.length !== 2) {
        return { output: ['cp: expected source and destination'] };
      }

      const [sourceArg, destinationArg] = targets;
      const sourcePath = normalizePath(sourceArg, cwd);
      const sourceNode = getNode(root, sourcePath);
      if (!sourceNode) {
        return { output: [`cp: cannot stat '${sourceArg}': No such file or directory`] };
      }

      if (sourceNode.kind === 'dir' && !recursive) {
        return { output: [`cp: -r not specified; omitting directory '${sourceArg}'`] };
      }

      let destinationPath = normalizePath(destinationArg, cwd);
      const destinationNode = getNode(root, destinationPath);
      if (destinationNode?.kind === 'dir') {
        destinationPath = `${destinationPath}/${basename(sourcePath)}`;
      }

      const parent = getParentDir(root, destinationPath);
      if (!parent) {
        return { output: [`cp: cannot create '${destinationArg}': No such file or directory`] };
      }

      parent.parent.children[parent.name] = cloneNode(sourceNode);
      return {};
    },

    mv(args: string[]): LabResult {
      if (args.length !== 2) {
        return { output: ['mv: expected source and destination'] };
      }

      const [sourceArg, destinationArg] = args;
      const sourcePath = normalizePath(sourceArg, cwd);
      const sourceNode = getNode(root, sourcePath);
      if (!sourceNode) {
        return { output: [`mv: cannot stat '${sourceArg}': No such file or directory`] };
      }

      if (sourcePath === '/') {
        return { output: ["mv: cannot move '/': Operation not permitted"] };
      }

      let destinationPath = normalizePath(destinationArg, cwd);
      const destinationNode = getNode(root, destinationPath);
      if (destinationNode?.kind === 'dir') {
        destinationPath = `${destinationPath}/${basename(sourcePath)}`;
      }

      const sourceParent = getParentDir(root, sourcePath);
      const destinationParent = getParentDir(root, destinationPath);
      if (!sourceParent || !destinationParent) {
        return { output: [`mv: cannot move to '${destinationArg}': No such file or directory`] };
      }

      delete sourceParent.parent.children[sourceParent.name];
      destinationParent.parent.children[destinationParent.name] = sourceNode;

      return {};
    },

    clear(): LabResult {
      return { clear: true };
    },

    help(): LabResult {
      return {
        output: [
          'Available commands:',
          'pwd, ls, cd, cat, echo, mkdir, touch, rm, cp, mv, whoami, date, clear, help',
        ],
      };
    },

    whoami(): LabResult {
      return { output: ['student'] };
    },

    date(): LabResult {
      return { output: [new Date().toString()] };
    },
  };

  return {
    prompt() {
      return helpers.currentPrompt();
    },

    reset() {
      helpers.reset();
    },

    run(rawInput: string): LabResult {
      const input = rawInput.trim();
      if (!input) {
        return {};
      }

      const tokens = tokenize(input);
      const command = tokens[0];
      const args = tokens.slice(1);

      const handler = commands[command as keyof typeof commands];
      if (!handler) {
        return { output: [`bash: ${command}: command not found. Try 'help'.`] };
      }

      return handler(args as never);
    },
  };
}
