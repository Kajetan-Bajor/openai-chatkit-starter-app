import type { ChatKitOptions } from "@openai/chatkit";

export const options: ChatKitOptions = {
  api: {
    // Nie musisz nic tu zmieniać — ChatKit sam połączy się z agentem.
  },
  theme: {
    colorScheme: 'dark',
    radius: 'pill',
    density: 'normal',
    color: {
      accent: {
        primary: '#00FF6E',
        level: 1
      },
      surface: {
        background: '#0E1013',
        foreground: '#1A1C20'
      }
    },
    typography: {
      baseSize: 16,
      fontFamily: '"OpenAI Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      fontFamilyMono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace',
      fontSources: [
        {
          family: 'OpenAI Sans',
          src: 'https://cdn.openai.com/common/fonts/openai-sans/v2/OpenAISans-Regular.woff2',
          weight: 400,
          style: 'normal',
          display: 'swap'
        }
      ]
    }
  },
  composer: {
    placeholder: 'Napisz wiadomość',
    attachments: {
      enabled: true,
      maxCount: 5,
      maxSize: 10485760
    },
  },
  startScreen: {
    greeting: 'Strateg Marketingowy Zyne',
    prompts: [],
  },
};
