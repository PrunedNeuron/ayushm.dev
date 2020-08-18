import React, { memo } from "react";
import twemoji from "twemoji";
import { Emoji } from "./Styles";

const Twemoji: React.FC<{ emoji: string }> = ({
	emoji
}: {
	emoji: string;
}): JSX.Element => (
	<Emoji>
		<span
			dangerouslySetInnerHTML={{
				__html: twemoji.parse(emoji, {
					folder: "svg",
					ext: ".svg"
				})
			}}
		/>
	</Emoji>
);

export default memo(Twemoji);
