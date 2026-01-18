# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Tiny AI Tips is a static site directory of atomic AI tips optimized for AI search citation. Content will eventually be scraped from Twitter, LinkedIn, YouTube, and blogs, then extracted into structured tips.

## Commands

```bash
npm run dev      # Start dev server (typically port 4321)
npm run build    # Build for production
npm run preview  # Preview production build
```

## Architecture

**Hub and spoke model:**
- **Tip pages** (`/tips/[slug]`) - Individual atomic tips, one per URL, with HowTo schema
- **Topic hubs** (`/topics/[slug]`) - Aggregate tips per topic with FAQPage schema for AI search density
- **Creator pages** (`/creators/[slug]`) - All tips from a specific creator

**Tech Stack:** Astro, Tailwind CSS v4, static generation

**Data:** Currently using placeholder data in `src/lib/data.ts`. Will later connect to SQLite via Turso.

## Key Files

- `src/lib/data.ts` - Placeholder data and helper functions (types, tips, topics, creators)
- `src/layouts/BaseLayout.astro` - Shared layout with SEO meta tags and schema markup slot
- `src/components/TipFull.astro` - Complete tip display with all metadata sections
- `src/components/TipCard.astro` - Preview card for listings

## Tip Page Structure (exact order for AI search)

1. Title as h1 (question or how-to phrased)
2. Direct answer (1-2 sentences, no preamble)
3. "When to use this" section
4. "When to skip this" section
5. Difficulty badge
6. Tools required (if any)
7. Source attribution with link
8. Extracted/verified dates
9. Status badge if contested/outdated
10. Related tips

## Data Model

```typescript
Tip: { title, slug, content, when_useful, when_ignore, difficulty, tools_required?, source_url, source_type, creator_id, status, extracted_at, verified_at?, topic_ids[] }
Topic: { id, name, slug, description }
Creator: { id, name, slug, bio, twitter_handle?, linkedin_url?, youtube_channel?, website_url? }
```

## Design Principles

- Clean, minimal, fast-loading
- No JavaScript required for core reading experience
- Mobile-first, high contrast for readability
- Tip cards scannable at a glance
