import type { Metadata } from "next";
import { cookies } from "next/headers";
import "./globals.css";
import LoadingScreen from "./loading-screen";
import { ThemeProvider } from "./theme-provider";

export const metadata: Metadata = {
  title: "Randila Premarathne | Software Engineer",
  description:
    "The portfolio of Randila Premarathne, a software engineer working in AI engineering, data pipelines, and bioinformatics.",
};

export const instant = false;

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const cookieStore = await cookies();
  const initialDark =
    cookieStore.get("portfolio-theme")?.value === "dark";

  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (() => {
                const cookie = document.cookie
                  .split("; ")
                  .find((item) => item.startsWith("portfolio-theme="));
                const stored = window.localStorage.getItem("portfolio-theme");
                const isDark = stored === "dark" || cookie?.split("=")[1] === "dark";
                document.documentElement.dataset.theme = isDark ? "dark" : "light";
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full">
        <ThemeProvider initialDark={initialDark}>
          <LoadingScreen>{children}</LoadingScreen>
        </ThemeProvider>
      </body>
    </html>
  );
}
