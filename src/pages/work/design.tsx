import React from "react";

import Work from "../../components/Body/Work/Work";
import PageLayout from "../../components/Layouts/PageLayout";

const Design: React.FC = (): JSX.Element => {
	return (
		<PageLayout>
			<Work initialValue="2" />
		</PageLayout>
	);
};

export default Design;
