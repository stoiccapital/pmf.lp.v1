import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { DEFAULT_THEME } from "../lp-system/config/preferences";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Landing Page Template",
  description: "Minimal reusable landing page template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // For static export, use default theme (theme switching handled client-side)
  const theme = DEFAULT_THEME;

  // Tailwind uses "dark" class on <html> for dark mode
  // Light mode = no class (empty string)
  const htmlClassName = theme === 'dark' ? 'dark' : '';

  return (
    <html lang="en" className={`${htmlClassName} ${jetbrainsMono.variable}`} data-theme={theme}>
      <body className="bg-bg-default text-text-primary">
        {children}
      </body>
    </html>
  );
}
