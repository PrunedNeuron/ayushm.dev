import { Pagination } from "@zeit-ui/react";
import {
	ChevronLeftCircleFill,
	ChevronRightCircleFill
} from "@zeit-ui/react-icons";
import { useRouter } from "next/router";
import React from "react";

import IconRequests from "../../IconRequests/IconRequests";
import {
	IconRequestsContainer,
	IconRequestsPaneContainer,
	PaginationContainer
} from "./Styles";

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

const IconRequestsPane: React.FC<Props> = (props: Props): JSX.Element => {
	const router = useRouter();
	const handlePagination = (page: number) => {
		router.push(
			"/dashboard/[offset]/[limit]",
			`/dashboard/${(page - 1) * props.limit}/${props.limit}`
		);
	};
	return (
		<IconRequestsPaneContainer>
			<>
				<IconRequestsContainer>
					<IconRequests
						iconRequests={props.iconRequests}
						offset={props.offset}
						limit={props.limit}
						pendingCount={props.pendingCount}
						doneCount={props.doneCount}
					/>
				</IconRequestsContainer>
				{props.limit === 0 ? (
					<></>
				) : (
					<PaginationContainer>
						<Pagination
							size="small"
							count={Math.ceil(props.pendingCount / props.limit)}
							onChange={handlePagination}
						>
							<Pagination.Next>
								<ChevronRightCircleFill />
							</Pagination.Next>
							<Pagination.Previous>
								<ChevronLeftCircleFill />
							</Pagination.Previous>
						</Pagination>
					</PaginationContainer>
				)}
			</>
		</IconRequestsPaneContainer>
	);
};

export default IconRequestsPane;
