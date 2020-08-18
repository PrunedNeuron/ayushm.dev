import React from "react";
import { Tooltip, useToasts } from "@zeit-ui/react";
import { CheckSolidIcon, CheckOutlineIcon } from "./Styles";

interface Props {
	status: string;
}

const Check: React.FC<Props> = (props: Props): JSX.Element => {
	const [, setToast] = useToasts();

	const doneClickHandler = () => {
		// await updateRequestStatus();
		setToast({ text: "Marked icon request as done.", type: "success" });
	};

	return status === "done" ? (
		<a>
			<CheckSolidIcon />
		</a>
	) : (
		<Tooltip text="Mark as done" placement="bottom">
			<a href="#" onClick={doneClickHandler}>
				<CheckOutlineIcon />
			</a>
		</Tooltip>
	);
};

export default Check;
