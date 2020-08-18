import React from "react";
import PageLayout from "../../components/Layouts/PageLayout";
import Work from "../../components/Body/Work/Work";

const Design: React.FC = (): JSX.Element => {
	return (
		<PageLayout>
			<Work initialValue="2" />
		</PageLayout>
	);
};

export default Design;
