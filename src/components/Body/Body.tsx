import React from "react";
import { Container, Intro, Name } from "./Styles";
import emoji from "react-easy-emoji";

const Body: React.FC = (): JSX.Element => {
	return (
		<>
			<Container>
				<Intro>
					I&apos;m <Name>Ayush Mishra</Name>, a graphic designer{" "}
					{emoji("🖌")} and developer {emoji("💻")} from {emoji("🇮🇳")}.
				</Intro>
			</Container>
		</>
	);
};

export default Body;
