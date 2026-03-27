# Earth & Times Starter Repo

This is a repo-ready starter for **Earth & Times**.

## What this includes
- monorepo-style folder structure
- Next.js app shell location
- starter route map
- basic design token guidance
- placeholder engine contract
- Supabase migration starter
- docs bundle for Codex handoff

## Suggested setup
1. Create a new GitHub repo named `earth-and-times`
2. Unzip this folder into the repo
3. Open `docs/OPENING_BRIEF_FOR_CODEX.md`
4. Give that brief to Codex
5. Start with Prompt 1 in `docs/TASKS.md`

## First goal
Get a deployed Vercel preview with:
- immersive Clock screen
- hidden navigation
- all top-level routes
- placeholder content
- no real astronomy yet

## Stack
- Next.js
- Tailwind CSS
- Framer Motion
- Supabase
- Vercel

## Notes
Keep all heavy time and calendar logic inside `packages/engine`.
Keep content in Supabase instead of hardcoding long-form text into UI components.
