import { Tooltip } from "@zeit-ui/react";
import React from "react";

import { PlayStoreIcon } from "./Styles";

interface Props {
	url: string;
}

const PlayStore: React.FC<Props> = (props: Props): JSX.Element => {
	return (
		<Tooltip text="Play Store" placement="bottomStart">
			<a href={props.url} target="_blank" rel="noopener noreferrer">
				<PlayStoreIcon />
			</a>
		</Tooltip>
	);
};

export default PlayStore;
