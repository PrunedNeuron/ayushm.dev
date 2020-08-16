import styled from "styled-components";

type FooterTextContainerProps = {
	left?: boolean;
	center?: boolean;
	right?: boolean;
};

export const FooterText = styled.div<{ icons?: boolean }>`
	word-spacing: ${(props) => (props.icons ? "0.5rem" : undefined)};
`;

export const FooterTextContainer = styled.div<FooterTextContainerProps>`
	justify-self: ${(props) =>
		props.center
			? "center"
			: props.left
			? "flex-start"
			: props.right
			? "flex-end"
			: ""};
	align-items: center;
`;

export const FooterContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-top: 1px solid #ededed;
	padding: 0.5rem;
	min-height: 4rem;
`;
