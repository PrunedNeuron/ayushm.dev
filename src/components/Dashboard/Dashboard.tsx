import { Page } from "@zeit-ui/react";
import React from "react";

import DashboardHeader from "./Header/DashboardHeader";
import IconRequestsPane from "./Panes/IconRequestsPane/IconRequestsPane";
import StatsPane from "./Panes/StatsPane/StatsPane";
import { DashboardContainer } from "./Styles";

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

const Dashboard: React.FC<Props> = (props: Props): JSX.Element => {
	return (
		<Page size="large" render="effect-seo">
			<Page.Content>
				<DashboardHeader />
				<DashboardContainer>
					<IconRequestsPane
						iconRequests={props.iconRequests}
						offset={props.offset}
						limit={props.limit}
						pendingCount={props.pendingCount}
						doneCount={props.doneCount}
					/>
					<StatsPane
						iconRequests={props.iconRequests}
						offset={props.offset}
						limit={props.limit}
						pendingCount={props.pendingCount}
						doneCount={props.doneCount}
					/>
				</DashboardContainer>
			</Page.Content>
		</Page>
	);
};

export default Dashboard;
