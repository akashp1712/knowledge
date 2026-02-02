# AI Agent Rules & Conventions

This document defines the rules and conventions for creating and maintaining content files in this repository. All AI agents and human contributors must follow these guidelines to ensure consistency.

## 1. Directory Structure & Naming

- **Numbered Directories**: Directories within `content/` must be prefixed with a number and a dot for ordering (e.g., `1.openssl`, `2.voice-ai`).
- **Kebab-case**: Use kebab-case for the descriptive part of directory and file names.
- **Index Files**: Every directory should have a `1.index.md` file as its entry point.

## 2. Navigation Configuration (`.navigation.yml`)

Every directory in `content/` must contain a `.navigation.yml` file to define its appearance in the navigation sidebar.

```yaml
title: Section Name
icon: i-lucide-icon-name
```

- `title`: The display name for the section.
- `icon`: A Lucide icon identifier (prefix with `i-lucide-`).

## 3. Markdown File Requirements

### Frontmatter
Every `.md` file must start with YAML frontmatter containing:

```yaml
---
title: Page Title
description: A brief summary of the content for SEO and previews.
navigation:
  icon: i-lucide-icon-name
---
```

### Content Layout
- **Single H1**: Use exactly one `# Title` per page.
- **Hierarchy**: Use `##` for main sections and `###` for subsections.
- **Links**: When linking to other internal pages, use absolute paths relative to the content root, omitting the numeric prefixes (e.g., use `[Link Name](/openssl/certificates)` instead of `[Link Name](/1.openssl/2.certificates)`).

## 4. CSS & Styling

- Use Vanilla CSS for all custom styling.
- Follow the design system tokens defined in `index.css` (if applicable).
- Prioritize rich aesthetics: gradients, micro-animations, and modern typography.
