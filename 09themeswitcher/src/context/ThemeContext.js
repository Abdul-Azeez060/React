import { createContext, useContext } from "react";

const themeContext = createContext({
  themeMode: "light",
  lightMode: () => {},
  darkMode: () => {},
});

const ThemeContextProvider = themeContext.Provider;
export { ThemeContextProvider, themeContext };

export default function useTheme() {
  return useContext(themeContext);
}
