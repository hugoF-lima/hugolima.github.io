# Distinct Background And Reactive Border Plan

## Summary

Introduce a more distinct visual identity inspired by the reference page at `https://www.radnaabazar.com/en/contact`, while adapting it to the current portfolio’s dark theme rather than cloning it directly.

Chosen direction:
- Apply the atmospheric background treatment site-wide.
- Borrow the reference page’s dark-space gradient language and mouse-proximity border response.
- Keep the current content structure and dark palette, but make the shell and card surfaces feel more layered, luminous, and intentional.

## Current State Analysis

### Existing shell/background
- [`src/index.css`](file:///home/hugol/Documents/Web_Scripts/hugolima.github.io/src/index.css) currently uses a simple dark `body` background (`#1a1a1a`) and a lightly filtered `.app-shell`.
- The shell has no layered background system yet: no radial glows, no atmospheric blur layers, and no dedicated decorative pseudo-elements.
- [`src/App/App.tsx`](file:///home/hugol/Documents/Web_Scripts/hugolima.github.io/src/App/App.tsx) wraps the routed site inside `.app-shell`, which is the best place to anchor a site-wide atmosphere layer without disrupting routing.

### Existing bordered surfaces
- Major bordered containers already exist and are consistently styled in CSS:
  - `.item` for home project cards
  - `.project-detail-shell` for project details
  - `.item-about` for the About page
  - `.project-showcase-section` for showcase/video sections
- These surfaces currently use static solid borders with no pointer-reactive lighting.

### Existing card interaction model
- [`src/App/Components/ProjectCard.tsx`](file:///home/hugol/Documents/Web_Scripts/hugolima.github.io/src/App/Components/ProjectCard.tsx) already has click-driven transition behavior.
- Any hover/mouse-light effect added to project cards should avoid conflicting with the existing route transition classes (`project-card-leaving-active`, `project-card-hidden-for-overlay`, etc.).

### Reference page findings
- The reference page uses a very dark base (`rgb(15, 14, 26)`).
- It layers multiple low-opacity radial gradients near the page edges, especially cool blue/cyan-tinted glows.
- It uses interactive border glow wrappers with a radial gradient centered at the pointer position, rather than only static hover shadows.
- The effect is not a heavy blur fog everywhere; it is mostly:
  - dark base
  - subtle edge gradients
  - selective luminous accents
  - pointer-reactive border lighting on panels/inputs

## Proposed Changes

### 1. Build a site-wide atmospheric background layer

**Files**
- `src/index.css`
- `src/App/App.tsx`

**What**
- Replace the current plain shell treatment with a layered atmospheric background system applied across the whole site.

**Why**
- The current site reads as flat dark gray. The reference succeeds because the background has depth, edge light, and a restrained sense of motion/space.

**How**
- Keep the dark theme, but shift the base toward a deeper blue-black rather than flat charcoal.
- Add one dedicated shell background layer anchored to `.app-shell`, using pseudo-elements and/or a dedicated background wrapper.
- Use multiple subtle radial gradients with cool blue/cyan tones placed near the left/right upper edges, inspired by the reference’s edge glows.
- Preserve readability by keeping the main content surfaces darker and more opaque than the atmosphere layer.
- Retain the current layout and routing; this is a visual-layer change only.

### 2. Adapt the reference background recipe to the current theme

**Files**
- `src/index.css`

**What**
- Introduce a background recipe based on the reference page’s structure, but tuned for the current portfolio.

**Why**
- The user wants the reference effect replicated in spirit, but adapted to the existing dark portfolio rather than copied directly.

**How**
- Use a dark base closer to the reference family, but tuned to fit the existing site content and white typography.
- Add:
  - large soft radial gradient glows at the outer edges
  - a dim center-safe zone behind content
  - a restrained mask/opacity balance so the background remains atmospheric rather than noisy
- Keep the final treatment understated enough that project screenshots and text remain the focus.

### 3. Create a reusable mouse-proximity border shine system

**Files**
- `src/App/Components/ProjectCard.tsx`
- `src/App/Components/ProjectDetail.tsx`
- `src/App/Components/AboutPage.tsx` (if it renders the bordered About surface directly)
- `src/index.css`

**What**
- Add a pointer-reactive border glow that brightens closer to the mouse position, similar to the reference page’s panel wrappers.

**Why**
- This is one of the most distinctive interactive traits on the reference page, and it will make the bordered surfaces feel more premium and alive.

**How**
- Use CSS custom properties such as `--pointer-x` and `--pointer-y` to position a radial-gradient highlight on the active surface.
- Update those variables from pointer movement on the relevant bordered elements.
- Use pseudo-elements for the glow layer so the base border remains intact and the effect can fade in/out cleanly.
- Keep the effect lightweight and non-blocking, with no interference in clicks, slideshow controls, or transitions.

### 4. Scope the pointer-reactive glow to the main bordered surfaces

**Files**
- `src/index.css`
- Relevant components that render those surfaces

**What**
- Apply the reactive border treatment to the main content surfaces, not just one isolated card type.

**Why**
- The selected direction is “site-wide shell” for atmosphere, and the site already has a strong family of bordered content boxes that should feel visually cohesive.

**How**
- Target at least these surfaces:
  - `.item`
  - `.project-detail-shell`
  - `.project-showcase-section`
  - `.item-about`
- Keep the effect strongest on the primary project cards and slightly more restrained on larger supporting panels if needed.

### 5. Preserve compatibility with the current transition system

**Files**
- `src/App/Components/ProjectCard.tsx`
- `src/index.css`

**What**
- Ensure the new hover glow does not fight the existing home-to-detail transition states.

**Why**
- The project cards already have a custom route-transition system with temporary border glow, fading siblings, and hidden overlay states.

**How**
- Layer the mouse-reactive border under or alongside the transition states without replacing them.
- Make sure transition classes still win when the card is actively leaving/returning.
- Disable or visually suppress the reactive hover glow during active route-transition phases when necessary.

### 6. Keep implementation minimal and CSS-forward

**Files**
- `src/index.css`
- Minimal component touch points only where pointer coordinates must be set

**What**
- Favor CSS and small event handlers over a larger animation library.

**Why**
- The current project already uses handcrafted CSS transitions successfully, and the requested effects do not require a heavy dependency.

**How**
- Implement the atmosphere mostly in CSS.
- Add only the minimum React event wiring needed to feed pointer position into CSS variables for the glow effect.
- Avoid new packages unless exploration during execution reveals a hard limitation.

## Assumptions & Decisions

- Decision: the aesthetic effects should apply site-wide at the shell/background level.
- Decision: the reference should be adapted to the existing theme, not duplicated literally.
- Decision: the pointer-reactive border shine should be implemented as a reusable effect for the main bordered surfaces.
- Assumption: the user’s “card boxes” includes the existing project cards first, and should extend to the other major bordered panels for cohesion.
- Assumption: the current home/detail transition system must remain intact and should coexist with the new hover treatment.
- Assumption: the best technical approach is layered CSS plus pointer-position CSS variables, not a canvas/WebGL/background-video solution.

## Verification Steps

1. **Background atmosphere**
   - Verify the site background now has layered depth across the full shell.
   - Confirm the gradients feel visible but do not reduce text or image readability.
   - Check home, detail, and about routes for consistency.

2. **Reactive border glow**
   - Hover near different parts of a project card and confirm the border glow follows mouse proximity.
   - Verify the same treatment appears on the intended major bordered surfaces.
   - Confirm the glow fades out cleanly on pointer leave.

3. **Transition compatibility**
   - Trigger the home-to-detail transition and confirm the existing transition styling still works.
   - Ensure the reactive hover effect does not cause visual noise or conflict during the card expansion handoff.

4. **Responsiveness**
   - Check desktop and mobile-width layouts.
   - Ensure the atmosphere layer does not create overflow artifacts or clipped glows.
   - Ensure the hover-specific effect degrades gracefully on touch devices.

5. **Regression checks**
   - Verify `npm run build` succeeds.
   - Verify project cards, detail pages, and existing lightbox/slideshow interactions still work normally.
