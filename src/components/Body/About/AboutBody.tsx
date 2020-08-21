import React from "react";
import {
	AboutContainer,
	AboutBlock,
	List,
	ListItem,
	Description
} from "./Styles";
import { Text, Divider, Link as ZeitLink } from "@zeit-ui/react";
import Icon from "../../ui/Icon/Icon";
import { ReactLogo } from "@styled-icons/simple-icons/ReactLogo";
import penIcon from "@iconify/icons-twemoji/pen";
import { Icon as Iconify } from "@iconify/react";
import Link from "next/link";
import { Github } from "@styled-icons/remix-fill/Github";
import artistPalette from "@iconify/icons-twemoji/artist-palette";

const AboutBody: React.FC = (): JSX.Element => {
	return (
		<>
			<AboutContainer>
				<AboutBlock>
					<Text h4>About this website</Text>
					<Divider />
					<Text>
						This website was built using{" "}
						<ZeitLink href="https://reactjs.org" color>
							React
						</ZeitLink>{" "}
						<Icon color="#00bfff">
							<ReactLogo />
						</Icon>{" "}
						and{" "}
						<ZeitLink href="https://nextjs.org" color>
							Next.js
						</ZeitLink>
						.
					</Text>
					<Text>
						I used the following libraries, frameworks and tools,
					</Text>
					<List>
						<ListItem>
							<ZeitLink href="https://mdxjs.com" color>
								<Text h6>MDX</Text>
								&nbsp;
							</ZeitLink>
							<Icon>
								<Iconify icon={penIcon} />
							</Icon>
							<Description>
								<Text p>
									to support markdown in jsx to make{" "}
									<Link href="/blog">
										<ZeitLink color>blog posts</ZeitLink>
									</Link>
									, using{" "}
									<ZeitLink
										href="https://github.com/hashicorp/next-mdx-enhanced"
										color
									>
										next-mdx-enhanced
									</ZeitLink>
									<Icon>
										<Github />
									</Icon>
									.
								</Text>
							</Description>
						</ListItem>
						<ListItem>
							<ZeitLink href="http://zeit-ui.co" color>
								<Text h6>Zeit UI</Text>
								&nbsp;
							</ZeitLink>
							<Icon>
								<Iconify icon={artistPalette} />
							</Icon>
							<Description>
								<Text p>
									a beautiful UI library inspired by{" "}
									<ZeitLink href="https://vercel.com" color>
										Vercel
									</ZeitLink>
									&apos;s design language.
								</Text>
							</Description>
						</ListItem>
						<ListItem>
							<ZeitLink
								href="https://github.com/PrunedNeuron/ayushm.dev/blob/master/package.json"
								color
							>
								<Text h6>... and more</Text>
								&nbsp;
							</ZeitLink>
							<Icon>
								<Github />
							</Icon>
						</ListItem>
					</List>
				</AboutBlock>
			</AboutContainer>
		</>
	);
};

export default AboutBody;
