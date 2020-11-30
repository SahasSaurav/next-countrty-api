import { createContext, useState, useEffect } from "react";

const themeInitialState = {};

export const ThemeContext = createContext(themeInitialState);

export default function ThemeProvider({ children }) {
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    const theme = !dark;
    setDark(theme);
  };

  const changeTheme = () => {
    if (dark === true) {
      document.body.parentElement.classList.add("dark");
    } else {
      document.body.parentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    changeTheme();
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

