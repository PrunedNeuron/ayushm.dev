import React from "react";

import ContactBody from "../components/Body/Contact/ContactBody";
import PageLayout from "../components/Layouts/PageLayout";

const Contact: React.FC = (): JSX.Element => {
	return (
		<PageLayout>
			<ContactBody />
		</PageLayout>
	);
};

export default Contact;
