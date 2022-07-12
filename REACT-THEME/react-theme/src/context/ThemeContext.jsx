import React, { createContext, useState , useEffect } from "react";

const themes = {
  dark: {
    backgroundColor: "#000000",
    color: "#ffffff",
  },
  light: {
    backgroundColor: "#ffffff",
    color: "#000000",
  },
};

const initialState = {
  theme: themes.light,
  handleToggleIcon: () => {},
  isDarkTheme: false,
};

const ThemeContext = createContext(initialState);

const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  
  useEffect(()=>{
   const extractDarkThemeFlagFromStroage = JSON.parse(localStorage.getItem('isDarkTheme'));
   setIsDarkTheme(extractDarkThemeFlagFromStroage !== null ? extractDarkThemeFlagFromStroage : false);
  },[])

  const handleToggleIcon = () => {
    const updateIsDarkTheme = !isDarkTheme;
    localStorage.setItem("isDarkTheme", JSON.stringify(updateIsDarkTheme));
    setIsDarkTheme(updateIsDarkTheme);
  };

  const theme = isDarkTheme ? themes.dark : themes.light;
  return (
    <ThemeContext.Provider value={{ theme, handleToggleIcon, isDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export {ThemeContext , ThemeProvider};
