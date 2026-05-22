# Refactor Astro Layout

Estructura creada siguiendo el plano de desacoplamiento:

- `src/styles/variables.css`
- `src/styles/global.css`
- `src/components/Core/HeadSEO.astro`
- `src/components/WebGL/ParticlesBackground.astro`
- `src/components/WebGL/LiquidCursor.astro`
- `src/components/UI/Preloader.astro`
- `src/components/UI/Lightbox.astro`
- `src/components/UI/Navigation.astro`
- `src/components/UI/Footer.astro`
- `src/components/System/SmoothScroll.astro`
- `src/components/System/AudioEngine.astro`
- `src/layouts/Layout.astro`

Nota técnica: el runtime JavaScript original se conserva completo en `SmoothScroll.astro` para no romper dependencias cruzadas entre Lenis, GSAP, WebGL, Lightbox, preloaders y SFX. El Layout original no incluía markup real de Navigation/Footer; por eso esos componentes son placeholders seguros.
