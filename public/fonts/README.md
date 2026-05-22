# Self-hosted fonts for Oscar Pozo Creativo

This project no longer loads fonts from Google Fonts or Fontshare at runtime.
Place the WOFF2 font files in these folders using the exact filenames below.

## Required files

```txt
public/fonts/syncopate/Syncopate-Regular.woff2
public/fonts/syncopate/Syncopate-Bold.woff2

public/fonts/satoshi/Satoshi-Light.woff2
public/fonts/satoshi/Satoshi-Regular.woff2
public/fonts/satoshi/Satoshi-Medium.woff2
public/fonts/satoshi/Satoshi-Bold.woff2

public/fonts/jetbrains-mono/JetBrainsMono-Regular.woff2
public/fonts/jetbrains-mono/JetBrainsMono-Bold.woff2
```

Only `Syncopate-Bold.woff2` is preloaded in `HeadSEO.astro` because it is the critical above-the-fold display font used by the H1/logo. The rest load through `@font-face` in `global.css` with `font-display: swap`.

Do not add remote provider links such as Google Fonts, Fontshare API, Adobe Fonts, or CSS `@import` URLs.
