import { Breadcrumbs, Divider, Text } from "@zeit-ui/react";
import { FileText, Home } from "@zeit-ui/react-icons";
import Link from "next/link";
import React from "react";

import { PostContainer, PostContent, PostHeading } from "./Styles";

interface Props {
	frontMatter: FrontMatter;
	content: React.ReactNode;
}

const BlogPost: React.FC<Props> = (props: Props): JSX.Element => {
	return (
		<>
			<PostContainer>
				<PostHeading>
					<Breadcrumbs>
						<Link href="/">
							<Breadcrumbs.Item href="">
								<Home /> Home
							</Breadcrumbs.Item>
						</Link>
						<Link href="/blog">
							<Breadcrumbs.Item href="">
								<FileText /> Blog
							</Breadcrumbs.Item>
						</Link>
					</Breadcrumbs>

					<Text h2>{props.frontMatter.title}</Text>
					<Text type="secondary" size={14} i>
						{props.frontMatter.readingTime.text}
					</Text>
				</PostHeading>
				<Divider />
				<PostContent>
					<Text p>{props.content}</Text>
				</PostContent>
			</PostContainer>
		</>
	);
};

export default BlogPost;
