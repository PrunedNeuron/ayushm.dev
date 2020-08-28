import React from "react";

import BlogPosts from "../components/Body/Blog/BlogPosts";
import PageLayout from "../components/Layouts/PageLayout";

const Blog: React.FC = (): JSX.Element => {
	return (
		<PageLayout>
			<BlogPosts />
		</PageLayout>
	);
};

export default Blog;
