import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AppConfig } from "@/config/app-config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: AppConfig.app.name,
  description: AppConfig.app.description,
  keywords: ["Next.js", "React", "TypeScript", "Tailwind CSS", "웹 스타터킷"],
  authors: [{ name: AppConfig.app.author }],
  creator: AppConfig.app.author,
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: AppConfig.app.url,
    title: AppConfig.app.name,
    description: AppConfig.app.description,
    siteName: AppConfig.app.name,
  },
  twitter: {
    card: "summary_large_image",
    title: AppConfig.app.name,
    description: AppConfig.app.description,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
