import React, { useContext } from "react";
import { Button, Link as ZeitLink, Text } from "@zeit-ui/react";
import {
	Links,
	ThemeToggleButton,
	HeadingContainer,
	HeaderContainer
} from "./Styles";
import Link from "next/link";
import { Sunny } from "@styled-icons/ionicons-solid/Sunny";
import { Moon } from "@styled-icons/boxicons-solid/Moon";
import ThemeContext from "../Contexts/ThemeContext";
import Twemoji from "../ui/Twemoji/Twemoji";

const Header: React.FC = (): JSX.Element => {
	const theme = useContext(ThemeContext);
	return (
		<>
			<HeaderContainer>
				<ThemeToggleButton>
					<Button
						size="small"
						type="abort"
						icon={
							theme.activeTheme == "dark" ? <Sunny /> : <Moon />
						}
						onClick={theme.toggleTheme}
						auto
					></Button>
				</ThemeToggleButton>
				<HeadingContainer>
					<Text size="1.5rem">
						<Link href="/">
							<a className="plainLink">
								<Text h4 style={{ fontWeight: 300 }}>
									<Twemoji emoji="🦹" />
									&nbsp; ayush
								</Text>
							</a>
						</Link>
					</Text>
				</HeadingContainer>
				<Links>
					<Link href="/">
						<ZeitLink block>Home</ZeitLink>
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
				{/* <hr /> */}
			</HeaderContainer>
		</>
	);
};

export default Header;
