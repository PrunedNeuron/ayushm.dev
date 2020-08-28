import React from "react";

import { IconContainer } from "./Styles";

type IconProps = {
	color?: string;
	hoverable?: boolean;
	size?: string;
	children: React.ReactNode;
};

const Icon: React.FC<IconProps> = (props: IconProps) => {
	return (
		<IconContainer
			color={props.color ? props.color : undefined}
			hoverable={props.hoverable ? true : false}
			size={props.size}
		>
			{props.children}
		</IconContainer>
	);
};

export default Icon;
