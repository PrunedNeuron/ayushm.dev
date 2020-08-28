import React from "react";

import { Header } from "./Styles";

const Heading: React.FC<{ children: React.ReactNode }> = ({
	children
}: {
	children: React.ReactNode;
}): JSX.Element => {
	return <Header>{children}</Header>;
};

export default Heading;
