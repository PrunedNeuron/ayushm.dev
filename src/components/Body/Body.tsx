import React from "react";
import Twemoji from "../ui/Twemoji/Twemoji";
import { Container, Intro, Name } from "./Styles";

const Body: React.FC = (): JSX.Element => {
	return (
		<>
			<Container>
				<Intro>
					I&apos;m <Name>Ayush Mishra</Name>, a graphic designer{" "}
					<Twemoji emoji="🖌" />
					and developer <Twemoji emoji="💻" /> from{" "}
					<Twemoji emoji="🇮🇳" />.
				</Intro>
			</Container>
		</>
	);
};

export default Body;
