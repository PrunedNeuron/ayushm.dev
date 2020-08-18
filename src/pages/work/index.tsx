import React from "react";
import PageLayout from "../../components/Layouts/PageLayout";
import Work from "../../components/Body/Work/Work";

const Index: React.FC = (): JSX.Element => {
	return (
		<PageLayout>
			<Work initialValue="1" />
		</PageLayout>
	);
};

export default Index;
