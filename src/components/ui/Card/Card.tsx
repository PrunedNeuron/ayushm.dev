import React from "react";
import { CardContainer } from "./Styles";

const Card: React.FC = (children: React.ReactNode): JSX.Element => {
	return (
		<div>
			<CardContainer>{children}</CardContainer>
		</div>
	);
};

export default Card;
