import React, { useState } from "react";
import { LiveEditor } from "react-live";
import { useTheme, useToasts, Row, Col, useClipboard } from "@zeit-ui/react";
import CopyIcon from "@zeit-ui/react-icons/copy";
import RightIcon from "@zeit-ui/react-icons/chevronRight";

interface Props {
	heading: string;
	code: string;
}

const Editor: React.FC<Props> = ({ heading, code }) => {
	const theme = useTheme();
	const { copy } = useClipboard();
	const [visible, setVisible] = useState(false);
	const [, setToast] = useToasts();
	const clickHandler = (event: React.MouseEvent) => {
		event.stopPropagation();
		event.preventDefault();
		setVisible(!visible);
	};

	const copyHandler = (event: React.MouseEvent) => {
		event.stopPropagation();
		event.preventDefault();
		copy(code);
		setToast({ text: "Copied!", type: "success" });
	};

	return (
		<div className="editor">
			<details open={visible}>
				<summary onClick={clickHandler}>
					<Row
						justify="space-between"
						align="middle"
						style={{ height: "100%", width: "100%" }}
					>
						<Col className="action">
							<span className="arrow">
								<RightIcon size={16} />
							</span>
							<span>{heading}</span>
						</Col>
						<Col className="action">
							{visible && (
								<span
									className="copy"
									onClick={copyHandler}
									title={"Copy Code"}
								>
									<CopyIcon size={18} />
								</span>
							)}
						</Col>
					</Row>
				</summary>
				<div className="area">
					<LiveEditor />
				</div>
			</details>

			<style jsx>{`
				.editor {
					border-bottom-left-radius: ${theme.layout.radius};
					border-bottom-right-radius: ${theme.layout.radius};
				}

				details {
					transition: all 0.2s ease;
					overflow: hidden;
					border-bottom-left-radius: ${theme.layout.radius};
					border-bottom-right-radius: ${theme.layout.radius};
				}

				summary {
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 0 ${theme.layout.gap};
					color: ${theme.palette.accents_5};
					height: 2.875rem;
					list-style: none;
					user-select: none;
					outline: none;
				}

				summary :global(svg) {
					cursor: pointer;
				}

				summary :global(.action) {
					width: auto;
					display: flex;
					align-items: center;
					font-size: 0.8rem;
				}

				.area {
					position: relative;
					box-sizing: border-box;
					white-space: pre;
					font-family: ${theme.font.mono};
					color: ${theme.palette.foreground};
					background-color: ${theme.palette.background};
					font-size: 1em;
					overflow: hidden;
					border-top: 1px solid ${theme.palette.accents_2};
					padding: ${theme.layout.gapHalf};
				}

				.arrow {
					transition: all 0.2s ease;
					transform: rotate(${visible ? 90 : 0}deg);
					display: inline-flex;
					align-items: center;
					width: 1rem;
					height: 1rem;
					margin-right: 0.5rem;
				}

				.copy {
					display: inline-flex;
					align-items: center;
					color: ${theme.palette.accents_4};
					transition: color 0.2s ease;
				}

				.copy:hover {
					color: ${theme.palette.accents_6};
				}
			`}</style>
		</div>
	);
};

export default Editor;