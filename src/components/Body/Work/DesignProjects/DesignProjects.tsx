import React, { useEffect, useState } from "react";
import { DribbbleApi, DribbbleKeys } from "../../../utils/Constants";
import axios from "axios";
import { Img, ImageCard, Cards, ImageCardContainer } from "./Styles";
import { Text, Loading } from "@zeit-ui/react";
import Icon from "../../../ui/Icon/Icon";
import { Dribbble } from "@styled-icons/remix-fill/Dribbble";
import { ArrowRight } from "@styled-icons/heroicons-solid/ArrowRight";

const DesignProjects: React.FC = (): JSX.Element => {
	const {
		// DRIBBBLE_CLIENT_ID,
		// DRIBBBLE_CLIENT_SECRET,
		// DRIBBBLE_CODE,
		DRIBBBLE_ACCESS_TOKEN
	} = DribbbleKeys;

	const SHOTS_PER_PAGE = 10;

	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [shotsFetched, setShotsFetched] = useState(false);
	const [page] = useState(1);
	const [shots, setShots] = useState([]);

	useEffect(() => {
		let didCancel = false;

		async function getShots() {
			const endpoint =
				DribbbleApi +
				`/user/shots?access_token=${DRIBBBLE_ACCESS_TOKEN}&page=${page}&per_page=${SHOTS_PER_PAGE}`;

			try {
				if (!shotsFetched) {
					const response = await axios({
						url: endpoint,
						method: "GET"
					});
					setShotsFetched(true);
					// console.log(response.data);
					if (!didCancel) {
						setShots(response.data);
						if (isLoading) setIsLoading(false);
					}
				}
			} catch (error) {
				console.warn(error.message);
				if (!didCancel) {
					if (isLoading) setIsLoading(false);
					setShotsFetched(true);
					setIsError(true);
				}
			}
		}

		if (!shotsFetched && !didCancel) getShots();

		return () => {
			didCancel = true;
		};
	}, [shots, page, isLoading, isError]);

	if (isLoading) return <Loading size="large">Loading</Loading>;

	return (
		<>
			<Text small i>
				Follow me on Dribbble!{" "}
				<Icon color="#6993FF" size="12px">
					<ArrowRight />
				</Icon>
				<Icon color="#fa238e" size="15px">
					<a
						href="https://dribbble.com/ayush"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Dribbble />
					</a>
				</Icon>
			</Text>
			<Cards>
				{shots.map((shot) => {
					return (
						<ImageCardContainer key={shot.id}>
							<a
								href={shot.html_url}
								target="_blank"
								rel="noreferrer noopener"
							>
								<ImageCard type="lite" width="20rem" hoverable>
									<Img url={shot.images.normal} />
								</ImageCard>
							</a>
						</ImageCardContainer>
					);
				})}
			</Cards>
		</>
	);
};

export default DesignProjects;
