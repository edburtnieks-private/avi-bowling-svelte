# Project documentation, Structure, Guidelines

## Assets

[public/assets](../../public/assets) directory contains all optimized images and icons

### Structure

All icons are placed inside [public/assets/icons](../../public/assets/icons) directory and usually will be with `.svg` extension

All images are placed inside [public/assets/images](../../public/assets/images) directory with possibly different extensions (`.png`, `.jpg`, `.svg` etc.)

### Naming

Asset file name should be in `kebab-case` (e.g. `bowling-ball-icon.svg`)

Icon files should end with word **icon**

### Adding new asset

Make sure new asset is optimized using [TinyPNG](https://tinypng.com/), [TinyJPG](https://tinyjpg.com/), [SVGOMG](https://jakearchibald.github.io/svgomg/) etc.

## Icons created with CSS

If you can create icon using only CSS, without additional image files, place it inside [src/components/Icons](../../src/components/Icons) directory following [component structure and guidelines](../Components)

### Naming

Icon directory name should be in `PascalCase` (e.g. `CaretIcon`) and should end with word **Icon**

---

[Components](../Components)

[Pages](../Pages)

[Styling](../Styling)
