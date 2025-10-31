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

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    accent: { primary: '#00FF6E', level: 1 }, // Twój kolor akcentu
  },
      surface: {
        background: '#0E1013',
        foreground: '#1A1C20'
  radius: 'pill',          // na przykład zaokrąglenie rogów
  density: 'normal'       // gęstość interfejsu
  // Możesz tu dodać inne opcje jak typografia, background itp.
});
