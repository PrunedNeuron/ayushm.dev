import React from "react";
import PageLayout from "../components/Layouts/PageLayout";
import AboutBody from "../components/Body/About/AboutBody";

const About: React.FC = (): JSX.Element => {
	return (
		<PageLayout>
			<AboutBody />
		</PageLayout>
	);
};

export default About;
