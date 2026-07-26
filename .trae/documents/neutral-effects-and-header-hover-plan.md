# Neutral Effects And Header Hover Plan

## Summary
- Keep the current atmospheric/background treatment, but replace the existing blue-tinted effect colors with a darker neutral palette built from charcoal, gray, and white undertones.
- Add a subtle hover-reactive gradient treatment to the sticky header that feels blurred and ambient rather than like a tight spotlight.
- Replace the pointer-following card/detail border glow with a full-border animated line treatment that has a faint idle state and becomes more present on hover.

## Current State Analysis
- `src/index.css` currently drives all atmosphere and surface effects:
  - `body` and `.app-shell` use blue-tinted background gradients (`src/index.css:12-29`).
  - `.app-atmosphere-glow-*` and `.app-atmosphere-grid` use blue/cyan stops (`src/index.css:44-92`).
  - `.site-header` has a static dark gradient and no pointer-reactive visual layer (`src/index.css:94-116`).
  - `.reactive-surface::before` renders a pointer-positioned radial border glow (`src/index.css:483-510`).
  - transition emphasis for selected cards also uses blue accents in `.project-card-leaving-active` and `.project-card-leaving-active::after` (`src/index.css:455-469`).
- `src/App/Components/Header.tsx` currently has no pointer handlers and renders a plain `<header className={\`site-header ${headerState}\`}>` (`src/App/Components/Header.tsx:95-97`).
- `src/App/hooks/useReactiveSurface.ts` currently exists only to update CSS custom properties from pointer position.
- The current pointer-reactive class is attached in:
  - `src/App/Components/ProjectCard.tsx`
  - `src/App/Components/ProjectDetail.tsx`
  - `src/App/Components/AboutPage.tsx`
- User decisions now locked:
  - continuous line glow scope: **cards + detail panels**
  - glow behavior: **soft idle + stronger hover**

## Proposed Changes

### 1. Update header interaction wiring
**File:** `src/App/Components/Header.tsx`

- Add pointer handlers to the root header element so CSS variables can drive a subtle ambient gradient drift on hover.
- Keep the current scroll-state behavior (`default`, `mid`, `compact`) unchanged.
- Add a dedicated class for the new effect layer, e.g. `header-reactive`, without changing the header structure or content layout.

**Why**
- The current header has no interactive visual response, so the requested hover treatment needs a place to receive pointer position updates.

**How**
- Reuse the existing pointer-variable hook instead of adding layout state in the component.
- Keep the effect attached to the header container only, so links/buttons inside continue working normally.

### 2. Narrow the pointer hook to header usage
**File:** `src/App/hooks/useReactiveSurface.ts`

- Keep this hook as the shared pointer-to-CSS-variable helper, but use it only for the header after the card/detail border effect becomes CSS-only.
- No behavior change is needed beyond making sure it remains generic and touch-safe.

**Why**
- The new card/detail effect no longer needs pointer coordinates, but the header hover effect still does.

**How**
- Preserve the current `--pointer-x`, `--pointer-y`, and `--pointer-active` updates for header CSS layers.
- Remove its usage from card/detail/about surfaces during implementation.

### 3. Replace project-card border behavior with a perimeter animation
**File:** `src/App/Components/ProjectCard.tsx`

- Remove the pointer hook import and handler spread from each card.
- Replace the current `reactive-surface` class on cards with a new CSS-only class dedicated to the animated perimeter treatment, e.g. `surface-border-flow`.

**Why**
- The user wants the border to glow as a whole line instead of following pointer coordinates.

**How**
- Keep all existing transition-state classes intact.
- Ensure the new class coexists with route-transition classes so forward/reverse animations still control visibility correctly.

### 4. Apply the same perimeter treatment to detail surfaces only
**File:** `src/App/Components/ProjectDetail.tsx`

- Remove pointer hook usage from the detail shell and showcase section.
- Apply the same CSS-only border animation class to:
  - `.project-detail-shell`
  - `.project-showcase-section.project-detail-showcase`

**Why**
- The chosen scope includes cards and detail panels, but not About-page panels.

**How**
- Leave the reverse/forward transition logic untouched.
- Use the same visual class as cards so the detail view feels like a direct continuation of the home surfaces.

### 5. Remove the reactive effect from About-page panels
**File:** `src/App/Components/AboutPage.tsx`

- Remove the pointer hook import and the `reactive-surface` class/handlers from About-page panels.

**Why**
- The chosen scope explicitly excludes those panels, and leaving the current class in place would either animate them too or force unnecessary CSS exceptions.

**How**
- Keep About-page panels visually consistent through their existing static panel styling in `src/index.css`.

### 6. Rework effect styling with a neutral palette
**File:** `src/index.css`

- Update the atmosphere palette from blue/cyan to dark neutral tones with white undertones:
  - `body`
  - `.app-shell`
  - `.app-atmosphere-glow-left`
  - `.app-atmosphere-glow-right`
  - `.app-atmosphere-glow-center`
  - `.app-atmosphere-grid`
  - `.site-header`
  - `.item`
  - `.project-detail-shell`
  - `.project-showcase-section`
  - transition-highlight rules such as `.project-card-leaving-active` and `.project-card-leaving-active::after`

**Why**
- The user wants to preserve the same effect family, only recolored from blue into charcoal/gray/white.

**How**
- Keep the current atmospheric structure and blur strengths, but swap color stops to neutral dark grays and desaturated whites.
- Keep contrast readable against the existing dark site.
- Leave non-effect accent colors alone unless a directly related effect rule currently uses blue.

### 7. Add a subtle header hover gradient layer
**File:** `src/index.css`

- Add one or two pseudo-element layers to `.site-header`, driven by CSS variables from the pointer hook.
- The hover response should be broad, blurred, and low-opacity, avoiding a concentrated spotlight look.

**Why**
- The header needs a softer, more premium response than the cards.

**How**
- Use a very large radial or elliptical gradient with soft edges and a dark-gray/white blend.
- Keep opacity modest at idle and slightly increase it on hover.
- Respect existing sticky behavior and keep the layer behind header content with proper stacking.

### 8. Introduce a CSS-only animated full-border line
**File:** `src/index.css`

- Replace `.reactive-surface::before` as the card/detail border system with a new perimeter animation class, e.g. `.surface-border-flow`.
- Implement a faint idle animation plus stronger hover emphasis.

**Why**
- The requested effect is no longer pointer-localized; it should read as a continuous perimeter line around larger surfaces.

**How**
- Use a masked pseudo-element border with an animated gradient path around the perimeter.
- Prefer a conic-gradient-based or equivalent perimeter-safe approach that works with rounded corners.
- Keep the idle animation subtle:
  - lower opacity
  - slower movement
- On hover, increase:
  - opacity
  - highlight clarity
  - optionally animation speed slightly
- Add suppression rules so the perimeter effect yields to transition states:
  - `.project-card-leaving-active`
  - `.project-card-hidden-for-overlay`
- Preserve `position`, `isolation`, and content stacking so media/buttons remain clickable.

## Assumptions & Decisions
- The current atmospheric composition stays structurally the same; this is a palette and interaction refinement, not a redesign.
- The continuous border animation applies to:
  - home page project cards
  - project detail shell
  - project detail showcase section
- About-page panels remain static and do not get the new animated perimeter.
- The header effect is hover-reactive and pointer-informed, but visually broad enough that it reads as an ambient gradient shift rather than a spotlight.
- The continuous border effect should exist faintly at idle and strengthen on hover, rather than running at full intensity all the time.
- Existing route transition behavior, overlay timing, and card click behavior are in scope for regression checking but not for redesign.

## Verification Steps
1. Run `npm run build` and confirm the app still compiles cleanly.
2. In the browser, verify the home page atmosphere no longer reads blue and instead uses charcoal/gray/white tones.
3. Hover the header and confirm:
   - the gradient change is visible
   - it feels soft and blurred
   - it does not resemble a tight cursor spotlight
   - sticky header states (`default`, `mid`, `compact`) still behave normally
4. On the home page, verify project cards show:
   - a faint continuous perimeter line at idle
   - a stronger version on hover
   - no pointer-chasing localized glow
5. Open a project detail page and confirm the same perimeter behavior appears on:
   - the detail shell
   - the showcase section
6. Confirm About-page panels remain static and do not inherit the animated perimeter.
7. Re-test the project-card transition flow:
   - click into a project
   - return home
   - open the same card again
   - verify no visual conflict between the new border animation and the transition overlay/highlight states
