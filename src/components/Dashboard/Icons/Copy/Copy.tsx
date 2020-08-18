import React, { useState } from "react";
import { CopyIcon } from "./Styles";
import { Tooltip, useClipboard, useToasts } from "@zeit-ui/react";

interface Props {
	component: string;
}

const Copy: React.FC<Props> = (props: Props): JSX.Element => {
	const [, setCopied] = useState(false);
	const [, setToast] = useToasts();
	const { copy } = useClipboard();

	const copyClickHandler = () => {
		copy(props.component);
		setCopied(true);

		setTimeout(() => {
			setCopied(false);
		}, 3000);
		setToast({ text: "Text copied.", type: "success" });
	};

	return (
		<Tooltip text="Copy" placement="bottom">
			<a href="#" onClick={copyClickHandler}>
				<CopyIcon />
			</a>
		</Tooltip>
	);
};

export default Copy;
