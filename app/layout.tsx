import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daksh Chhabra | Brand Strategist & Creative Director",
  description:
    "Portfolio of Daksh Chhabra, a brand strategist and creative director building memorable campaigns for entertainment, consumer brands, and startups.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
