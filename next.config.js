require("dotenv").config();

const withPlugins = require("next-compose-plugins");
const rehypePrism = require("@mapbox/rehype-prism");
const remarkCodeTitles = require("remark-code-titles");
const remarkEmoji = require("remark-emoji");
const readingTime = require("reading-time");

const nextRuntimeDotenv = require("next-runtime-dotenv");

const withConfig = nextRuntimeDotenv({
	// path: '.env',
	public: ["MY_API_URL"],
	server: ["GITHUB_TOKEN"]
});

const mdx = require("next-mdx-enhanced")({
	layoutPath: "src/layouts",
	defaultLayout: true,
	fileExtensions: ["mdx"],
	remarkPlugins: [remarkCodeTitles, remarkEmoji],
	rehypePlugins: [rehypePrism],
	extendFrontMatter: {
		process: (mdxContent, frontMatter) => ({
			wordCount: mdxContent.split(/\s+/gu).length,
			readingTime: readingTime(mdxContent)
		}),
		phase: "prebuild|loader|both"
	}
});

const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "mdx", "md"],
	env: {
		/* DRIBBBLE_CLIENT_ID: process.env.DRIBBBLE_CLIENT_ID,
		DRIBBBLE_CLIENT_SECRET: process.env.DRIBBBLE_CLIENT_SECRET,
		DRIBBBLE_CODE: process.env.DRIBBBLE_CODE,
		DRIBBBLE_ACCESS_TOKEN: process.env.DRIBBBLE_ACCESS_TOKEN */
		DRIBBBLE_CLIENT_ID:
			"f0aa04483590b26c1674d3f09a8d850562550064177766b229128ddca2461293",
		DRIBBBLE_CLIENT_SECRET:
			"bfd97ae4c62be27037a86dffd8590e0e682854f55d23e92cb42072da72c19231",
		DRIBBBLE_CODE:
			"720719e5ffb7bbd221babd66b51fccc9ebd7986b01bcccc7f616bb443d1e72b2",
		DRIBBBLE_ACCESS_TOKEN:
			"12064cf07059b83d9f2dbd347464426b8cf3c226a165026fdde07c3dd408aedf"
	}
};

module.exports = withPlugins([mdx], nextConfig);

/* const withMDX = require("@next/mdx")({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [remarkCodeTitles, remarkEmoji],
		rehypePlugins: [rehypePrism]
	}
});
module.exports = withMDX({
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"]
});
 */
