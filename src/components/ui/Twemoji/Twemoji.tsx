import React, { memo } from "react";
import twemoji from "twemoji";

const Twemoji: React.FC<{ emoji: string }> = ({
	emoji
}: {
	emoji: string;
}): JSX.Element => (
	<span
		dangerouslySetInnerHTML={{
			__html: twemoji.parse(emoji, {
				folder: "svg",
				ext: ".svg"
			})
		}}
	/>
);

export default memo(Twemoji);
