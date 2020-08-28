import React from "react";

import Work from "../../components/Body/Work/Work";
import PageLayout from "../../components/Layouts/PageLayout";

const Index: React.FC = (): JSX.Element => {
	return (
		<PageLayout>
			<Work initialValue="1" />
		</PageLayout>
	);
};

export default Index;
