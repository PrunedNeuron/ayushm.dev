import React from "react";

import BlogPost from "../components/Body/Blog/Post/BlogPost";
import PageLayout from "../components/Layouts/PageLayout";

interface Props {
	children: React.ReactNode;
	frontMatter: FrontMatter;
}

export default function Layout({ children, frontMatter }: Props): JSX.Element {
	return (
		<PageLayout>
			<BlogPost frontMatter={frontMatter} content={children} />
		</PageLayout>
	);
}
