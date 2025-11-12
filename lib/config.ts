// lib/config.ts
import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

// Twój greeting i placeholder
export const STARTER_PROMPTS: StartScreenPrompt[] = []; // puste, bo masz własny greeting
export const PLACEHOLDER_INPUT = "Napisz wiadomość"; // z Twojego playground
export const GREETING = "Asystent Zyne"; // Twój greeting

// Funkcja generująca Twój motyw
export const getThemeConfig = (_theme: ColorScheme): ThemeOption => ({
  color: {
    accent: {
      primary: "#ffffff",
      level: 1
    },
    surface: {
      background: "#121112",
      foreground: "#1e1e1f"
    }
  },
  radius: "pill",
  density: "normal",
  typography: {
    baseSize: 16,
    fontFamily:
      '"OpenAI Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif',
    fontFamilyMono:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace',
    fontSources: [
      {
        family: "OpenAI Sans",
        src: "https://cdn.openai.com/common/fonts/openai-sans/v2/OpenAISans-Regular.woff2",
        weight: 400,
        style: "normal",
        display: "swap"
      }
      // dopisz tu resztę fontSources z Playground, jeśli chcesz
    ]
  }
});
