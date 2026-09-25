# Add the product image gallery to AGM Media Center

## Page update

- Keep the existing `/about/agm-media-center` page, shared header, footer, title, and page metadata.
- Replace the placeholder content with a clearly separated “Product Image Gallery” section that follows the site’s existing spacing, typography, borders, colors, and light/dark themes.
- Add a compact search field at the top that filters the gallery by product model as the user types and shows a clear empty result when nothing matches.

## Product gallery

- Use the 29 products already defined by the catalog and the zip file uploaded (file name: SunXtender_HighRes_[Images.zip](http://Images.zip)), in the same established product order.
- Render one browsable block per product with its model number as the heading.
- Show that product’s existing Left, Middle, and Right high-resolution images side by side in a uniform three-column row.
- Give every image a consistent aspect ratio and presentation while retaining the complete battery view.
- Lazy-load all gallery images to keep initial page loading efficient.
- Add a small typed link below each image row to `/products/$sku` for that exact product.

## Image enlargement and accessibility

- Reuse the site’s existing image lightbox behavior so selecting a photo enlarges it without leaving the Media Center.
- Provide descriptive labels for each model and angle, keyboard-operable image controls, Escape-to-close behavior, and visible focus states.
- Preserve mobile usability by adapting each three-image row to the available width without changing any product or product-page content.

## Verification

- Confirm all 29 products appear when no search is active and each resolves exactly three images in Left, Middle, Right order.
- Test filtering, no-results behavior, product links, lightbox opening/closing, keyboard access, lazy-loading markup, mobile layout, and desktop layout.
- Confirm no other page is changed.