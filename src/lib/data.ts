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

export interface WeeklyDigest {
  id: string;
  slug: string;              // e.g., "2024-w03"
  week_start: string;        // ISO date
  week_end: string;          // ISO date
  title: string;             // e.g., "Chain of Thought Takes Center Stage"
  summary: string;           // 2-3 sentence overview
  highlights: string[];      // Featured tip IDs
  tip_ids: string[];         // All tips from this week
  theme_topic_id?: string;   // Optional dominant topic
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
  {
    id: '4',
    name: 'Swyx',
    slug: 'swyx',
    bio: 'AI engineer and educator. Founder of Latent Space, exploring the AI engineering landscape.',
    twitter_handle: 'swyx',
    youtube_channel: 'https://youtube.com/@LatentSpaceTV',
    website_url: 'https://latent.space',
  },
  {
    id: '5',
    name: 'Riley Goodside',
    slug: 'riley-goodside',
    bio: 'Staff prompt engineer at Scale AI. Known for creative prompt engineering techniques and jailbreak research.',
    twitter_handle: 'goodaboradori',
  },
  {
    id: '6',
    name: 'Cassie Kozyrkov',
    slug: 'cassie-kozyrkov',
    bio: 'Former Chief Decision Scientist at Google. Expert on AI decision-making and practical ML applications.',
    linkedin_url: 'https://linkedin.com/in/kozyrkov',
    youtube_channel: 'https://youtube.com/@DataScientist',
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
  {
    id: '4',
    name: 'AI Images',
    slug: 'ai-images',
    description: 'Tips for generating better images with DALL-E, Midjourney, and Stable Diffusion.',
  },
  {
    id: '5',
    name: 'AI Agents',
    slug: 'ai-agents',
    description: 'Building and using autonomous AI agents for complex multi-step tasks.',
  },
  {
    id: '6',
    name: 'Enterprise AI',
    slug: 'enterprise-ai',
    description: 'Deploying AI safely and effectively in business and organizational contexts.',
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
  // New tips
  {
    id: '11',
    title: 'How do I write better Midjourney prompts?',
    slug: 'better-midjourney-prompts',
    content: 'Structure Midjourney prompts as: subject + style + lighting + camera angle + quality modifiers. For example: "portrait of a scientist, oil painting style, golden hour lighting, close-up shot, highly detailed, 8k". Order matters—put the most important elements first.',
    when_useful: 'When generating images and wanting consistent, professional-quality results.',
    when_ignore: 'For quick concept sketches where style doesn\'t matter as much.',
    difficulty: 'moderate',
    tools_required: 'Midjourney',
    source_url: 'https://youtube.com/watch?v=example11',
    source_type: 'youtube',
    creator_id: '4',
    status: 'active',
    extracted_at: '2024-01-20',
    verified_at: '2024-01-21',
    topic_ids: ['4'],
    docs_url: 'https://docs.midjourney.com/docs/prompts',
    docs_section: 'Midjourney Prompt Documentation',
  },
  {
    id: '12',
    title: 'What are negative prompts in image generation?',
    slug: 'negative-prompts-image-generation',
    content: 'Negative prompts tell the model what NOT to include. In Stable Diffusion, add things like "blurry, low quality, distorted hands, extra fingers" to improve output quality. This is especially useful for avoiding common AI image artifacts.',
    when_useful: 'When you keep getting unwanted elements in your generated images.',
    when_ignore: 'With models that don\'t support negative prompts, like basic DALL-E.',
    difficulty: 'quick-win',
    tools_required: 'Stable Diffusion or Midjourney',
    source_url: 'https://twitter.com/goodaboradori/status/example12',
    source_type: 'twitter',
    creator_id: '5',
    status: 'active',
    extracted_at: '2024-01-19',
    topic_ids: ['4'],
  },
  {
    id: '13',
    title: 'How do I build a simple AI agent with function calling?',
    slug: 'simple-ai-agent-function-calling',
    content: 'Define your tools as JSON schemas, then let the model decide when to call them. Start simple: one tool for search, one for calculation. The model returns a function call instead of text, you execute it, feed results back. Loop until done.',
    when_useful: 'When building bots that need to take actions in the real world, like booking or searching.',
    when_ignore: 'For simple Q&A where the model\'s knowledge is sufficient.',
    difficulty: 'advanced',
    tools_required: 'OpenAI API or Claude API with tool use',
    source_url: 'https://latent.space/p/agents-tutorial',
    source_type: 'blog',
    creator_id: '4',
    status: 'active',
    extracted_at: '2024-01-22',
    topic_ids: ['5', '3'],
    docs_url: 'https://platform.openai.com/docs/guides/function-calling',
    docs_section: 'OpenAI Function Calling Guide',
  },
  {
    id: '14',
    title: 'What is the ReAct pattern for AI agents?',
    slug: 'react-pattern-ai-agents',
    content: 'ReAct combines Reasoning and Acting. The agent thinks out loud (Reason), takes an action (Act), observes the result, then repeats. Format: "Thought: I need to... Action: search(...) Observation: [results] Thought: Now I know..."',
    when_useful: 'When building agents that need to solve complex multi-step problems with tools.',
    when_ignore: 'For simple single-turn interactions without tool use.',
    difficulty: 'advanced',
    source_url: 'https://youtube.com/watch?v=example14',
    source_type: 'youtube',
    creator_id: '4',
    status: 'active',
    extracted_at: '2024-01-23',
    topic_ids: ['5'],
  },
  {
    id: '15',
    title: 'How should I evaluate AI outputs in my organization?',
    slug: 'evaluate-ai-outputs-organization',
    content: 'Create a rubric before deploying. Define what "good" looks like with specific criteria: accuracy, tone, completeness, safety. Have humans rate a sample of outputs weekly. Track trends over time. Don\'t just measure speed—measure quality.',
    when_useful: 'When rolling out AI tools to teams and needing to maintain quality standards.',
    when_ignore: 'For personal use where informal quality checks are sufficient.',
    difficulty: 'moderate',
    source_url: 'https://linkedin.com/posts/kozyrkov/example15',
    source_type: 'linkedin',
    creator_id: '6',
    status: 'active',
    extracted_at: '2024-01-24',
    topic_ids: ['6'],
  },
  {
    id: '16',
    title: 'What are the key risks of enterprise AI deployment?',
    slug: 'enterprise-ai-deployment-risks',
    content: 'Three main risks: data leakage (sensitive info in prompts going to third parties), hallucination liability (AI confidently stating false information), and shadow AI (employees using unapproved tools). Address each with policies, not just technology.',
    when_useful: 'When planning AI rollout and need to brief leadership on risk management.',
    when_ignore: 'For personal projects without compliance or liability concerns.',
    difficulty: 'moderate',
    source_url: 'https://youtube.com/watch?v=example16',
    source_type: 'youtube',
    creator_id: '6',
    status: 'active',
    extracted_at: '2024-01-25',
    topic_ids: ['6'],
  },
  {
    id: '17',
    title: 'How do I use AI to debug code faster?',
    slug: 'ai-debug-code-faster',
    content: 'Paste the error message, the relevant code, and what you expected to happen. Ask: "What is causing this error and how do I fix it?" The AI can often spot issues humans miss, like off-by-one errors or incorrect variable scope.',
    when_useful: 'When stuck on a bug and want a fresh perspective quickly.',
    when_ignore: 'For trivial syntax errors your IDE already highlights.',
    difficulty: 'quick-win',
    source_url: 'https://twitter.com/simonw/status/example17',
    source_type: 'twitter',
    creator_id: '1',
    status: 'active',
    extracted_at: '2024-01-26',
    verified_at: '2024-01-26',
    topic_ids: ['3'],
  },
  {
    id: '18',
    title: 'What is prompt injection and how do I prevent it?',
    slug: 'prompt-injection-prevention',
    content: 'Prompt injection is when user input overrides your system instructions. Prevent it by: separating user input with clear delimiters, validating inputs, using the system message for instructions (not user message), and never trusting user input to be benign.',
    when_useful: 'When building apps where users provide input that gets sent to an LLM.',
    when_ignore: 'For personal use cases without untrusted user input.',
    difficulty: 'advanced',
    source_url: 'https://simonwillison.net/2024/prompt-injection/',
    source_type: 'blog',
    creator_id: '1',
    status: 'active',
    extracted_at: '2024-01-27',
    topic_ids: ['5', '6'],
    docs_url: 'https://owasp.org/www-project-top-10-for-llm-applications/',
    docs_section: 'OWASP Top 10 for LLMs',
  },
  {
    id: '19',
    title: 'How do I get DALL-E to generate consistent characters?',
    slug: 'dalle-consistent-characters',
    content: 'Describe your character in extreme detail once, then reference that description. Include: specific clothing, hair color/style, distinguishing features, art style. Save your "character sheet" prompt and append it to every generation request.',
    when_useful: 'When creating comics, storyboards, or any content needing the same character multiple times.',
    when_ignore: 'For one-off image generations where consistency doesn\'t matter.',
    difficulty: 'moderate',
    tools_required: 'DALL-E 3 or Midjourney',
    source_url: 'https://twitter.com/goodaboradori/status/example19',
    source_type: 'twitter',
    creator_id: '5',
    status: 'active',
    extracted_at: '2024-01-28',
    topic_ids: ['4'],
  },
  {
    id: '20',
    title: 'What temperature setting should I use?',
    slug: 'temperature-setting-guide',
    content: 'Temperature controls randomness. Use 0-0.3 for factual tasks (coding, math, analysis), 0.5-0.7 for balanced tasks (writing, summarization), and 0.8-1.0 for creative tasks (brainstorming, fiction). Start low and increase if outputs feel too rigid.',
    when_useful: 'When you have API access and can control model parameters.',
    when_ignore: 'When using ChatGPT web interface where you can\'t adjust settings.',
    difficulty: 'moderate',
    source_url: 'https://linkedin.com/posts/emollick/example20',
    source_type: 'linkedin',
    creator_id: '2',
    status: 'active',
    extracted_at: '2024-01-29',
    topic_ids: ['1'],
    docs_url: 'https://platform.openai.com/docs/api-reference/chat/create#chat-create-temperature',
    docs_section: 'OpenAI API Reference',
  },
  {
    id: '21',
    title: 'How do I use Cursor for full-codebase refactoring?',
    slug: 'cursor-full-codebase-refactoring',
    content: 'Use Cursor\'s @codebase mention to give the AI context of your entire project. Then ask for specific refactoring: "Rename all instances of UserService to AuthService and update all imports." Cursor will propose changes across multiple files.',
    when_useful: 'When refactoring requires changes across many files simultaneously.',
    when_ignore: 'For small changes in a single file where regular editing is faster.',
    difficulty: 'moderate',
    tools_required: 'Cursor IDE',
    source_url: 'https://thesephist.com/posts/cursor-tips',
    source_type: 'blog',
    creator_id: '3',
    status: 'active',
    extracted_at: '2024-01-30',
    topic_ids: ['3'],
  },
  {
    id: '22',
    title: 'What is "few-shot prompting" and when should I use it?',
    slug: 'few-shot-prompting-guide',
    content: 'Few-shot prompting means giving 2-5 examples before your actual request. Format: "Example 1: [input] -> [output]. Example 2: [input] -> [output]. Now do this: [your input]". The model learns the pattern from examples.',
    when_useful: 'When you need a specific output format or style the model doesn\'t default to.',
    when_ignore: 'For tasks where the model already understands what you want from the instruction alone.',
    difficulty: 'quick-win',
    source_url: 'https://twitter.com/goodaboradori/status/example22',
    source_type: 'twitter',
    creator_id: '5',
    status: 'active',
    extracted_at: '2024-01-31',
    verified_at: '2024-02-01',
    topic_ids: ['1'],
    docs_url: 'https://platform.openai.com/docs/guides/prompt-engineering#tactic-provide-examples',
    docs_section: 'OpenAI Prompt Engineering Guide',
  },
  {
    id: '23',
    title: 'How do I handle AI hallucinations in production?',
    slug: 'handle-ai-hallucinations-production',
    content: 'Layer defenses: ask the model to cite sources, implement fact-checking against known databases, flag low-confidence responses for human review, and set clear expectations with users that AI can make mistakes. Never fully automate high-stakes decisions.',
    when_useful: 'When building production systems where accuracy matters.',
    when_ignore: 'For brainstorming or creative work where some inaccuracy is acceptable.',
    difficulty: 'advanced',
    source_url: 'https://youtube.com/watch?v=example23',
    source_type: 'youtube',
    creator_id: '6',
    status: 'contested',
    extracted_at: '2024-02-02',
    topic_ids: ['6', '5'],
  },
  {
    id: '24',
    title: 'Should I use GPT-4 or a fine-tuned smaller model?',
    slug: 'gpt4-vs-fine-tuned-model',
    content: 'Use GPT-4 for prototyping and diverse tasks. Fine-tune smaller models when you have consistent, narrow use cases with thousands of examples. Fine-tuned models are cheaper to run but expensive to train and maintain. Start with GPT-4, only fine-tune if cost becomes prohibitive.',
    when_useful: 'When making architecture decisions for production AI systems.',
    when_ignore: 'For personal use where cost per query isn\'t a major concern.',
    difficulty: 'advanced',
    source_url: 'https://latent.space/p/fine-tuning-guide',
    source_type: 'blog',
    creator_id: '4',
    status: 'active',
    extracted_at: '2024-02-03',
    topic_ids: ['6', '1'],
  },
  {
    id: '25',
    title: 'How do I write system prompts that stick?',
    slug: 'system-prompts-that-stick',
    content: 'Put the most important instructions at the start AND end of the system prompt (primacy and recency effects). Use clear formatting like numbered lists. Repeat critical constraints. Test with adversarial inputs to see if the model breaks character.',
    when_useful: 'When building chatbots or assistants that need to maintain consistent behavior.',
    when_ignore: 'For one-off prompts where you don\'t need persistent behavior.',
    difficulty: 'moderate',
    source_url: 'https://twitter.com/goodaboradori/status/example25',
    source_type: 'twitter',
    creator_id: '5',
    status: 'active',
    extracted_at: '2024-02-04',
    verified_at: '2024-02-05',
    topic_ids: ['1', '5'],
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

// Weekly digests
export const weeklyDigests: WeeklyDigest[] = [
  {
    id: '1',
    slug: '2024-w06',
    week_start: '2024-02-05',
    week_end: '2024-02-11',
    title: 'System Prompts and Production Readiness',
    summary: 'This week focused on building reliable AI systems. Key insights on writing persistent system prompts and handling hallucinations in production environments.',
    highlights: ['25', '23'],
    tip_ids: ['23', '24', '25'],
    theme_topic_id: '5',
  },
  {
    id: '2',
    slug: '2024-w05',
    week_start: '2024-01-29',
    week_end: '2024-02-04',
    title: 'Temperature, Fine-tuning, and Cursor Tips',
    summary: 'A week of optimization techniques. Learn when to adjust temperature settings, whether to fine-tune models, and power-user tips for Cursor IDE.',
    highlights: ['20', '21'],
    tip_ids: ['20', '21', '22'],
    theme_topic_id: '1',
  },
  {
    id: '3',
    slug: '2024-w04',
    week_start: '2024-01-22',
    week_end: '2024-01-28',
    title: 'AI Security and Consistent Image Generation',
    summary: 'Security meets creativity. Important tips on preventing prompt injection alongside techniques for generating consistent characters in AI art.',
    highlights: ['18', '19'],
    tip_ids: ['17', '18', '19'],
    theme_topic_id: '6',
  },
  {
    id: '4',
    slug: '2024-w03',
    week_start: '2024-01-15',
    week_end: '2024-01-21',
    title: 'Agents, Enterprise AI, and Image Prompts',
    summary: 'A diverse week covering AI agents with function calling, enterprise deployment risks, and Midjourney prompt engineering.',
    highlights: ['13', '16'],
    tip_ids: ['11', '12', '13', '14', '15', '16'],
    theme_topic_id: '5',
  },
  {
    id: '5',
    slug: '2024-w02',
    week_start: '2024-01-08',
    week_end: '2024-01-14',
    title: 'Chain of Thought Takes Center Stage',
    summary: 'Reasoning techniques dominated this week. The step-by-step prompting tip gained traction, alongside structured approaches for complex coding tasks.',
    highlights: ['4', '3'],
    tip_ids: ['1', '3', '4', '5', '6', '7', '10'],
    theme_topic_id: '1',
  },
  {
    id: '6',
    slug: '2024-w01',
    week_start: '2024-01-01',
    week_end: '2024-01-07',
    title: 'ChatGPT vs Claude: Know Your Tools',
    summary: 'The first week of 2024 brought practical comparisons between major AI models. Tips covered when to use Claude for long documents and how to tame ChatGPT\'s verbosity.',
    highlights: ['8', '9'],
    tip_ids: ['2', '8', '9'],
    theme_topic_id: '2',
  },
];

export function getDigestBySlug(slug: string): WeeklyDigest | undefined {
  return weeklyDigests.find(d => d.slug === slug);
}

export function getTipsForDigest(digest: WeeklyDigest): Tip[] {
  return digest.tip_ids.map(id => tips.find(t => t.id === id)).filter((t): t is Tip => t !== undefined);
}

export function getHighlightedTips(digest: WeeklyDigest): Tip[] {
  return digest.highlights.map(id => tips.find(t => t.id === id)).filter((t): t is Tip => t !== undefined);
}

export function getCurrentDigest(): WeeklyDigest | undefined {
  return weeklyDigests[0]; // Most recent first
}

export function getRecentDigests(limit = 5): WeeklyDigest[] {
  return weeklyDigests.slice(0, limit);
}
