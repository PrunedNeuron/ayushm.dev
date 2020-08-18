import React from "react";
import { Text, Divider, Breadcrumbs } from "@zeit-ui/react";
import { PostHeading, PostContent, PostContainer } from "./Styles";
import { Home, FileText } from "@zeit-ui/react-icons";
import Link from "next/link";

interface Props {
	frontMatter: FrontMatter;
	content: any;
}

// export default function BlogPost({ frontMatter, content })

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
