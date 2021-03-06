/* eslint-disable @typescript-eslint/ban-ts-comment */
import styled from "styled-components";
import media from "styled-media-query";

export const Links = styled.div`
	margin: 1rem;
	float: right;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	-o-user-select: none;
	user-select: none;
`;

export const ThemeToggleButton = styled.div`
	margin: 1rem;
	float: left;
`;

export const HeadingContainer = styled.div`
	display: inline-block;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	-o-user-select: none;
	user-select: none;
`;

export const HeaderName = styled.span`
	margin: 0 0.125rem;
	padding: 0.25rem 0.5rem;
	color: #666666;

	${//@ts-ignore
	media.lessThan("500px")`
    	visibility: hidden;
		display: none;
  `}
`;

export const HeaderContainer = styled.div`
	width: 100vw;

	${//@ts-ignore
	media.lessThan("435px")`
    	visibility: hidden;
		display: none;
  `}
`;
