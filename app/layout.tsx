import Script from "next/script";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agent Zyne.chat",
  description: "Twój osobisty cyfrowy asystent AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://cdn.platform.openai.com/deployments/chatkit/chatkit.js"
          strategy="beforeInteractive"
        />
      </head>
      <body
        className="antialiased text-white"
        style={{ backgroundColor: "#060607" }}
      >
        {children}
      </body>
    </html>
  );
}
