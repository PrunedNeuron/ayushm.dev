import React from "react";

import AboutBody from "../components/Body/About/AboutBody";
import PageLayout from "../components/Layouts/PageLayout";

const About: React.FC = (): JSX.Element => {
	return (
		<PageLayout>
			<AboutBody />
		</PageLayout>
	);
};

export default About;
