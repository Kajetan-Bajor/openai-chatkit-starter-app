import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Start",
    prompt: "Start",
    icon: "circle-question",
  },
];

export const PLACEHOLDER_INPUT = "Napisz wiadomość";

export const GREETING = "Jak mogę ci dzisiaj pomóc";

export function getThemeConfig(theme: ColorScheme): ThemeOption {
  // Wklej tutaj obiekt `theme` wyeksportowany z Playground
  return {
    color: {
      accent: { primary: "#00FF6E", level: 1 },
      surface: { background: "#0E1013", foreground: "#1A1C20" },
      grayscale: { /* ... */ }
    },
    radius: "pill",
    density: "normal",
    typography: { /* ... ustawienia czcionki ... */ },
    // itp. zgodnie z wyeksportowanym kodem
  };
}
  // Add other theme options here
  // chatkit.studio/playground to explore config options
});
