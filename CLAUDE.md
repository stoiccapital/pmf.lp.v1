# CLAUDE.md — LP Factory Constitution

## Purpose

This repository is an LP factory for PMF validation across many theses.
Goal: produce visually identical, deterministic landing pages at scale,
varying only copy and mock UI per thesis.

End goal: durable free cash flow for Eien Holding via validated theses
that convert to paying customers.

## Non-Negotiables

1. The design system is the source of truth. No exceptions.
2. Tokens are the only allowed values for spacing, color, type, radius,
   shadow, motion. No arbitrary Tailwind values. No inline styles.
3. Sections are drawn from the canonical catalog in `lp-system/sections/`.
   No new section types without explicit extension.
4. UI components are drawn from `lp-system/components/`. No per-LP
   components.
5. Copy lives in `lp-system/locales/{de,en}.json`. Never inline in
   components.
6. Same input produces same output. Determinism is the standard.

## Reading Order (load these before working)

Always load in this order before any task:

1. `lp-system/docs/design-system/prime-directive.md`
2. `lp-system/docs/design-system/tokens.md`
3. `lp-system/docs/design-system/spacing-layout.md`
4. `lp-system/docs/design-system/color-theme.md`
5. `lp-system/docs/design-system/section-recipes.md`
6. `lp-system/docs/design-system/motion-interaction.md`
7. `lp-system/docs/design-system/quality-gates.md`
8. `lp-system/docs/design-system/extension-process.md`
9. `lp-system/docs/architecture/theme-locale-toggle/*.md`

For LP creation tasks, additionally load:
- `lp-system/config/lp-config.ts` (current LP definition)
- `lp-system/locales/de.json` and `en.json` (current copy)

## Directory Map

- `app/` — Next.js routing. Single locale-aware entry. Do not add
  per-page logic here.
- `lp-system/templates/LandingPage.tsx` — Canonical page composition.
  Modify only via extension process.
- `lp-system/sections/` — Canonical section catalog. 14 sections
  available. No new sections without extension.
- `lp-system/components/` — Shared UI primitives. No per-LP components.
- `lp-system/config/` — Single source of truth for tokens, theme,
  preferences, types, and per-LP configuration.
- `lp-system/locales/` — All copy. Two JSON files (de, en) with
  identical structure.
- `lp-system/docs/` — Design system and architecture documentation.

## How to Build a New LP

[PLACEHOLDER — depends on answer to question 2 above]

If LPs are separate deployments:
1. Update `lp-system/config/lp-config.ts` with new thesis data
2. Update `lp-system/locales/de.json` and `en.json` with new copy
3. Update mock UI config (location TBD)
4. Run `npm run build` and verify quality gates pass
5. Deploy to Vercel

If LPs are separate routes:
1. Add new route under `app/[locale]/[vertical]/[slug]/`
2. Configure thesis-specific data via lp-config pattern
3. Verify quality gates pass

## Workflow Rules

**Before any code change:**
- Identify which design system files govern the change
- Verify the change is within existing vocabulary
- If extension is needed, stop and surface to Anh — do not extend
  autonomously

**During code changes:**
- Only modify files listed in "Files to modify" in relevant architecture docs
- Use only tokens from `lp-system/config/design-system.ts` (and theme.ts)
- Use only components from `lp-system/components/` and sections from
  `lp-system/sections/`

**Before completing:**
- Run quality gates check (`npm run [VALIDATE_COMMAND]`)
- Verify de.json and en.json have identical structure
- Verify no arbitrary Tailwind values, no inline styles, no dark:
  variants for default colors

## Forbidden

- Arbitrary Tailwind values (`text-[14px]`, `p-[23px]`, etc.)
- Inline `style={{...}}` attributes
- `text-white` / `text-black` for default copy (use semantic tokens)
- Per-section theme branching (`dark:` for defaults)
- New section types without extension
- Per-LP components
- Copy inlined in components
- New global utilities unless already used in the codebase
- Reorganizing the directory structure
- Modifying the shell order (Navbar → Sections → Footer)
- Adding Navbar sections beyond: LocaleToggle → ThemeToggle → Primary CTA

## Escalation Protocol

Surface to Anh before acting if:
- A task requires extending the design system (new token, new component,
  new section type)
- Two design system docs conflict
- A spec in CLAUDE.md conflicts with a design system doc
- A request would violate a non-negotiable

Do not extend the system autonomously. Do not work around constraints
silently.

## Commands

- `npm run dev` — Development server (NOT for QA)
- `npm run build` — Production build (use for QA)
- `npm start` — Production server (use for QA)
- `npm run lint` — ESLint check
- [PLACEHOLDER — add type-check, validation gates, drift detection
  commands as they exist]

## Tech Stack (Locked)

- Next.js (App Router)
- TypeScript (strict mode)
- Tailwind CSS (token-based only)
- No additional UI libraries
- No additional state libraries
- No additional dependencies without explicit approval