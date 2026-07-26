# Circling Hover Glow Plan

## Summary
- Add an animated multi-trace border glow that travels around the perimeter of project cards and detail panels only while hovered.
- Keep the existing gray/white surface palette and preserve the current route transition behavior.
- Replace the current static hover accents in `.surface-border-flow` with a true perimeter animation that reads as a circling glow, not a full simultaneous flash.

## Current State Analysis
- Home project cards use the `surface-border-flow` class in `src/App/Components/ProjectCard.tsx`.
- Detail surfaces also use `surface-border-flow` in `src/App/Components/ProjectDetail.tsx` on:
  - `.project-detail-shell`
  - `.project-showcase-section.project-detail-showcase`
- The active border effect lives in `src/index.css`:
  - `.surface-border-flow::before` is a faint idle border glow.
  - `.surface-border-flow::after` is currently a static set of corner/edge accents that only fade in on hover.
  - There is no active orbit/perimeter motion on hover anymore.
- Transition-state suppression already exists in `src/index.css` for:
  - `.project-card-leaving-active`
  - `.project-detail-shell-transitioning-in`
  - `.project-detail-shell-transitioning-out`
  - `.project-card-hidden-for-overlay`
- Those suppression rules must remain, otherwise the hover glow can clash with the shared-element transition overlay.

## Proposed Changes

### 1. Keep component wiring as-is
**Files:**
- `src/App/Components/ProjectCard.tsx`
- `src/App/Components/ProjectDetail.tsx`

- Do not change class wiring or add JS listeners.
- Continue using `surface-border-flow` as the shared hook point for both home cards and detail panels.

**Why**
- The class is already correctly attached to the exact surfaces the user wants.
- The problem is purely the CSS behavior, not DOM structure or event wiring.

**How**
- Leave current class assignment intact and implement the full solution in CSS.

### 2. Replace the static hover accents with a multi-trace perimeter orbit
**File:** `src/index.css`

- Rework `.surface-border-flow::after` into the animated hover layer.
- The hover layer should show multiple smaller traces moving around the border perimeter rather than a single solid band or a full-border flash.

**Why**
- The user wants a “circling glow” and explicitly chose a multi-trace orbit.
- The current static accents do not move and therefore do not communicate a circling effect.

**How**
- Use a masked border pseudo-element so the motion stays constrained to the perimeter.
- Use a conic-gradient or equivalent perimeter-safe gradient with several separated bright segments.
- Keep the number of traces small enough to feel elegant rather than noisy.
- Animate the layer by rotating the pseudo-element or shifting the perimeter highlight around the border.
- Only enable the orbit on `:hover`.

### 3. Keep a soft idle border and stronger hover orbit
**File:** `src/index.css`

- Preserve a low-opacity base glow on `.surface-border-flow::before`.
- On hover:
  - increase the base glow slightly
  - reveal the multi-trace orbit layer
  - add a controlled glow/shadow so the motion feels luminous without flooding the whole card edge at once

**Why**
- The user wants the border to glow on hover, but not all at once.
- Keeping a subtle base layer makes the hover motion feel additive and smooth instead of abrupt.

**How**
- Use `::before` as the steady ambient border ring.
- Use `::after` as the animated moving traces.
- Keep hover opacity and blur restrained so the border still reads cleanly against the gray surfaces.

### 4. Apply the same hover animation to detail panels
**Files:**
- `src/App/Components/ProjectDetail.tsx`
- `src/index.css`

- Because detail panels already share the `surface-border-flow` class, make sure the new hover animation scales correctly for:
  - `.project-detail-shell`
  - `.project-showcase-section.project-detail-showcase`

**Why**
- The chosen scope includes both home cards and detail panels.

**How**
- Use a CSS approach that adapts naturally to different panel sizes without needing separate markup.
- Verify that the animation still looks coherent on the larger detail surfaces.

### 5. Preserve transition behavior by keeping suppression rules
**File:** `src/index.css`

- Keep the current “hide pseudo-elements during transition” rules and extend them only if needed for the new orbit layer.

**Why**
- Hover animation must not interfere with:
  - forward transition entry
  - reverse transition return
  - overlay handoff states

**How**
- Continue forcing `::before` and `::after` opacity to `0` for transition classes.
- Ensure the new orbit animation does not remain visible when the card is transitioning out or hidden for overlay.

## Assumptions & Decisions
- Hover glow style: **multi-trace orbit**
- Scope: **home cards + detail panels**
- The hover orbit should not be always-on; it activates only while the surface is hovered.
- The gray/white palette already in place remains the color basis for the border effect; this plan only changes behavior, not the site color direction.
- No JavaScript changes are needed unless CSS alone proves insufficient, which is not expected given the current class structure.

## Verification Steps
1. Run `npm run build` and confirm the app compiles cleanly.
2. On the home page, hover a project card and verify:
   - the border glow animates around the perimeter
   - multiple traces are visible
   - the whole border does not light up uniformly at the same moment
3. Open a project detail page and hover:
   - the detail shell
   - the showcase section
   Confirm the same circling glow behavior appears and scales cleanly.
4. Confirm the non-hover state remains subtle and not visually busy.
5. Re-test transition behavior:
   - home -> detail
   - detail -> home
   - open the same card again
   Confirm the hover orbit disappears during transition states and does not conflict with the overlay animation.
