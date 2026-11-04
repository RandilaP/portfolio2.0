import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Randila Premarathne | Software Engineer",
  description:
    "The portfolio of Randila Premarathne, a software engineer working in AI engineering, data pipelines, and bioinformatics.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
