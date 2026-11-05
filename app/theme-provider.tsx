"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type ThemeContextValue = {
  isDark: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);
const THEME_STORAGE_KEY = "portfolio-theme";
const THEME_CHANGE_EVENT = "portfolio-theme-change";
const THEME_COOKIE = "portfolio-theme";

function readStoredTheme() {
  if (typeof window === "undefined") {
    return false;
  }

  const cookieTheme = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(`${THEME_COOKIE}=`))
    ?.split("=")[1];

  return (
    window.localStorage.getItem(THEME_STORAGE_KEY) === "dark" ||
    cookieTheme === "dark"
  );
}

export function ThemeProvider({
  children,
  initialDark = false,
}: {
  children: ReactNode;
  initialDark?: boolean;
}) {
  const [isDark, setIsDark] = useState(initialDark);

  useEffect(() => {
    const handleThemeChange = () => {
      setIsDark(readStoredTheme());
    };

    window.addEventListener("storage", handleThemeChange);
    window.addEventListener(THEME_CHANGE_EVENT, handleThemeChange);

    return () => {
      window.removeEventListener("storage", handleThemeChange);
      window.removeEventListener(THEME_CHANGE_EVENT, handleThemeChange);
    };
  }, []);

  const value = useMemo(
    () => ({
      isDark,
      toggleTheme: () => {
        const next = !isDark;
        setIsDark(next);
        window.localStorage.setItem(THEME_STORAGE_KEY, next ? "dark" : "light");
        document.cookie = `${THEME_COOKIE}=${next ? "dark" : "light"}; path=/; max-age=31536000; samesite=lax`;
        window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
      },
    }),
    [isDark],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
