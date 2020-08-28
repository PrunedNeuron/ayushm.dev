import { Divider, Page } from "@zeit-ui/react";
import { LogOut } from "@zeit-ui/react-icons";
import React from "react";

import {
	HeaderContainer,
	LogoText,
	LogoTextContainer,
	PillsIcon,
	SignOutButton
} from "./Styles";
import { Greeting } from "./Styles";

const DashboardHeader: React.FC = (): JSX.Element => {
	const signOutHandler = () => {
		localStorage.clear();
		window.location.replace("/");
	};

	return (
		<Page.Header>
			<HeaderContainer>
				<Greeting>Welcome, Ayush.</Greeting>
				<LogoTextContainer>
					<LogoText>Lithium Dashboard</LogoText>
				</LogoTextContainer>
				<SignOutButton
					type="success"
					iconRight={<LogOut />}
					onClick={signOutHandler}
					shadow
					auto
				>
					Sign out
				</SignOutButton>
			</HeaderContainer>
			<Divider>
				<PillsIcon />
			</Divider>
		</Page.Header>
	);
};

export default DashboardHeader;
