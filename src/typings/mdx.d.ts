interface FrontMatter {
	layout?: string;
	title: string;
	date: string;
	description: string;
	tags: string;
	by?: string;
	__resourcePath: string;
}

declare module "*.mdx" {
	let MDXComponent: (props: any) => JSX.Element;
	export default MDXComponent;
	export const frontMatter: FrontMatter[];
}
