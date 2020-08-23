interface FrontMatter {
	layout?: string;
	title: string;
	date: string;
	description: string;
	tags: string;
	by?: string;
	readingTime: {
		text: string;
	};
	__resourcePath: string;
}

declare module "*.mdx" {
	let MDXComponent: (props: React.ReactNode) => JSX.Element;
	export default MDXComponent;
	export const frontMatter: FrontMatter[];
}
