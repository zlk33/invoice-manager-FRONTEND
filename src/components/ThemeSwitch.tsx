import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "./Icons";

function ThemeSwitch() {
  const getSystemTheme = (): string => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  };

  const getLocalStorageTheme = (): string | null => {
    return localStorage.getItem("theme") || getSystemTheme();
  };

  const [theme, setTheme] = useState<string | null>(getLocalStorageTheme());

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const initTheme = (theme: string | null) => {
    if (theme === "dark") {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    initTheme(theme);
  }, [theme]);

  return (
    <button
      onClick={changeTheme}
      className={
        "p-1 rounded " +
        (theme === "light"
          ? "bg-black text-amber-300"
          : "bg-amber-300 text-black")
      }
    >
      {theme === "light" ? (
        <SunIcon className="w-5 h-5" />
      ) : (
        <MoonIcon className="w-5 h-5" />
      )}
    </button>
  );
}
export default ThemeSwitch;
