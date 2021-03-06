import { Tooltip } from "@zeit-ui/react";
import React from "react";

import { GoogleIcon } from "./Styles";

interface Props {
	name: string;
}

const Google: React.FC<Props> = (props: Props): JSX.Element => {
	const getSearchLink = (query: string) =>
		"https://google.com/search?q=" + encodeURI(query + " app");

	return (
		<Tooltip text="Google search" placement="bottomStart">
			<a
				href={getSearchLink(props.name)}
				target="_blank"
				rel="noopener noreferrer"
			>
				<GoogleIcon />
			</a>
		</Tooltip>
	);
};

export default Google;
