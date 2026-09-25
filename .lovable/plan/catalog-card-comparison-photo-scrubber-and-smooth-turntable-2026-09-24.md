# Catalog card comparison: photo scrubber and smooth turntable

Create two contained interactive trials on the All Products grid. Only the image areas of **PVX-340T** and **PVX-420T** will change; every other card and the list view remain untouched.

## PVX-340T — three-angle photo scrubber

- Replace the card’s static image with the exact uploaded Left, Middle, and Right photos already registered for this model.
- Let visitors drag or swipe horizontally across the image to move strictly through left → middle → right, with no vertical movement. Do not let the visitor go past the left and right view to expose the back of the battery, as there is no reference for the back image of a battery.
- Also respond subtly to horizontal pointer position on desktop so the interaction is discoverable.
- Snap cleanly to each real photograph, preserving labels and terminal details without artificial geometry.
- Keep the card link usable: dragging changes the image, while an ordinary click still opens the product page.

## PVX-420T — smooth interpolated turntable

- Use the uploaded Left, Middle, and Right photos as the three fixed anchor views.
- Produce a lightweight 18-frame left-to-right sequence using controlled image alignment, warping, and blending between those anchors. 
- Play the frames as a slow, subtle left↔right loop while the card is idle. Do not go past the left and right view to expose the back of the battery, as there is no reference for the back image of a battery.
- Pause the automatic movement while a visitor drags or swipes, then resume after interaction.
- Keep the movement horizontal only and preserve the card’s existing link behavior.
- This is a visual turntable test rather than a true reconstructed 3D model; the three original views remain the exact anchor frames.

## Shared behavior and accessibility

- Preserve the existing image box size, product information, NEW/footnote markers, specifications, filters, toggles, and card styling.
- Add a small unobtrusive drag affordance within only these two image areas.
- Support mouse, touch, and keyboard left/right controls, with clear accessible labels.
- Honor reduced-motion preferences: disable PVX-420T auto-loop and show a stable anchor frame until the visitor interacts.
- Load only the needed imagery and generated frames, avoiding work for hidden cards and the list view.

## Verification

- Confirm only PVX-340T and PVX-420T differ from the existing grid.
- Test dragging, swiping, keyboard control, ordinary card navigation, filters, and switching between grid/list views.
- Check desktop and mobile layouts, light/dark themes, reduced motion, image sharpness, and browser errors.