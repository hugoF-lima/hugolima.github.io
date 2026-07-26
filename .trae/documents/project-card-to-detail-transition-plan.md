# Project Card To Detail Transition Plan

## Summary

Introduce a route-aware transition between the home project cards and the project detail page so the experience feels like one continuous expansion instead of a hard page swap.

Requested behavior to implement:
- On home card click, the selected card border briefly shines in a blue tone.
- Non-selected cards fade downward and out.
- The selected card expands horizontally and vertically while keeping the title and slideshow at the same visual resolution.
- The routed detail page should begin in the same expanded composition so the handoff feels seamless.
- On desktop, the expanded/detail composition should place the long description to the right of the slideshow and the showcase/videos below.
- On smaller screens, the content should stack vertically.
- Returning from detail to home should use a reverse transition when possible.

## Current State Analysis

### Routing and page composition
- [`src/App/App.tsx`](file:///home/hugol/Documents/Web_Scripts/hugolima.github.io/src/App/App.tsx) uses `BrowserRouter` with separate routes for `/` and `/project/:slug`.
- The home page renders project cards in grouped rows via `.container` and `.item-group`.
- The detail page is a distinct route and currently renders a separate full-width layout immediately after navigation.

### Card implementation
- [`src/App/Components/ProjectCard.tsx`](file:///home/hugol/Documents/Web_Scripts/hugolima.github.io/src/App/Components/ProjectCard.tsx) currently wraps the project title in a plain `Link` and renders the shared `Slideshow` plus `ProjectMeta`.
- There is no shared transition state, no card measurement logic, and no animation orchestration between routes.

### Detail implementation
- [`src/App/Components/ProjectDetail.tsx`](file:///home/hugol/Documents/Web_Scripts/hugolima.github.io/src/App/Components/ProjectDetail.tsx) currently renders:
  - title
  - slideshow
  - full description below the slideshow
  - `ProjectMeta`
  - showcase videos in a separate section below
- This layout does not match the desired “expanded card” desktop composition.

### Styling baseline
- [`src/index.css`](file:///home/hugol/Documents/Web_Scripts/hugolima.github.io/src/index.css) contains:
  - home grid layout via `.container`, `.item-group`, `.item`
  - detail layout via `.item-about`, `.project-showcase-section`
  - slideshow and lightbox styling
- The current layout is static; there are no motion classes, no fade/slide-out rules for sibling cards, and no transition overlay layer.

## Proposed Changes

### 1. Add a shared transition state layer

**Files**
- `src/App/App.tsx`
- `src/App/Components/ProjectTransitionOverlay.tsx` (new)
- `src/App/transition/projectTransitionStore.ts` (new) or equivalent colocated helper

**What**
- Introduce a top-level transition coordinator that can:
  - capture the clicked card slug and its DOM measurements
  - store the home-page scroll position and layout context
  - render a fixed overlay clone during navigation
  - coordinate forward and reverse transition phases

**Why**
- The current route split means the home card cannot visually expand into the detail page without a shared animation layer that survives route changes.

**How**
- Store a transition payload with:
  - `slug`
  - clicked card `DOMRect`
  - slideshow/title measurements needed to preserve visual size during expansion
  - current `window.scrollY`
  - transition direction: `forward` or `reverse`
- Render a top-level overlay component from `App.tsx` so it persists while the route changes.
- Use `useLocation` and navigation state to know when to animate from home to detail and when to animate back.
- Define fallback behavior:
  - direct visit to `/project/:slug` skips entry animation
  - return animation runs only when the destination home card exists and can be measured; otherwise fall back to normal navigation

### 2. Refactor home cards to participate in the transition

**Files**
- `src/App/Components/ProjectCard.tsx`
- possibly `src/App/Components/ProjectCardShell.tsx` (new only if extraction keeps code cleaner)

**What**
- Replace the plain title-only `Link` interaction with a card-level transition trigger.
- Give each card a stable selector/ref keyed by project slug.

**Why**
- The animation needs the full card box, not just the title link.

**How**
- Capture card bounds on click before navigation.
- Apply transient visual states to the grid:
  - selected card: blue border shine pulse
  - non-selected cards: downward fade/translate out
- Keep the slideshow and title block visually locked so they do not scale up during the card expansion.
- Navigate to `/project/:slug` after the forward animation reaches the handoff point.

### 3. Restructure the detail page to match the expanded card end state

**Files**
- `src/App/Components/ProjectDetail.tsx`
- `src/App/Components/ProjectMeta.tsx` if layout extraction is needed

**What**
- Recompose the detail page so the initial routed UI matches the expanded-card layout.

**Why**
- The user wants the transition to feel seamless, which requires the destination structure to visually continue the source animation.

**How**
- On desktop:
  - create a hero/detail container with two columns
  - left column: existing slideshow, kept at home-card visual size
  - right column: full description and `ProjectMeta`
  - below both: showcase section with videos inside the same overall expanded-detail composition
- On smaller screens:
  - stack slideshow, description/meta, and showcase vertically
- Keep the existing project-driven content model (`projects.ts`, `videos`, translation keys) unchanged.
- Update the back-to-home interaction so it triggers the reverse transition when a matching home card is available.

### 4. Add transition and layout CSS

**Files**
- `src/index.css`

**What**
- Add animation states, overlay styling, and responsive expanded-detail layout rules.

**Why**
- The current stylesheet has the structural pieces but none of the motion or “expanded card” presentation needed for the new flow.

**How**
- Add home-grid transition classes for:
  - selected card glow/shine
  - sibling fade + downward translation
  - interaction lock during active transition
- Add overlay styles for the animated expanding card clone.
- Add desktop two-column detail composition and mobile stacked fallback.
- Keep slideshow/title dimensions stable during expansion by constraining those subregions rather than scaling the entire content.
- Ensure sticky header/footer stacking does not cover the overlay.

### 5. Reverse transition behavior

**Files**
- `src/App/Components/ProjectDetail.tsx`
- `src/App/App.tsx`
- `src/App/Components/ProjectTransitionOverlay.tsx`

**What**
- Implement detail-to-home reverse animation.

**Why**
- The user explicitly wants a matching return transition.

**How**
- Intercept the “Back to Home” action.
- Navigate home with transition state instead of a plain link.
- After the home grid mounts, locate the corresponding card by slug and animate the overlay clone back into that card position.
- If the card cannot be resolved because of a direct load, layout shift, or missing element, degrade gracefully to a standard route change.

## Assumptions & Decisions

- Decision: animate first on the home page, then route to the detail page.
- Decision: the detail page should visually start in the same expanded composition that the home-card animation ends on.
- Decision: mobile/smaller screens should stack content rather than forcing the desktop side-by-side layout.
- Decision: returning from detail to home should use a reverse transition when possible.
- Assumption: preserving slideshow/title “same resolution” means keeping their rendered width/height visually stable during the expansion rather than scaling them proportionally with the container.
- Assumption: the existing route structure remains in place; this is a transition layer on top of the current router, not a move to modal routing.
- Assumption: direct deep links to detail pages should remain supported and should skip transition effects safely.

## Verification Steps

1. Home -> detail forward transition:
   - click any home card
   - verify selected border briefly shines blue
   - verify sibling cards fade downward
   - verify selected card expands without enlarging slideshow/title content
   - verify route changes only after the transition handoff

2. Detail continuity:
   - verify the detail page initially matches the expanded end state
   - verify desktop uses slideshow left + description/meta right + showcase below
   - verify mobile stacks the same sections vertically

3. Detail -> home reverse transition:
   - use the back-to-home control
   - verify the expanded detail collapses back toward the original home card position
   - verify the destination card remains aligned after the animation completes

4. Edge cases:
   - direct-load `/project/:slug` and confirm the page renders without transition errors
   - refresh on detail page and confirm no transition overlay is left behind
   - test a project with videos and one without videos
   - confirm current slideshow and lightbox behavior still works on both home and detail pages

5. Regression checks:
   - verify sticky header behavior still works while transitioning
   - verify `ProjectMeta` actions and tech icons remain intact
   - verify layout spacing in the home grid remains correct after adding transition gutters/states
