import {
  DisplayConfig,
  MailchimpConfig,
  ProtectedRoutesConfig,
  RoutesConfig,
  SameAsConfig,
  SchemaConfig,
  SocialSharingConfig,
} from "@/types";
import { home } from "./index";
import { ACTIVE_THEME_PRESET, activeThemePreset, activeThemeUi } from "./styles/presets";

// IMPORTANT: Replace with your own domain address - it's used for SEO in meta tags and schema
const baseURL: string = "https://www.paada.fr";

const routes: RoutesConfig = {
  "/": true,
  "/about": true,
  "/work": true,
  "/blog": false,
  "/gallery": true,
  "/qrCode": true,
};

const display: DisplayConfig = {
  location: true,
  time: false,
  themeSwitcher: true,
};

// Enable password protection on selected routes
// Set password in the .env file, refer to .env.example
const protectedRoutes: ProtectedRoutesConfig = {
  "/work/automate-design-handovers-with-a-figma-to-code-pipeline": true,
};

const fonts = activeThemePreset.fonts;

// Global style pack selected from src/resources/styles/presets.ts.
const style = activeThemePreset.style;
const dataStyle = activeThemePreset.dataStyle;
const effects = activeThemePreset.effects;
const activeThemePresetId = ACTIVE_THEME_PRESET;

const mailchimp: MailchimpConfig = {
  action: "https://url/subscribe/post?parameters",
  effects: {
    mask: {
      cursor: true,
      x: 50,
      y: 0,
      radius: 100,
    },
    gradient: {
      display: true,
      opacity: 90,
      x: 50,
      y: 0,
      width: 50,
      height: 50,
      tilt: 0,
      colorStart: "accent-background-strong",
      colorEnd: "static-transparent",
    },
    dots: {
      display: true,
      opacity: 20,
      size: "2",
      color: "brand-on-background-weak",
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
      color: "neutral-alpha-medium",
      size: "16",
      thickness: 1,
      angle: 90,
    },
  },
};

// default schema data
const schema: SchemaConfig = {
  logo: "",
  type: "Person",
  name: "Loïc Sainton",
  description: home.description,
  email: "sainton.loic1@gmail.com",
};

// social links
const sameAs: SameAsConfig = {
  threads: "",
  linkedin: "https://www.linkedin.com/in/loic-sainton/",
  discord: "",
};

// social sharing configuration for blog posts
const socialSharing: SocialSharingConfig = {
  display: true,
  platforms: {
    x: true,
    linkedin: true,
    facebook: false,
    pinterest: false,
    whatsapp: false,
    reddit: false,
    telegram: false,
    email: true,
    copyLink: true,
  },
};

export {
  display,
  mailchimp,
  routes,
  protectedRoutes,
  baseURL,
  fonts,
  style,
  schema,
  sameAs,
  socialSharing,
  effects,
  dataStyle,
  activeThemePresetId,
  activeThemeUi,
};
