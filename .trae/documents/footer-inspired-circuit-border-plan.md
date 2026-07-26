# Footer-Inspired Circuit Border Plan

## Summary
- Replace the current `surface-border-flow` hover effect with a footer-inspired circuit animation that more closely matches the patterned trace language seen in the footer of `https://www.radnaabazar.com/en/contact`.
- Apply that circuit-like border treatment to both home project cards and detail panels, but only reveal or strongly activate it on hover.
- Preserve the existing gray/white palette and keep route-transition suppression intact so the effect does not interfere with the card-to-detail animation.

## Current State Analysis
- Home cards use `surface-border-flow` on the root card container in `src/App/Components/ProjectCard.tsx`.
- Detail surfaces also use `surface-border-flow` in `src/App/Components/ProjectDetail.tsx` on:
  - `.project-detail-shell`
  - `.project-showcase-section.project-detail-showcase`
- Current `surface-border-flow` CSS in `src/index.css` uses:
  - `::before` for a faint steady border ring
  - `::after` for a rotating conic-gradient multi-trace orbit
- This current approach animates the entire border ring and does not resemble the reference footer’s patterned circuit/grid language.
- Inspection of the reference footer showed the visual is not driven by footer pseudo-elements; it comes from a dedicated decorative layer (`footer-grid.svg`) placed inside the footer. That means matching it requires a more structured trace pattern on the border itself rather than another generic spinning highlight.
- Transition suppression rules already exist in `src/index.css` for:
  - `.project-card-leaving-active`
  - `.project-detail-shell-transitioning-in`
  - `.project-detail-shell-transitioning-out`
  - `.project-card-hidden-for-overlay`
- User decisions locked:
  - scope: **cards + detail panels**
  - trigger: **hover only**

## Proposed Changes

### 1. Keep current class wiring and shared target surfaces
**Files:**
- `src/App/Components/ProjectCard.tsx`
- `src/App/Components/ProjectDetail.tsx`

- Do not change component wiring.
- Continue using `surface-border-flow` as the single styling hook for:
  - home project cards
  - detail shell
  - detail showcase panel

**Why**
- The class is already attached to the exact surfaces the user wants.
- The mismatch is purely about visual behavior, not markup or event wiring.

**How**
- Leave JSX unchanged and implement the new look entirely in CSS.

### 2. Rebuild the hover effect to mimic the reference footer’s circuit language
**File:** `src/index.css`

- Replace the current rotating conic-gradient orbit in `.surface-border-flow::after`.
- Create a border-only decorative trace layer that feels like a circuit/grid pattern mapped onto the card perimeter.

**Why**
- The user explicitly wants the circuit-like animation to resemble the footer effect from the reference site.
- The current orbit reads as a rotating glow, not as a border carrying structured circuit traces.

**How**
- Use a masked pseudo-element constrained to the border perimeter.
- Compose the hover layer from multiple small linear/conic segments so the pattern reads like routed traces or illuminated circuit runs rather than isolated glow slices.
- Prefer a structured segmented pattern that can travel along the border while remaining recognizably “circuit-like.”
- Avoid broad full-ring illumination and avoid mouse-position-based spotlight behavior.

### 3. Separate the steady border from the animated circuit pass
**File:** `src/index.css`

- Keep `::before` as the base white/gray border line and subtle ambient glow.
- Use `::after` exclusively for the animated circuit pattern that appears on hover.

**Why**
- The user specifically referenced the existing white line on the card border; the circuit animation should enhance that border rather than replace the border structure entirely.
- Splitting duties between the two pseudo-elements keeps the visual cleaner and easier to tune.

**How**
- `::before`:
  - stays visible at rest
  - remains low-contrast and stable
- `::after`:
  - starts hidden or near-hidden
  - animates only on hover
  - carries multiple patterned traces with controlled glow

### 4. Make the animation patterned and perimeter-led, not area-led
**File:** `src/index.css`

- Ensure the hover animation reads as a border-trace pass around the container perimeter.
- Do not tie the effect to pointer coordinates or a localized mouse spotlight.

**Why**
- The user explicitly said the effect should not be limited to mouse-area glow.
- The reference footer effect is decorative and structured, not cursor-following.

**How**
- Use a CSS animation that advances patterned traces along the perimeter.
- Tune speed and trace count so the movement is readable but not noisy.
- Keep the pattern elegant: enough motion to feel alive, but not so many segments that the border becomes visually chaotic.

### 5. Apply the same behavior to detail panels with scale-aware styling
**Files:**
- `src/App/Components/ProjectDetail.tsx`
- `src/index.css`

- Because detail panels already share the class, ensure the new circuit pattern scales cleanly on larger surfaces.

**Why**
- The chosen scope includes both cards and detail panels.

**How**
- Use CSS that naturally scales with element size.
- If needed, add targeted selectors for larger panels only to slightly soften density or glow strength so the effect doesn’t look too sparse or too busy on the detail shell/showcase section.

### 6. Preserve transition suppression and keep overlay states visually clean
**File:** `src/index.css`

- Keep existing suppression rules that zero out `::before` and `::after` during transition phases.

**Why**
- The circuit border must not compete with the shared-element transition or leave traces visible while the overlay is active.

**How**
- Preserve the current suppression selectors.
- Extend them only if the reworked effect introduces any additional state-specific artifact.

## Assumptions & Decisions
- The current home card container border is the primary visual target; detail panels inherit the same treatment because the user explicitly chose cards plus detail panels.
- The circuit animation should be **hover-only**, not always on.
- The base white/gray border line should remain present at rest; the circuit effect enhances it rather than fully replacing it.
- The intended reference is the footer’s decorative trace/grid language, not a cursor spotlight or a generic rotating ring.
- No JS changes are expected; CSS pseudo-elements remain the implementation path.

## Verification Steps
1. Run `npm run build` and confirm the app compiles cleanly.
2. On the home page, hover a project card and confirm:
   - the visible border remains the container border itself
   - the circuit animation resembles structured traces rather than rotating glow slices
   - the animation is not localized to the mouse position
3. Confirm the non-hover card state still shows a clean, stable white/gray border line without excessive motion.
4. Open a project detail page and hover:
   - the detail shell
   - the showcase section
   Confirm the same circuit border language appears and scales cleanly.
5. Re-test transition flow:
   - home -> detail
   - detail -> home
   - open the same card again
   Confirm the circuit border disappears during transition states and does not conflict with the overlay animation.
