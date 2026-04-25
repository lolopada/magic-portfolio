import { DataStyleConfig, EffectsConfig, FontsConfig, StyleConfig } from "@/types";
import {
  Anton,
  Geist,
  Geist_Mono,
  IBM_Plex_Mono,
  Inter,
  Inter_Tight,
  JetBrains_Mono,
  Lora,
  Manrope,
  Nunito,
  Oswald,
  Playfair_Display,
  Space_Grotesk,
} from "next/font/google";

export type ThemePresetId =
  | "neo-cyan"
  | "minimal"
  | "tech-blueprint"
  | "mono-pro"
  | "warm-craft"
  | "neon-dark-lab"
  | "brutalist-soft";

type ThemePreset = {
  id: ThemePresetId;
  label: string;
  fonts: FontsConfig;
  style: StyleConfig;
  dataStyle: DataStyleConfig;
  effects: EffectsConfig;
  ui: {
    mouseHalo: boolean;
    flatHeader: boolean;
    timelineGlow: boolean;
    flatCards: boolean;
  };
};

const codeFont = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

const neoCyanHeadingFont = Geist({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const neoCyanBodyFont = Geist({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const neoCyanLabelFont = Geist({
  variable: "--font-label",
  subsets: ["latin"],
  display: "swap",
});

const minimalHeadingFont = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const minimalBodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const minimalLabelFont = Manrope({
  variable: "--font-label",
  subsets: ["latin"],
  display: "swap",
});

const techBlueprintHeadingFont = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

const techBlueprintBodyFont = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const techBlueprintLabelFont = Space_Grotesk({
  variable: "--font-label",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

const techBlueprintCodeFont = JetBrains_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const monoProHeadingFont = Inter({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const monoProBodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const monoProLabelFont = Inter({
  variable: "--font-label",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const warmCraftHeadingFont = Lora({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

const warmCraftBodyFont = Nunito({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

const warmCraftLabelFont = Nunito({
  variable: "--font-label",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const neonDarkHeadingFont = Oswald({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

const neonDarkBodyFont = IBM_Plex_Mono({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const neonDarkLabelFont = IBM_Plex_Mono({
  variable: "--font-label",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

const neonDarkCodeFont = IBM_Plex_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const brutalistHeadingFont = Anton({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const brutalistBodyFont = Inter_Tight({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

const brutalistLabelFont = Inter_Tight({
  variable: "--font-label",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const neoCyanFonts: FontsConfig = {
  heading: neoCyanHeadingFont,
  body: neoCyanBodyFont,
  label: neoCyanLabelFont,
  code: codeFont,
};

const minimalFonts: FontsConfig = {
  heading: minimalHeadingFont,
  body: minimalBodyFont,
  label: minimalLabelFont,
  code: codeFont,
};

const techBlueprintFonts: FontsConfig = {
  heading: techBlueprintHeadingFont,
  body: techBlueprintBodyFont,
  label: techBlueprintLabelFont,
  code: techBlueprintCodeFont,
};

const monoProFonts: FontsConfig = {
  heading: monoProHeadingFont,
  body: monoProBodyFont,
  label: monoProLabelFont,
  code: codeFont,
};

const warmCraftFonts: FontsConfig = {
  heading: warmCraftHeadingFont,
  body: warmCraftBodyFont,
  label: warmCraftLabelFont,
  code: codeFont,
};

const neonDarkFonts: FontsConfig = {
  heading: neonDarkHeadingFont,
  body: neonDarkBodyFont,
  label: neonDarkLabelFont,
  code: neonDarkCodeFont,
};

const brutalistSoftFonts: FontsConfig = {
  heading: brutalistHeadingFont,
  body: brutalistBodyFont,
  label: brutalistLabelFont,
  code: codeFont,
};

const neoCyanPreset: ThemePreset = {
  id: "neo-cyan",
  label: "Neo Cyan",
  fonts: neoCyanFonts,
  style: {
    theme: "system",
    neutral: "gray",
    brand: "cyan",
    accent: "red",
    solid: "contrast",
    solidStyle: "flat",
    border: "playful",
    surface: "translucent",
    transition: "all",
    scaling: "100",
  },
  dataStyle: {
    variant: "gradient",
    mode: "categorical",
    height: 24,
    axis: {
      stroke: "var(--neutral-alpha-weak)",
    },
    tick: {
      fill: "var(--neutral-on-background-weak)",
      fontSize: 11,
      line: false,
    },
  },
  effects: {
    mask: {
      cursor: false,
      x: 50,
      y: 0,
      radius: 100,
    },
    gradient: {
      display: false,
      opacity: 100,
      x: 50,
      y: 60,
      width: 100,
      height: 50,
      tilt: 0,
      colorStart: "accent-background-strong",
      colorEnd: "page-background",
    },
    dots: {
      display: true,
      opacity: 40,
      size: "2",
      color: "brand-background-strong",
    },
    grid: {
      display: false,
      opacity: 100,
      color: "neutral-alpha-medium",
      width: "0.25rem",
      height: "0.25rem",
    },
    lines: {
      display: false,
      opacity: 100,
      color: "neutral-alpha-weak",
      size: "16",
      thickness: 1,
      angle: 45,
    },
  },
  ui: {
    mouseHalo: true,
    flatHeader: false,
    timelineGlow: true,
    flatCards: false,
  },
};

const minimalPreset: ThemePreset = {
  id: "minimal",
  label: "Editorial Minimal",
  fonts: minimalFonts,
  style: {
    theme: "light",
    neutral: "sand",
    brand: "blue",
    accent: "orange",
    solid: "contrast",
    solidStyle: "flat",
    border: "conservative",
    surface: "filled",
    transition: "micro",
    scaling: "100",
  },
  dataStyle: {
    variant: "flat",
    mode: "sequential",
    height: 24,
    axis: {
      stroke: "var(--neutral-alpha-medium)",
    },
    tick: {
      fill: "var(--neutral-on-background-medium)",
      fontSize: 11,
      line: false,
    },
  },
  effects: {
    mask: {
      cursor: false,
      x: 50,
      y: 0,
      radius: 64,
    },
    gradient: {
      display: false,
      opacity: 100,
      x: 50,
      y: 50,
      width: 100,
      height: 100,
      tilt: 0,
      colorStart: "page-background",
      colorEnd: "page-background",
    },
    dots: {
      display: false,
      opacity: 0,
      size: "2",
      color: "neutral-alpha-weak",
    },
    grid: {
      display: false,
      opacity: 0,
      color: "neutral-alpha-weak",
      width: "0.5rem",
      height: "0.5rem",
    },
    lines: {
      display: false,
      opacity: 100,
      color: "neutral-alpha-weak",
      size: "16",
      thickness: 1,
      angle: 90,
    },
  },
  ui: {
    mouseHalo: false,
    flatHeader: true,
    timelineGlow: false,
    flatCards: true,
  },
};

const techBlueprintPreset: ThemePreset = {
  id: "tech-blueprint",
  label: "Tech Blueprint",
  fonts: techBlueprintFonts,
  style: {
    theme: "light",
    neutral: "sand",
    brand: "blue",
    accent: "cyan",
    solid: "contrast",
    solidStyle: "flat",
    border: "conservative",
    surface: "filled",
    transition: "micro",
    scaling: "100",
  },
  dataStyle: {
    variant: "outline",
    mode: "sequential",
    height: 24,
    axis: {
      stroke: "var(--brand-alpha-medium)",
    },
    tick: {
      fill: "var(--neutral-on-background-weak)",
      fontSize: 11,
      line: false,
    },
  },
  effects: {
    mask: {
      cursor: false,
      x: 50,
      y: 0,
      radius: 72,
    },
    gradient: {
      display: false,
      opacity: 100,
      x: 50,
      y: 50,
      width: 100,
      height: 100,
      tilt: 0,
      colorStart: "page-background",
      colorEnd: "page-background",
    },
    dots: {
      display: true,
      opacity: 10,
      size: "1",
      color: "accent-background-strong",
    },
    grid: {
      display: true,
      opacity: 32,
      color: "brand-alpha-medium",
      width: "0.5rem",
      height: "0.5rem",
    },
    lines: {
      display: false,
      opacity: 100,
      color: "neutral-alpha-medium",
      size: "16",
      thickness: 1,
      angle: 90,
    },
  },
  ui: {
    mouseHalo: false,
    flatHeader: true,
    timelineGlow: false,
    flatCards: true,
  },
};

const monoProPreset: ThemePreset = {
  id: "mono-pro",
  label: "Mono Pro",
  fonts: monoProFonts,
  style: {
    theme: "light",
    neutral: "gray",
    brand: "blue",
    accent: "blue",
    solid: "contrast",
    solidStyle: "flat",
    border: "conservative",
    surface: "filled",
    transition: "micro",
    scaling: "100",
  },
  dataStyle: {
    variant: "flat",
    mode: "sequential",
    height: 24,
    axis: {
      stroke: "var(--neutral-alpha-medium)",
    },
    tick: {
      fill: "var(--neutral-on-background-medium)",
      fontSize: 11,
      line: false,
    },
  },
  effects: {
    mask: {
      cursor: false,
      x: 50,
      y: 0,
      radius: 56,
    },
    gradient: {
      display: false,
      opacity: 100,
      x: 50,
      y: 50,
      width: 100,
      height: 100,
      tilt: 0,
      colorStart: "page-background",
      colorEnd: "page-background",
    },
    dots: {
      display: false,
      opacity: 0,
      size: "1",
      color: "neutral-alpha-weak",
    },
    grid: {
      display: false,
      opacity: 0,
      color: "neutral-alpha-weak",
      width: "0.5rem",
      height: "0.5rem",
    },
    lines: {
      display: false,
      opacity: 100,
      color: "neutral-alpha-weak",
      size: "16",
      thickness: 1,
      angle: 90,
    },
  },
  ui: {
    mouseHalo: false,
    flatHeader: true,
    timelineGlow: false,
    flatCards: true,
  },
};

const warmCraftPreset: ThemePreset = {
  id: "warm-craft",
  label: "Warm Craft",
  fonts: warmCraftFonts,
  style: {
    theme: "light",
    neutral: "sand",
    brand: "moss",
    accent: "orange",
    solid: "contrast",
    solidStyle: "flat",
    border: "conservative",
    surface: "filled",
    transition: "micro",
    scaling: "100",
  },
  dataStyle: {
    variant: "gradient",
    mode: "categorical",
    height: 24,
    axis: {
      stroke: "var(--brand-alpha-medium)",
    },
    tick: {
      fill: "var(--neutral-on-background-medium)",
      fontSize: 11,
      line: false,
    },
  },
  effects: {
    mask: {
      cursor: false,
      x: 50,
      y: 0,
      radius: 60,
    },
    gradient: {
      display: true,
      opacity: 24,
      x: 50,
      y: 10,
      width: 85,
      height: 70,
      tilt: -2,
      colorStart: "accent-background-medium",
      colorEnd: "page-background",
    },
    dots: {
      display: true,
      opacity: 8,
      size: "1",
      color: "brand-background-medium",
    },
    grid: {
      display: false,
      opacity: 0,
      color: "neutral-alpha-weak",
      width: "0.5rem",
      height: "0.5rem",
    },
    lines: {
      display: false,
      opacity: 100,
      color: "neutral-alpha-weak",
      size: "16",
      thickness: 1,
      angle: 90,
    },
  },
  ui: {
    mouseHalo: false,
    flatHeader: true,
    timelineGlow: false,
    flatCards: true,
  },
};

const neonDarkLabPreset: ThemePreset = {
  id: "neon-dark-lab",
  label: "Neon Dark Lab",
  fonts: neonDarkFonts,
  style: {
    theme: "dark",
    neutral: "slate",
    brand: "emerald",
    accent: "aqua",
    solid: "contrast",
    solidStyle: "flat",
    border: "conservative",
    surface: "translucent",
    transition: "micro",
    scaling: "100",
  },
  dataStyle: {
    variant: "gradient",
    mode: "sequential",
    height: 24,
    axis: {
      stroke: "var(--accent-alpha-medium)",
    },
    tick: {
      fill: "var(--neutral-on-background-weak)",
      fontSize: 11,
      line: false,
    },
  },
  effects: {
    mask: {
      cursor: false,
      x: 50,
      y: 0,
      radius: 68,
    },
    gradient: {
      display: true,
      opacity: 22,
      x: 50,
      y: 14,
      width: 92,
      height: 68,
      tilt: 0,
      colorStart: "accent-background-medium",
      colorEnd: "page-background",
    },
    dots: {
      display: true,
      opacity: 22,
      size: "2",
      color: "brand-background-strong",
    },
    grid: {
      display: false,
      opacity: 0,
      color: "neutral-alpha-medium",
      width: "0.5rem",
      height: "0.5rem",
    },
    lines: {
      display: false,
      opacity: 100,
      color: "neutral-alpha-medium",
      size: "16",
      thickness: 1,
      angle: 90,
    },
  },
  ui: {
    mouseHalo: false,
    flatHeader: false,
    timelineGlow: false,
    flatCards: false,
  },
};

const brutalistSoftPreset: ThemePreset = {
  id: "brutalist-soft",
  label: "Brutalist Soft",
  fonts: brutalistSoftFonts,
  style: {
    theme: "light",
    neutral: "gray",
    brand: "red",
    accent: "yellow",
    solid: "color",
    solidStyle: "flat",
    border: "playful",
    surface: "filled",
    transition: "micro",
    scaling: "100",
  },
  dataStyle: {
    variant: "outline",
    mode: "categorical",
    height: 24,
    axis: {
      stroke: "var(--neutral-alpha-strong)",
    },
    tick: {
      fill: "var(--neutral-on-background-strong)",
      fontSize: 11,
      line: false,
    },
  },
  effects: {
    mask: {
      cursor: false,
      x: 50,
      y: 0,
      radius: 58,
    },
    gradient: {
      display: false,
      opacity: 100,
      x: 50,
      y: 50,
      width: 100,
      height: 100,
      tilt: 0,
      colorStart: "page-background",
      colorEnd: "page-background",
    },
    dots: {
      display: false,
      opacity: 0,
      size: "2",
      color: "neutral-alpha-weak",
    },
    grid: {
      display: false,
      opacity: 0,
      color: "neutral-alpha-medium",
      width: "0.5rem",
      height: "0.5rem",
    },
    lines: {
      display: false,
      opacity: 100,
      color: "neutral-alpha-medium",
      size: "16",
      thickness: 1,
      angle: 90,
    },
  },
  ui: {
    mouseHalo: false,
    flatHeader: false,
    timelineGlow: false,
    flatCards: false,
  },
};

const themePresets: Record<ThemePresetId, ThemePreset> = {
  "neo-cyan": neoCyanPreset,
  minimal: minimalPreset,
  "tech-blueprint": techBlueprintPreset,
  "mono-pro": monoProPreset,
  "warm-craft": warmCraftPreset,
  "neon-dark-lab": neonDarkLabPreset,
  "brutalist-soft": brutalistSoftPreset,
};

// Change this single line to switch your global style pack.
export const ACTIVE_THEME_PRESET: ThemePresetId = "tech-blueprint";

export const activeThemePreset: ThemePreset = themePresets[ACTIVE_THEME_PRESET];
export const activeThemeUi = activeThemePreset.ui;
