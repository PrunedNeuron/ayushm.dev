import "../../styles/global.css";

import { CssBaseline, ZeitProvider } from "@zeit-ui/react";
import { PrismBaseline } from "@zeit-ui/react-prism";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import { useState } from "react";
import React from "react";

import SEO from "../../next-seo.config";
import ThemeContext from "../components/Contexts/ThemeContext";
import Theme from "../themes/theme";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
	const [activeTheme, setActiveTheme] = useState("light");
	const toggleTheme = () => {
		setActiveTheme((previousTheme) =>
			previousTheme === "dark" ? "light" : "dark"
		);
	};
	return (
		<>
			<ThemeContext.Provider
				value={{
					activeTheme,
					toggleTheme
				}}
			>
				<ZeitProvider
					theme={{
						type: activeTheme,
						...Theme
					}}
				>
					<CssBaseline />
					<PrismBaseline />
					<DefaultSeo {...SEO} />
					<Component {...pageProps} />
				</ZeitProvider>
			</ThemeContext.Provider>
		</>
	);
}

/* export function reportWebVitals(metric: NextWebVitalsMetric): void {
	console.log(metric);
} */
