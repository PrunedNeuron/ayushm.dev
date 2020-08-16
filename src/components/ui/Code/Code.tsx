import React from "react";
import { CodeContainer, Wrapper } from "./Styles";

const Code: React.FC = (children: React.ReactNode): JSX.Element => {
	return (
		<div>
			<Wrapper>
				<CodeContainer>{children}</CodeContainer>
			</Wrapper>
		</div>
	);
};

export default Code;
