import React from "react";
import PageLayout from "../components/Layouts/PageLayout";
import ContactBody from "../components/Body/Contact/ContactBody";

const Contact: React.FC = (): JSX.Element => {
	return (
		<PageLayout>
			<ContactBody />
		</PageLayout>
	);
};

export default Contact;
