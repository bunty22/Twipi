import React, {createContext, useState} from 'react';

export const themeContext = createContext();

const ThemeProvider = ({children}) => {

    const [themes, setTheme] = useState({
        light: { text: "#0F1419", bgColor: "#ffffff", fill: "#1DA1F2"},
        dark: { text: "#D9D9D9", bgColor: "#000000", fill: "#D9D9D9"},
        isLightTheme: true
    });

    const toggleTheme = () => {
        setTheme({
            light: themes.light,
            dark: themes.dark,
            isLightTheme: !themes.isLightTheme
        })
    }

    return (
        <themeContext.Provider
            value={{
                themes,
                toggleTheme: toggleTheme
            }}
        >
            {children}
        </themeContext.Provider>
    )
}

export default ThemeProvider