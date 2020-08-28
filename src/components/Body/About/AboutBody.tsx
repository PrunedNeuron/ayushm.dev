import artistPalette from "@iconify/icons-twemoji/artist-palette";
import penIcon from "@iconify/icons-twemoji/pen";
import { Icon as Iconify } from "@iconify/react";
import { Github } from "@styled-icons/remix-fill/Github";
import { ReactLogo } from "@styled-icons/simple-icons/ReactLogo";
import { Typescript } from "@styled-icons/simple-icons/Typescript";
import { Divider, Link as ZeitLink, Text } from "@zeit-ui/react";
import Link from "next/link";
import React from "react";

import Icon from "../../ui/Icon/Icon";
import {
	AboutBlock,
	AboutContainer,
	Description,
	List,
	ListItem
} from "./Styles";

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
						. It is written entirely in{" "}
						<ZeitLink href="https://www.typescriptlang.org" color>
							TypeScript
						</ZeitLink>{" "}
						<Icon color="#0766FF">
							<Typescript />
						</Icon>
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
