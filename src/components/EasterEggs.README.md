Easter Eggs Implementation
==========================

Files:
- `src/components/EasterEggs.tsx` — central client-side controller for all easter eggs. Handles Konami code, keyboard shortcuts, and toggles.
- `src/components/CommandPalette.tsx` — accessible command palette to trigger easter egg commands (e.g. `matrix on`, `particles off`, `chess on`, `about`). Open with `?` or `Ctrl+K` or via Konami code.
- `src/components/MatrixCanvas.tsx` — lightweight canvas Matrix effect, lazy-loaded.
- `src/components/ParticlesCanvas.tsx` — lightweight particle canvas, lazy-loaded with capped particle count.
- `src/components/ChessAnimation.tsx` — graceful chessboard decorative animation container.
- `src/app/secret-about/page.tsx` — hidden "About the developer" page. Not linked from navigation.

Guidelines:
- All visual effects are lazy-loaded and rendered only when toggled to avoid extra bundle and CPU cost.
- Command palette is keyboard-accessible and closes on `Escape`.
- Effects are non-interactive (`pointer-events: none`) so they never block UI or inputs.
- Styles are kept minimal and match the site's aesthetic.

To add a new easter egg, update `EasterEggs.tsx` to include a new toggle, and create a lazy component under `src/components`.
