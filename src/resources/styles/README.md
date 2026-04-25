# Style Presets

This folder stores reusable visual themes for the portfolio.

## Switch the entire site style in 1 line

Edit this line in `src/resources/styles/presets.ts`:

```ts
export const ACTIVE_THEME_PRESET: ThemePresetId = "tech-blueprint";
```

Change it to another preset id, for example:

```ts
export const ACTIVE_THEME_PRESET: ThemePresetId = "minimal";
```

Available preset ids:

- `tech-blueprint` //1
- `mono-pro`
- `warm-craft`
- `neon-dark-lab` //2
- `brutalist-soft`
- `minimal` //4
- `neo-cyan` //3

## Structure

- `presets.ts`: Once UI tokens and visual effects per preset
- `themes/*.css`: Class-level CSS customizations per preset
- `themes/shared.css`: CSS utilities shared by all presets
- `index.css`: Imports all theme CSS files

## Add a new preset

1. Add a new preset object in `presets.ts`.
2. Add its CSS file in `themes/` and import it in `index.css`.
3. Prefix selectors with `[data-style-preset="your-preset-id"]`.
