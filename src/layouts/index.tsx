import React from "react";
import PageLayout from "../components/Layouts/PageLayout";
import BlogPost from "../components/Body/Blog/Post/BlogPost";

export default function Layout(frontMatter: any) {
	return ({ children: content }) => (
		<PageLayout>
			<BlogPost frontMatter={frontMatter} content={content} />
		</PageLayout>
	);
}
