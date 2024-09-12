import React, { createContext, useState } from "react";

// Bước 1: Tạo ngữ cảnh
export const ThemeProvider = createContext();

export default function ParentComponent({ children }) {
  const [theme, setTheme] = useState("light");

  const handleChangeTheme = () => {
    // Nếu theme = dark => light <=>
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider.Provider value={{ theme, handleChangeTheme }}>
      {/* Khu vữ chứa tất cả các component con */}
      {children}
    </ThemeProvider.Provider>
  );
}
