export interface Writing {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  tags: string[];
}

export const writings: Writing[] = [
  {
    slug: 'network-mental-model',
    title: 'What actually happens when my program communicates with a server?',
    description:
      'A simple mental model of client-server communication, packets, and what happens under the hood.',
    publishedAt: '2026-10-07',
    tags: ['networking', 'http', 'systems']
  },
  {
    slug: 'http-interesting',
    title: 'Why HTTP is more interesting than I thought',
    description:
      'Notes on HTTP, requests, responses, and the design decisions behind it.',
    publishedAt: '2026-10-01',
    tags: ['http', 'web', 'protocols']
  },
  {
    slug: 'cli-habit-tracker',
    title: 'Building a CLI habit tracker in C',
    description:
      'Design, implementation and lessons learned from habitctl.',
    publishedAt: '2026-09-28',
    tags: ['c', 'sqlite', 'cli']
  },
  {
    slug: 'local-llm-linux',
    title: 'Setting up a local LLM workflow on Linux',
    description:
      'Notes on running and using local models with Ollama.',
    publishedAt: '2026-09-20',
    tags: ['ai', 'linux', 'tools']
  }
];
