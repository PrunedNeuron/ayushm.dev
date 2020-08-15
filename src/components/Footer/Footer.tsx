import React from "react";
import { Text, Divider, Spacer } from "@zeit-ui/react";
import { LogoReact } from "@styled-icons/ionicons-solid/LogoReact";
import { LogoLinkedin } from "@styled-icons/ionicons-solid/LogoLinkedin";
import { LogoDribbble } from "@styled-icons/ionicons-solid/LogoDribbble";
import Icon from "../ui/Icon/Icon";
import { FooterText, FooterContainer, FooterTextContainer } from "./Styles";
// import { Copyright } from "@styled-icons/material-twotone/Copyright";
import { Copyright } from "@styled-icons/remix-fill/Copyright";
import { OpenSource } from "@styled-icons/remix-fill/OpenSource";
import { Spotify } from "@styled-icons/remix-fill/Spotify";
import { Dribbble } from "@styled-icons/remix-fill/Dribbble";
import { LinkedinBox } from "@styled-icons/remix-fill/LinkedinBox";
import { Reactjs } from "@styled-icons/remix-fill/Reactjs";
import { Github } from "@styled-icons/remix-fill/Github";
import NowPlaying from "../NowPlaying/NowPlaying";
export default function Footer() {
	return (
		<>
			<FooterContainer>
				<FooterTextContainer left>
					<FooterText>
						<Icon color="grey">
							<a
								href="https://opensource.org"
								target="_blank"
								rel="noopener noreferrer"
							>
								<OpenSource />
							</a>
						</Icon>
					</FooterText>
				</FooterTextContainer>
				<FooterTextContainer left>
					<FooterText icons>
						<Icon color="#fa238e" size="24px" hoverable>
							<a
								href="https://dribbble.com/ayush"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Dribbble />
							</a>
						</Icon>{" "}
						<Icon color="#006eff" size="24px" hoverable>
							<a
								href="https://www.linkedin.com/in/hsuay"
								target="_blank"
								rel="noopener noreferrer"
							>
								<LinkedinBox />
							</a>
						</Icon>{" "}
						<Icon color="#33f289" size="24px" hoverable>
							<a
								href="https://open.spotify.com/user/3gjvv8nvwtb8n5il2tu4fbxbx"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Spotify />
							</a>
						</Icon>{" "}
						<Icon color="#4f4f4f" size="24px" hoverable>
							<a
								href="https://github.com/PrunedNeuron"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Github />
							</a>
						</Icon>
					</FooterText>
				</FooterTextContainer>

				<FooterTextContainer>
					<FooterText>
						<NowPlaying />
					</FooterText>
				</FooterTextContainer>
			</FooterContainer>
		</>
	);
}
