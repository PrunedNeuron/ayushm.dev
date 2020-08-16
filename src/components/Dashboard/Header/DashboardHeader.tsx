import React from "react";
import {
	SignOutButton,
	LogoTextContainer,
	LogoText,
	HeaderContainer,
	PillsIcon
} from "./Styles";
import { LogOut } from "@zeit-ui/react-icons";
import { Page, Divider } from "@zeit-ui/react";
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
