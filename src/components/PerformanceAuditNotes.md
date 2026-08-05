# Performance Audit Notes

## Summary
This project is optimized for Lighthouse and modern web performance while preserving the existing visual design.

## Optimizations Applied

### Fonts
- Switched `next/font/google` to `display: "swap"` for faster font rendering and reduced FOIT.
- Removed unused `Geist_Mono` import and font variable to reduce font CSS generation.
- Fallbacks now include system fonts for faster first paint.

### JavaScript & Hydration
- Added `PerformanceMonitor` client component to collect paint, LCP, and layout-shift entries without external tracking.
- Code-split below-the-fold sections (`Journey`, `GithubRepos`, `ContactSection`, `Skills`) using `next/dynamic` with SSR to reduce initial bundle size.
- Kept above-the-fold sections server-rendered for fast first content paint.
- Throttled all scroll-based effects using `requestAnimationFrame` in `Navbar` and `Journey`.
- Limited GitHub repo list to 6 items on the client for reduced rendering cost.

### CSS & Animations
- Ensured `body` uses efficient font fallbacks.
- Kept ambient orb animation in CSS but retained a low-motion-friendly ease curve.
- Continued using `transition` utilities on interactive elements, but prioritized transform and opacity only.

### Images
- All project screenshots and illustrations are SVGs, which are already optimized for size.
- `ProjectCard` uses `next/image` with `sizes` and no priority loading for below-fold images.
- Retained local `public/og-image.png` and generated PNG app icons for correct browser support.

### Performance Monitoring
- Added a lightweight `PerformanceMonitor` component that observes paint, LCP, and CLS entries via `PerformanceObserver`.
- This component is client-only and does not send data externally by default.

## Recommended Further Improvements
- Add a real performance analytics endpoint or service if you want long-term metrics collection.
- Replace any remaining large SVG or bitmap assets with optimized modern formats if needed.
- Use `prefetch` sparingly for external links only where beneficial.
- Consider reducing logo and UI shadows if Lighthouse flags render complexity.
- Add a `robots.txt` and `sitemap.xml` review for SEO and crawler guidance.

## Notes
- No design changes were made.
- Accessibility remains intact by keeping semantic markup, labels, and keyboard-friendly navigation.
- `next build` should now produce a smaller client bundle and preserve good Lighthouse metrics.
