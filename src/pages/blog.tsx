import React from "react";
import PageLayout from "../components/Layouts/PageLayout";

import BlogPosts from "../components/Body/Blog/BlogPosts";

const Blog: React.FC = (): JSX.Element => {
	return (
		<PageLayout>
			<BlogPosts />
		</PageLayout>
	);
};

export default Blog;
