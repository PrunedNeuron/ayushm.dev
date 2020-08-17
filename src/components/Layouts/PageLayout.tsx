import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

interface Props {
	children: React.ReactNode;
}

const PageLayout: React.FC<Props> = ({ children }: Props): JSX.Element => {
	return (
		<>
			<div className="wrapper">
				<header>
					<Header />
				</header>
				<main>{children}</main>
				<footer>
					<Footer />
				</footer>
			</div>
			<style jsx global>{`
				* {
					font-display: auto;
				}

				.wrapper {
					display: flex;
					flex-direction: column;
					min-width: 100vw;
					min-height: 100vh;
					 {
						/* margin: 0 2rem; */
					}
				}

				main {
					width: 100vw;
					height: 100vh;
					display: flex;
					flex-wrap: wrap;
					flex: 1;
				}

				header,
				footer {
					flex: 0 1 auto;
				}

				h1,
				h2,
				h3,
				h4,
				h5,
				h6,
				p,
				a small {
					font-family: "Inter", sans-serif !important;
				}

				.plainLink {
					text-decoration: none !important;
					color: inherit !important;
				}
			`}</style>
		</>
	);
};

export default PageLayout;
