import supervillainIcon from "@iconify/icons-twemoji/supervillain";
import { Icon as Iconify } from "@iconify/react";
import { Moon } from "@styled-icons/boxicons-solid/Moon";
import { Sunny } from "@styled-icons/ionicons-solid/Sunny";
import { Button, Link as ZeitLink, Text } from "@zeit-ui/react";
import Link from "next/link";
import React, { useContext } from "react";

import ThemeContext from "../Contexts/ThemeContext";
import {
	HeaderContainer,
	HeadingContainer,
	Links,
	ThemeToggleButton
} from "./Styles";
import { HeaderName } from "./Styles";

const Header: React.FC = (): JSX.Element => {
	const theme = useContext(ThemeContext);
	return (
		<>
			<HeaderContainer>
				<ThemeToggleButton>
					<Button
						style={{
							padding: "0",
							height: "2rem",
							width: "2rem",
							borderRadius: "50%"
						}}
						size="small"
						type="abort"
						icon={
							theme.activeTheme === "dark" ? <Sunny /> : <Moon />
						}
						onClick={theme.toggleTheme}
						auto
					></Button>
				</ThemeToggleButton>
				<HeadingContainer className="headingContainer">
					<Text size="1.5rem">
						<Link href="/">
							<a href="#" className="plainLink">
								<Text h4 style={{ fontWeight: 300 }}>
									<Iconify icon={supervillainIcon} />
									<HeaderName className="headingName">
										ayush
									</HeaderName>
								</Text>
							</a>
						</Link>
					</Text>
				</HeadingContainer>
				<Links>
					<Link href="/">
						<ZeitLink block>Home</ZeitLink>
					</Link>
					<Link href="/about">
						<ZeitLink block>About</ZeitLink>
					</Link>
					<Link href="/work">
						<ZeitLink block>Work</ZeitLink>
					</Link>
					<Link href="/blog">
						<ZeitLink block>Blog</ZeitLink>
					</Link>
					<Link href="/contact">
						<ZeitLink block>Contact</ZeitLink>
					</Link>
				</Links>
			</HeaderContainer>
		</>
	);
};

export default Header;
