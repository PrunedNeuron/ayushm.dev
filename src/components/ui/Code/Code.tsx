import React from "react";

import { Children } from "../../../typings/types";
import { CodeContainer, Wrapper } from "./Styles";

const Code: React.FC = ({ children }: Children): JSX.Element => {
	return (
		<div>
			<Wrapper>
				<CodeContainer>{children}</CodeContainer>
			</Wrapper>
		</div>
	);
};

export default Code;
