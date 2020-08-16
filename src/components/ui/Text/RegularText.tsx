import React from "react";
import styled from "styled-components";

const P = styled.p`
	font-weight: 500;
	font-family: "Inter", "Karla", sans-serif;
	font-size: 1rem;
	color: #696969;
`;

export default function RegularText(children: React.ReactNode): JSX.Element {
	return <P>{children}</P>;
}
