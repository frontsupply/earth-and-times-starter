# Opening Brief for Codex

We are building a web app called Earth & Times.

Product:
A living biblical clock and witnessing tool. The app centers on an immersive fullscreen observatory-style Clock experience with a warm glowing sun disc, subtle moon, faint azimuthal equidistant earth map, atmospheric gradients, restrained serif typography, and a bottom metadata band showing biblical time data.

Top-level routes:
Clock, Today, Times, Earth, Scripture, Studies, About, Method, Glossary, Sources.

Times subroutes:
Chronology, Appointed Times, Convergence.

Earth subroutes:
Scriptural Architecture, Firmament, Waters Above and Below, Foundations and Pillars, Fixed Earth, Luminaries.

Visual direction:
Premium meditative observatory interface inspired by Tycho-style album art. Dark atmospheric gradients, dusty teal and apricot tones, deep negative space, elegant editorial composition, Cormorant Garamond for display text, restrained metadata, translucent dark panels, minimal controls.

Architecture:
Use Next.js, Tailwind, Supabase, and Vercel. Keep all time/calendar/cosmology calculations in a separate engine package. Keep content in Supabase. Use typed models and reusable components. Do not build this like a dashboard.

Initial goal:
Create the app shell, hidden navigation, immersive Clock screen with placeholder state, and scaffolded routes for all main sections.
