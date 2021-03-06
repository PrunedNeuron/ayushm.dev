import { Http } from "@styled-icons/material-rounded/Http";
import { Adobe } from "@styled-icons/simple-icons/Adobe";
import { Android } from "@styled-icons/simple-icons/Android";
import { Kotlin } from "@styled-icons/simple-icons/Kotlin";
import { NodeDotJs } from "@styled-icons/simple-icons/NodeDotJs";
import { Python } from "@styled-icons/simple-icons/Python";
import { ReactLogo } from "@styled-icons/simple-icons/ReactLogo";
import { Typescript } from "@styled-icons/simple-icons/Typescript";
import { Card, Link, Text } from "@zeit-ui/react";
import React from "react";

import Icon from "../../../ui/Icon/Icon";
import { Cards } from "./Styles";
import { BodyContainer, CardContainer } from "./Styles";
// import { Twemoji } from "react-emoji-render";

const CodeProjects: React.FC = (): JSX.Element => {
	return (
		<>
			<BodyContainer>
				<Cards>
					<CardContainer>
						<Card width="20rem" hoverable>
							<Text h4>
								Icon Request API{" "}
								<Icon color="#00e25e">
									<NodeDotJs />
								</Icon>
								<Icon color="#0766ff">
									<Typescript />
								</Icon>
							</Text>
							<Text p>
								API to manage, collect and view icon requests
								for Android icon packs written in TypeScript.
							</Text>
							<Link
								color
								target="_blank"
								href="https://github.com/PrunedNeuron/icon-request-api"
								rel="noopener noreferrer"
							>
								Source code.
							</Link>
						</Card>
					</CardContainer>
					<CardContainer>
						<Card width="20rem" hoverable>
							<Text h4>
								Amphetamine{" "}
								<Icon color="#0eed90">
									<Android />
								</Icon>
								<Icon color="#670ef7">
									<Kotlin />
								</Icon>
								<Icon color="#ff1971">
									<Adobe />
								</Icon>
							</Text>
							<Text p>
								Bright, vibrant, energetic icon pack for android
								devices containing over 1400 high quality icons.
							</Text>
							<Link
								color
								target="_blank"
								href="https://play.google.com/store/apps/details?id=com.ayushm.icons.amphetamine"
								rel="noopener noreferrer"
							>
								Install now.
							</Link>
						</Card>
					</CardContainer>
					<CardContainer>
						<Card width="20rem" hoverable>
							<Text h4>
								PyGitio{" "}
								<Icon color="#ffd400">
									<Python />
								</Icon>
								<Icon size="2rem" color="#3f3f3f">
									<Http />
								</Icon>
							</Text>
							<Text p>
								A wrapper over the git.io URL shortener with
								support for custom vanity URLs written in
								Python.
							</Text>
							<Link
								color
								target="_blank"
								href="https://github.com/PrunedNeuron/icon-request-api"
								rel="noopener noreferrer"
							>
								Source code.
							</Link>
						</Card>
					</CardContainer>
					<CardContainer>
						<Card width="20rem" hoverable>
							<Text h4>
								Personal Website{" "}
								<Icon color="#00bbff">
									<ReactLogo />
								</Icon>
							</Text>
							<Text p>
								The source code of this website, built with
								React, Next.js. Inspired by Vercel.com.
							</Text>
							<Link
								color
								target="_blank"
								href="https://github.com/PrunedNeuron/Portfolio"
								rel="noopener noreferrer"
							>
								Source code.
							</Link>
						</Card>
					</CardContainer>
				</Cards>
			</BodyContainer>
		</>
	);
};

export default CodeProjects;
