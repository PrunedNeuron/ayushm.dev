import { MailOpen } from "@styled-icons/ionicons-solid/MailOpen";
import { Card, Divider, Link, Text } from "@zeit-ui/react";
import React from "react";

import Heading from "../../ui/Heading/Heading";
import Icon from "../../ui/Icon/Icon";
import {
	BodyContainer,
	CardContainer,
	Cards,
	HeadingContainer
} from "./Styles";

const ContactBody: React.FC = (): JSX.Element => {
	return (
		<>
			<BodyContainer>
				<HeadingContainer>
					<Heading>
						<Text h2>Contact me</Text>
					</Heading>
				</HeadingContainer>
				<Divider />
				<Cards>
					<CardContainer>
						<Card>
							<Icon color="#0766ff">
								<MailOpen />
							</Icon>
							<Link
								color
								target="_blank"
								href="mailto:am@ayushm.dev"
								rel="noopener noreferrer"
								style={{
									fontFamily: "Menlo, monospace",
									fontSize: "0.8rem"
								}}
							>
								am@ayushm.dev
							</Link>
						</Card>
					</CardContainer>
				</Cards>
			</BodyContainer>
		</>
	);
};

export default ContactBody;
