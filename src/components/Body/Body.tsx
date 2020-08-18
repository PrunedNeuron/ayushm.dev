import React from "react";
import { Container, Intro, Name } from "./Styles";

const Body: React.FC = (): JSX.Element => {
	return (
		<>
			<Container>
				<Intro>
					I&apos;m <Name>Ayush Mishra</Name>, a graphic designer
					<img
						alt="🖌"
						draggable="false"
						src="//twemoji.maxcdn.com/2/72x72/1f58c.png"
						className="emoji"
					/>
					and developer
					<img
						alt="💻"
						draggable="false"
						src="//twemoji.maxcdn.com/2/72x72/1f4bb.png"
						className="emoji"
					/>
					from
					<img
						alt="🇮🇳"
						draggable="false"
						src="//twemoji.maxcdn.com/2/72x72/1f1ee-1f1f3.png"
						className="emoji"
					/>
					.
				</Intro>
			</Container>
		</>
	);
};

export default Body;
