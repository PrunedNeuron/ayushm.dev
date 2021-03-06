import { Progress, Spacer } from "@zeit-ui/react";
import React from "react";

import { Card, ProgressContainer, StatsPaneContainer } from "./Styles";

interface Props {
	iconRequests: {
		name: string;
		component: string;
		url: string;
		requesters: string;
		status: string;
	}[];
	offset: number;
	limit: number;
	pendingCount: number;
	doneCount: number;
}

const StatsPane: React.FC<Props> = (props: Props): JSX.Element => {
	const totalCount = props.doneCount + props.pendingCount;

	return (
		<StatsPaneContainer>
			<Card>
				<ProgressContainer>
					<p>Completed</p>
					<Spacer x={1} />
					<p style={{ color: "#696969" }}>{props.doneCount}</p>
					<Spacer x={1} />
					<Progress
						type="success"
						value={props.doneCount}
						max={totalCount}
					/>
					<Spacer x={1} />
					<p style={{ color: "#696969" }}>{totalCount}</p>
				</ProgressContainer>
				<ProgressContainer>
					<p>Pending</p>
					<Spacer x={1} />
					<p style={{ color: "#696969" }}>{props.pendingCount}</p>
					<Spacer x={1} />
					<Progress
						type="warning"
						value={props.pendingCount}
						max={totalCount}
					/>
					<Spacer x={1} />
					<p style={{ color: "#696969" }}>{totalCount}</p>
				</ProgressContainer>
			</Card>
		</StatsPaneContainer>
	);
};

export default StatsPane;
