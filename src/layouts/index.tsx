/* eslint-disable react/display-name */
import React from "react";
import PageLayout from "../components/Layouts/PageLayout";
import BlogPost from "../components/Body/Blog/Post/BlogPost";

export default function Layout(frontMatter: FrontMatter) {
	return ({ children }): JSX.Element => (
		<PageLayout>
			<BlogPost frontMatter={frontMatter} content={children} />
		</PageLayout>
	);
}
