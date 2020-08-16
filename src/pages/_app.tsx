import { AppProps, NextWebVitalsMetric } from "next/app";
import "../../styles/global.css";
import { ZeitProvider, CssBaseline } from "@zeit-ui/react";
import { CacheProvider } from "@emotion/core";
import { cache } from "emotion";
import Theme from "../themes/theme";
import { useState } from "react";
import { PrismBaseline } from "@zeit-ui/react-prism";
import React from "react";
import ThemeContext from "../components/Contexts/ThemeContext";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
	const [activeTheme, setActiveTheme] = useState("light");
	const toggleTheme = () => {
		setActiveTheme((previousTheme) =>
			previousTheme === "dark" ? "light" : "dark"
		);
	};
	return (
		<>
			<CacheProvider value={cache}>
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
			</CacheProvider>
		</>
	);
}

export function reportWebVitals(metric: NextWebVitalsMetric): void {
	console.log(metric);
}
