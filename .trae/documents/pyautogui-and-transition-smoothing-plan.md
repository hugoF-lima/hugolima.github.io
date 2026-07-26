# PyAutoGUI Tech Stack And Transition Smoothing Plan

## Summary

Add `pyautogui` as a visible plain-text stack item for the two Python automation projects (`xml-reader` and `recup-st-reader`), and improve the existing home-to-detail transition without collapsing `ProjectCard` and `ProjectDetail` into one component.

Chosen direction:
- Keep the current split route architecture.
- Refine the current transition overlay/handoff model instead of replacing it with a single shared component.
- Render `pyautogui` as a styled plaintext chip inside the existing tech stack row.

## Current State Analysis

### Tech stack rendering
- [`src/data/projects.ts`](file:///home/hugol/Documents/Web_Scripts/hugolima.github.io/src/data/projects.ts) defines `ProjectTech` as a string union and stores each project’s `techStack`.
- `xml-reader` currently uses `['python', 'pandas', 'xml', 'qt']`.
- `recup-st-reader` currently uses `['python', 'qt', 'json']`.
- [`src/App/Components/projectTechIcons.tsx`](file:///home/hugol/Documents/Web_Scripts/hugolima.github.io/src/App/Components/projectTechIcons.tsx) maps every `ProjectTech` value to a React icon component via `techIconMap`.
- The current model assumes every tech entry has an icon component. There is no fallback/render path for text-based tech items.

### Project meta rendering
- [`src/App/Components/ProjectMeta.tsx`](file:///home/hugol/Documents/Web_Scripts/hugolima.github.io/src/App/Components/ProjectMeta.tsx) renders the tech stack by iterating through `project.techStack` and always rendering an icon component.
- This means `pyautogui` cannot be introduced cleanly until the renderer supports mixed icon/text entries.

### Transition architecture
- [`src/App/App.tsx`](file:///home/hugol/Documents/Web_Scripts/hugolima.github.io/src/App/App.tsx) keeps `/` and `/project/:slug` as separate routes and mounts a global [`ProjectTransitionOverlay`](file:///home/hugol/Documents/Web_Scripts/hugolima.github.io/src/App/Components/ProjectTransitionOverlay.tsx).
- [`src/App/Components/ProjectCard.tsx`](file:///home/hugol/Documents/Web_Scripts/hugolima.github.io/src/App/Components/ProjectCard.tsx) captures the clicked card geometry and starts a forward transition.
- [`src/App/Components/ProjectDetail.tsx`](file:///home/hugol/Documents/Web_Scripts/hugolima.github.io/src/App/Components/ProjectDetail.tsx) settles the transition on the detail page and starts the reverse transition back home.
- [`src/App/transition/projectTransitionStore.tsx`](file:///home/hugol/Documents/Web_Scripts/hugolima.github.io/src/App/transition/projectTransitionStore.tsx) holds the overlay geometry and phase machine.
- [`src/index.css`](file:///home/hugol/Documents/Web_Scripts/hugolima.github.io/src/index.css) contains the current card glow/fade/overlay CSS.

### Why not merge both components into one?
- The repo already depends on route-based project detail pages and legacy redirects in `App.tsx`.
- The current detail page has its own layout, reverse navigation logic, and direct-entry support (`/project/:slug`).
- Merging home/detail into one component would be a larger routing/state rewrite than the current problem needs.
- The current weak point is transition fidelity and state handoff, not that the route split exists.

## Proposed Changes

### 1. Add `pyautogui` as a supported project tech value

**Files**
- `src/data/projects.ts`

**What**
- Extend `ProjectTech` to include `pyautogui`.
- Add `pyautogui` to the `techStack` arrays for:
  - `xml-reader`
  - `recup-st-reader`

**Why**
- These two projects use `pyautogui`, and the user wants it represented in the visible tech stack.

**How**
- Update the union type with `'pyautogui'`.
- Insert `pyautogui` into the two relevant project arrays without changing unrelated projects.

### 2. Refactor tech stack definitions to support icon-or-text entries

**Files**
- `src/App/Components/projectTechIcons.tsx`
- `src/App/Components/ProjectMeta.tsx`

**What**
- Change the tech definition model so a tech entry can render either:
  - a React icon component, or
  - a plaintext visual chip for entries like `pyautogui`

**Why**
- The current `techIconMap` assumes every tech has a library icon, which does not fit `pyautogui`.

**How**
- Replace the current “icon-only” definition shape with a discriminated structure such as:
  - `{ label, kind: 'icon', icon }`
  - `{ label, kind: 'text', text }`
- Add a `pyautogui` entry using the text path.
- Update `ProjectMeta.tsx` so the tech-row renderer switches by `kind` and emits either:
  - the existing icon markup, or
  - a text-based tech element with matching spacing/alignment semantics
- Keep accessibility text (`aria-label`, `title`) intact for both render paths.

### 3. Style the plaintext `pyautogui` item so it fits the icon row

**Files**
- `src/index.css`

**What**
- Add styling for text-based tech items so they feel intentional in the same row as the white stack icons.

**Why**
- A raw text string would look disconnected from the rest of the stack row.

**How**
- Add a dedicated class for text tech items, separate from `.project-tech-icon`.
- Keep it visually compact and aligned to the icon baseline.
- Use a restrained monochrome treatment so `pyautogui` reads as a designed stack marker rather than a button.
- Preserve the existing hover growth behavior only if it still feels consistent when mixed with icons; otherwise keep the text chip stable while icons continue to scale.

### 4. Improve transition smoothness while keeping the split components

**Files**
- `src/App/Components/ProjectTransitionOverlay.tsx`
- `src/App/transition/projectTransitionStore.tsx`
- `src/App/Components/ProjectCard.tsx`
- `src/App/Components/ProjectDetail.tsx`
- `src/index.css`

**What**
- Refine the existing forward/reverse transition so it feels smoother and more continuous without changing the route structure.

**Why**
- The current route split is acceptable; the roughness comes from timing, geometry, and visual mismatch between the source card, overlay, and destination detail shell.

**How**
- Improve the transition along these lines:
  1. **Geometry fidelity**
     - capture more accurate source/destination measurements
     - reduce abrupt jumps between card bounds and detail bounds
     - ensure overlay height/width better match the real detail shell target
  2. **Phase timing**
     - rebalance the current hardcoded delays (`70ms`, `420ms`, `240ms`, `60ms`) so glow/fade/expand/route feel coordinated instead of serialized too sharply
     - centralize the timings in `projectTransitionStore.tsx` or a nearby constant block so the motion model is easier to tune consistently
  3. **Visual continuity**
     - make the overlay content more closely resemble the detail shell’s actual structure
     - reduce the perception that the overlay and routed detail are two different surfaces
     - smooth the opacity handoff between overlay and destination detail shell
  4. **Reverse transition quality**
     - make the return animation use the same measured-card targeting discipline as the forward path
     - ensure cleanup always returns the store to `idle`
     - keep the destination home card hidden only for the duration of the reverse overlay handoff

### 5. Prefer refinement over component unification

**Files**
- Plan-level decision; implementation remains in the files above

**What**
- Explicitly keep `ProjectCard` and `ProjectDetail` as separate components/routes.

**Why**
- This preserves:
  - deep links to `/project/:slug`
  - existing route structure and legacy redirects
  - separation between home-card summary UI and detail-page content
- It also avoids a broader rewrite that is not necessary for the requested improvement.

**How**
- No architectural merge.
- Focus implementation on the overlay, timing, and visual handoff instead.

## Assumptions & Decisions

- Decision: `pyautogui` should be visibly present in the stack row for `xml-reader` and `recup-st-reader`.
- Decision: `pyautogui` will render as a plaintext chip, not a faux icon graphic and not tooltip-only.
- Decision: the transition work should optimize the current split-route design rather than merging home/detail into one component.
- Assumption: direct visits to `/project/:slug` must continue to work without requiring the home page to have mounted first.
- Assumption: the current home/detail content model in `projects.ts` remains unchanged apart from adding the new tech item.
- Assumption: “smoother” means less perceptible mismatch and less abrupt timing between the selected card, overlay, and routed detail shell rather than adding entirely new motion concepts.

## Verification Steps

1. **Tech stack rendering**
   - Verify `xml-reader` and `recup-st-reader` both show `pyautogui` in the tech stack.
   - Verify the new plaintext item appears on both the home card and the detail page.
   - Verify the mixed icon/text stack remains aligned and readable on desktop and mobile.

2. **Forward transition**
   - Click a project card and verify:
     - border glow still appears
     - sibling cards fade out
     - the selected card expands smoothly
     - the detail handoff feels less abrupt than before

3. **Reverse transition**
   - From the detail page, use “Back to Home”.
   - Verify the reverse animation lands cleanly back on the selected home card.
   - Verify there is no stuck overlay and no stale hidden card after the return completes.

4. **Repeatability**
   - Open a card, return home, and open the same card again.
   - Repeat with a different card.
   - Verify the transition system returns to `idle` after each cycle and remains responsive.

5. **Regression checks**
   - Verify `npm run build` succeeds.
   - Verify current slideshow/lightbox behavior still works on home and detail pages.
   - Verify existing icon-based tech entries still render correctly.
