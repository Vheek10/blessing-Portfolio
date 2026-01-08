import * as React from "react";
import { useState, useEffect } from "react";

type Theme = "default" | "purple" | "teal" | "orange";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeContext = React.createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
  cycleTheme: () => void;
}>({
  theme: "default",
  setTheme: () => {},
  cycleTheme: () => {},
});

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>("default");

  const cycleTheme = () => {
    const themes: Theme[] = ["default", "purple", "teal", "orange"];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("purple-theme", "teal-theme", "orange-theme");
    if (theme !== "default") {
      root.classList.add(`${theme}-theme`);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
