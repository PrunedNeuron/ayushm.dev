import React from "react";

const ThemeContext = React.createContext({
	activeTheme: "light",
	toggleTheme: () => undefined
});

export default ThemeContext;
