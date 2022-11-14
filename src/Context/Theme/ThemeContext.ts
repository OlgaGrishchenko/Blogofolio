import { createContext, useContext } from "react";
import { Theme } from "../../Constants/@types";

type ThemeContextType = {
   theme: Theme;
   onChangeTheme: (value: Theme) => void;
};

const DEFAULT_VALUE = {
   theme: Theme.Light,
   onChangeTheme: () => {},
};

const ThemeContext = createContext<ThemeContextType>(DEFAULT_VALUE);

export const useThemeContext = () => useContext(ThemeContext); // свой хук, который возвращает значение хука useContext по нужному нам контексту ThemeContext 

export default ThemeContext;
