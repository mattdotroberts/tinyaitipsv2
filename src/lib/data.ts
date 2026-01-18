// Placeholder data for frontend design testing

export interface Creator {
  id: string;
  name: string;
  slug: string;
  bio: string;
  twitter_handle?: string;
  linkedin_url?: string;
  youtube_channel?: string;
  website_url?: string;
}

export interface Topic {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export interface Tip {
  id: string;
  title: string;
  slug: string;
  content: string;
  when_useful: string;
  when_ignore: string;
  difficulty: 'quick-win' | 'moderate' | 'advanced';
  tools_required?: string;
  source_url: string;
  source_type: 'twitter' | 'linkedin' | 'youtube' | 'blog';
  creator_id: string;
  status: 'active' | 'contested' | 'outdated';
  extracted_at: string;
  verified_at?: string;
  topic_ids: string[];
  // Documentation correlation
  docs_url?: string;
  docs_section?: string;
}

export const creators: Creator[] = [
  {
    id: '1',
    name: 'Simon Willison',
    slug: 'simon-willison',
    bio: 'Creator of Datasette, co-creator of Django. Writing about LLMs, prompt engineering, and building with AI.',
    twitter_handle: 'simonw',
    website_url: 'https://simonwillison.net',
  },
  {
    id: '2',
    name: 'Ethan Mollick',
    slug: 'ethan-mollick',
    bio: 'Professor at Wharton studying AI and innovation. Author of "Co-Intelligence".',
    twitter_handle: 'emollick',
    linkedin_url: 'https://linkedin.com/in/emollick',
  },
  {
    id: '3',
    name: 'Linus Lee',
    slug: 'linus-lee',
    bio: 'AI researcher at Notion. Building tools for thought and exploring human-AI interaction.',
    twitter_handle: 'thesephist',
    website_url: 'https://thesephist.com',
  },
];

export const topics: Topic[] = [
  {
    id: '1',
    name: 'Prompt Engineering',
    slug: 'prompt-engineering',
    description: 'Techniques for writing effective prompts that get better results from AI models.',
  },
  {
    id: '2',
    name: 'ChatGPT Tips',
    slug: 'chatgpt-tips',
    description: 'Specific tips and tricks for getting the most out of ChatGPT.',
  },
  {
    id: '3',
    name: 'AI Coding',
    slug: 'ai-coding',
    description: 'Using AI assistants like Copilot, Cursor, and Claude for software development.',
  },
];

export const tips: Tip[] = [
  {
    id: '1',
    title: 'How do I get Claude to write in my style?',
    slug: 'get-claude-to-write-in-your-style',
    content: 'Paste 3-5 examples of your writing and ask Claude to analyze the style before writing new content. The model will identify patterns in tone, sentence structure, and vocabulary that it can then replicate.',
    when_useful: 'When you need AI-generated content that matches your existing voice, such as blog posts, emails, or documentation.',
    when_ignore: 'When you want fresh perspectives or deliberately different tones for new contexts.',
    difficulty: 'quick-win',
    source_url: 'https://twitter.com/simonw/status/example1',
    source_type: 'twitter',
    creator_id: '1',
    status: 'active',
    extracted_at: '2024-01-15',
    verified_at: '2024-01-16',
    topic_ids: ['1'],
  },
  {
    id: '2',
    title: 'What is the "pretend you are an expert" technique?',
    slug: 'pretend-you-are-an-expert-technique',
    content: 'Start prompts with "You are an expert [role]" to activate relevant knowledge patterns. This framing helps the model draw from specialized knowledge and adopt appropriate communication styles for that domain.',
    when_useful: 'When you need domain-specific advice or want responses calibrated to expert-level understanding.',
    when_ignore: 'For simple factual queries or when you need beginner-friendly explanations.',
    difficulty: 'quick-win',
    source_url: 'https://twitter.com/emollick/status/example2',
    source_type: 'twitter',
    creator_id: '2',
    status: 'active',
    extracted_at: '2024-01-10',
    topic_ids: ['1', '2'],
  },
  {
    id: '3',
    title: 'How should I structure complex coding prompts?',
    slug: 'structure-complex-coding-prompts',
    content: 'Break complex coding tasks into three parts: context (what exists), goal (what you want), and constraints (requirements and limitations). This structure prevents the AI from making assumptions and produces more accurate code.',
    when_useful: 'When asking for code that needs to integrate with existing systems or follow specific patterns.',
    when_ignore: 'For simple, standalone code snippets where context is obvious.',
    difficulty: 'moderate',
    tools_required: 'Any AI coding assistant (Copilot, Cursor, Claude)',
    source_url: 'https://thesephist.com/posts/ai-coding',
    source_type: 'blog',
    creator_id: '3',
    status: 'active',
    extracted_at: '2024-01-12',
    verified_at: '2024-01-14',
    topic_ids: ['1', '3'],
  },
  {
    id: '4',
    title: 'Why should I ask the AI to think step by step?',
    slug: 'ask-ai-to-think-step-by-step',
    content: 'Adding "think step by step" or "let\'s work through this" to prompts triggers chain-of-thought reasoning. This dramatically improves accuracy on math, logic, and multi-step problems by forcing the model to show its work.',
    when_useful: 'For math problems, logical reasoning, debugging, or any task requiring multiple steps.',
    when_ignore: 'For creative tasks or simple questions where step-by-step thinking adds unnecessary overhead.',
    difficulty: 'quick-win',
    source_url: 'https://twitter.com/emollick/status/example4',
    source_type: 'twitter',
    creator_id: '2',
    status: 'active',
    extracted_at: '2024-01-08',
    verified_at: '2024-01-09',
    topic_ids: ['1', '2'],
    docs_url: 'https://platform.openai.com/docs/guides/prompt-engineering#tactic-instruct-the-model-to-work-out-its-own-solution-before-rushing-to-a-conclusion',
    docs_section: 'OpenAI Prompt Engineering Guide',
  },
  {
    id: '5',
    title: 'How do I use AI to refactor legacy code safely?',
    slug: 'ai-refactor-legacy-code-safely',
    content: 'Feed the AI your existing tests first, then the code to refactor. Ask it to preserve all test-passing behavior while improving structure. This anchors the refactoring to verified behavior rather than assumptions.',
    when_useful: 'When improving codebases with good test coverage that you want to modernize without breaking.',
    when_ignore: 'For code without tests—write tests first, or the AI may change behavior unintentionally.',
    difficulty: 'advanced',
    tools_required: 'AI coding assistant, existing test suite',
    source_url: 'https://simonwillison.net/2024/refactoring/',
    source_type: 'blog',
    creator_id: '1',
    status: 'active',
    extracted_at: '2024-01-14',
    topic_ids: ['3'],
  },
  {
    id: '6',
    title: 'What is the "sandwich" feedback technique?',
    slug: 'sandwich-feedback-technique',
    content: 'When iterating on AI output, structure feedback as: what worked, what to change, then restate what to keep. This prevents the model from over-correcting and throwing out good elements while fixing problems.',
    when_useful: 'When refining AI-generated content through multiple iterations.',
    when_ignore: 'When output is completely off-base and needs a fresh start.',
    difficulty: 'moderate',
    source_url: 'https://twitter.com/emollick/status/example6',
    source_type: 'twitter',
    creator_id: '2',
    status: 'active',
    extracted_at: '2024-01-11',
    topic_ids: ['1'],
  },
  {
    id: '7',
    title: 'How can I get better code suggestions in Copilot?',
    slug: 'better-code-suggestions-copilot',
    content: 'Write a detailed comment describing the function before you start typing code. Copilot reads comments as context, so a clear description of inputs, outputs, and edge cases produces dramatically better suggestions.',
    when_useful: 'When starting new functions or methods where Copilot lacks context.',
    when_ignore: 'For simple one-liners or when modifying existing well-documented code.',
    difficulty: 'quick-win',
    tools_required: 'GitHub Copilot',
    source_url: 'https://twitter.com/thesephist/status/example7',
    source_type: 'twitter',
    creator_id: '3',
    status: 'active',
    extracted_at: '2024-01-13',
    verified_at: '2024-01-13',
    topic_ids: ['3'],
  },
  {
    id: '8',
    title: 'Should I use ChatGPT or Claude for long documents?',
    slug: 'chatgpt-vs-claude-long-documents',
    content: 'Claude handles longer contexts more reliably—use it for analyzing documents over 10,000 words. ChatGPT tends to lose track of details in very long inputs, while Claude maintains better coherence across the full context window.',
    when_useful: 'When working with long documents, codebases, or conversation histories.',
    when_ignore: 'For short interactions where both models perform similarly.',
    difficulty: 'quick-win',
    tools_required: 'Claude Pro or API access',
    source_url: 'https://simonwillison.net/2024/context-windows/',
    source_type: 'blog',
    creator_id: '1',
    status: 'active',
    extracted_at: '2024-01-09',
    topic_ids: ['2'],
    docs_url: 'https://docs.anthropic.com/en/docs/build-with-claude/context-windows',
    docs_section: 'Anthropic Context Windows Documentation',
  },
  {
    id: '9',
    title: 'How do I prevent ChatGPT from being too verbose?',
    slug: 'prevent-chatgpt-verbose',
    content: 'End prompts with "Be concise" or specify a word/sentence limit. You can also say "Reply in [X] sentences maximum" for precise control. ChatGPT defaults to thorough explanations unless constrained.',
    when_useful: 'When you need quick answers or have limited space for the output.',
    when_ignore: 'When you actually want detailed explanations or are exploring a topic.',
    difficulty: 'quick-win',
    source_url: 'https://twitter.com/emollick/status/example9',
    source_type: 'twitter',
    creator_id: '2',
    status: 'active',
    extracted_at: '2024-01-07',
    verified_at: '2024-01-08',
    topic_ids: ['2'],
  },
  {
    id: '10',
    title: 'What is context stuffing and when should I use it?',
    slug: 'context-stuffing-technique',
    content: 'Paste relevant documentation, examples, or reference material directly into your prompt before asking questions. AI models work best with explicit context rather than relying on training data that may be outdated or incomplete.',
    when_useful: 'When working with niche libraries, internal codebases, or recent APIs not in training data.',
    when_ignore: 'For well-known topics where the model\'s training data is sufficient and accurate.',
    difficulty: 'moderate',
    source_url: 'https://thesephist.com/posts/context-stuffing',
    source_type: 'blog',
    creator_id: '3',
    status: 'active',
    extracted_at: '2024-01-15',
    topic_ids: ['1', '3'],
  },
];

// Helper functions
export function getTipsByTopic(topicId: string): Tip[] {
  return tips.filter(tip => tip.topic_ids.includes(topicId));
}

export function getTipsByCreator(creatorId: string): Tip[] {
  return tips.filter(tip => tip.creator_id === creatorId);
}

export function getCreator(creatorId: string): Creator | undefined {
  return creators.find(c => c.id === creatorId);
}

export function getTopic(topicId: string): Topic | undefined {
  return topics.find(t => t.id === topicId);
}

export function getTopicsForTip(tip: Tip): Topic[] {
  return tip.topic_ids.map(id => getTopic(id)).filter((t): t is Topic => t !== undefined);
}

export function getRelatedTips(tip: Tip, limit = 3): Tip[] {
  return tips
    .filter(t => t.id !== tip.id && t.topic_ids.some(id => tip.topic_ids.includes(id)))
    .slice(0, limit);
}

export function getTipBySlug(slug: string): Tip | undefined {
  return tips.find(t => t.slug === slug);
}

export function getTopicBySlug(slug: string): Topic | undefined {
  return topics.find(t => t.slug === slug);
}

export function getCreatorBySlug(slug: string): Creator | undefined {
  return creators.find(c => c.slug === slug);
}

export type SourceType = Tip['source_type'];

export function getTipCountsBySource(creatorId: string): Record<SourceType, number> {
  const creatorTips = getTipsByCreator(creatorId);
  return creatorTips.reduce((acc, tip) => {
    acc[tip.source_type] = (acc[tip.source_type] || 0) + 1;
    return acc;
  }, {} as Record<SourceType, number>);
}
