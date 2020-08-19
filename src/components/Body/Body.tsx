import React from "react";
import { Container, Intro, Name } from "./Styles";
import { Icon } from "@iconify/react";
import flagForFlagIndia from "@iconify/icons-twemoji/flag-for-flag-india";
import laptopIcon from "@iconify/icons-twemoji/laptop";
import paintbrushIcon from "@iconify/icons-twemoji/paintbrush";

const Body: React.FC = (): JSX.Element => {
	return (
		<>
			<Container>
				<Intro>
					I&apos;m <Name>Ayush Mishra</Name>, a graphic designer
					<Icon className="emoji" icon={paintbrushIcon} />
					and developer
					<Icon className="emoji" icon={laptopIcon} />
					from
					<Icon className="emoji" icon={flagForFlagIndia} />.
				</Intro>
			</Container>
		</>
	);
};

export default Body;
