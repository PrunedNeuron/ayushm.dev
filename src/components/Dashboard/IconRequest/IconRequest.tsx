import ClickToSelect from "@mapbox/react-click-to-select";
import { Badge, Spacer, Tooltip, useToasts } from "@zeit-ui/react";
import axios from "axios";
import React, { useState } from "react";

import { API_KEY, BASE_URL } from "../../../lib/constants";
import Layout from "../../Layouts/MotionLayout";
import Code from "../../ui/Code/Code";
import Copy from "../Icons/Copy/Copy";
import Google from "../Icons/Google/Google";
import PlayStore from "../Icons/PlayStore/PlayStore";
import { Card, CardTitle, IconContainer } from "./Styles";
import { CheckOutlineIcon, CheckSolidIcon } from "./Styles";

interface Props {
	name: string;
	component: string;
	url: string;
	requesters: string;
	status: string;
}

const IconRequest: React.FC<Props> = (props: Props): JSX.Element => {
	const [status, setStatus] = useState(props.status);
	const [, setToast] = useToasts();

	const updateRequestStatus = async () => {
		return await axios({
			method: "PUT",
			url: BASE_URL + "/requests/update/component",
			data: {
				component: props.component,
				status: "done"
			},
			headers: {
				"X-API-KEY": API_KEY
			}
		});
	};

	const doneClickHandler = async () => {
		const serverResponse = await updateRequestStatus();
		if (serverResponse.data.status === "SUCCESS") {
			setStatus("done");
			setToast({
				text: "Marked icon request as done.",
				type: "success"
			});
		}
	};

	return (
		<Layout>
			<Card>
				{status === "done" ? (
					<Badge size="mini" type="success">
						COMPLETE
					</Badge>
				) : (
					<Badge size="mini" type="warning">
						PENDING
					</Badge>
				)}
				<Spacer inline x={0.5} />
				<Badge size="mini" type="secondary">
					{props.requesters}{" "}
					{parseInt(props.requesters) > 1
						? "REQUESTERS"
						: "REQUESTER"}
				</Badge>
				<Spacer y={0} />
				<CardTitle>
					<p>{props.name}</p>
				</CardTitle>
				<Spacer y={0.5} />
				<ClickToSelect>
					<Code>{props.component}</Code>
				</ClickToSelect>
				<IconContainer>
					<PlayStore url={props.url} />
					<Spacer inline x={0.5} />
					<Google name={props.name} />
					<Spacer inline x={0.5} />

					<Copy component={props.component} />

					<Spacer inline x={0.5} />
					{status === "done" ? (
						<a>
							<CheckSolidIcon />
						</a>
					) : (
						<Tooltip text="Mark as done" placement="bottom">
							<a href="#" onClick={doneClickHandler}>
								<CheckOutlineIcon />
							</a>
						</Tooltip>
					)}
				</IconContainer>
			</Card>
		</Layout>
	);
};

export default IconRequest;
