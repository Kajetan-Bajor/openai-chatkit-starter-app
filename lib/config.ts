// lib/config.ts
import type { ChatKitOptions } from "@openai/chatkit";

/**
 * Konfiguracja wyglądu / motywu ChatKit.
 * - Jeśli chcesz dodać więcej fontSources, skopiuj strukturę w tablicy fontSources.
 * - Nie umieszczaj tutaj kluczy API.
 */
export const config: Partial<ChatKitOptions> = {
  theme: {
    colorScheme: "dark",
    radius: "pill",
    density: "normal",
    color: {
      accent: { primary: "#ffffff", level: 1 },
      surface: { background: "#121112", foreground: "#1e1e1f" }
    },
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
        // Jeśli masz dodatkowe fontSources z Playgound, dopisz je tutaj jako kolejne obiekty.
      ]
    }
  },

  composer: {
    placeholder: "Napisz wiadomość",
    attachments: {
      enabled: true,
      maxCount: 5,
      maxSize: 10_485_760 // 10 MB w bajtach
    }
  },

  startScreen: {
    greeting: "Asystent Zyne",
    prompts: []
  }
};

export default config;
