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
    localStorage.setItem('theme',JSON.stringify(dark?'dark':'light'))
    if (dark === true ) {
      document.body.parentElement.classList.add("dark");
    } else {
      document.body.parentElement.classList.remove("dark");
    }
  };

  const persistTheme=()=>{
    let theme=JSON.parse(localStorage.getItem('theme')) ?? 'dark'
    theme==='dark'?setDark(true):setDark(false)
  }

  useEffect(() => {
    changeTheme();
  }, [dark]);

  useEffect(() => {
    persistTheme()
    return()=>{
      persistTheme()
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme,persistTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

