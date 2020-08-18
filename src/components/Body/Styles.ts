import styled from "styled-components";

export const Intro = styled.p`
	font-size: 2.5rem;
	font-weight: 200;
	margin-bottom: 10rem;
`;

export const Name = styled.span`
	font-weight: 400;
	padding: 0.5rem;
	border-radius: 0.5rem;
	color: white;
	background-size: 200% auto;
	background-image: linear-gradient(
		90deg,
		rgba(0, 255, 184, 1) 28%,
		rgba(0, 255, 244, 1) 100%
	);
	-webkit-transition: all 300ms linear;
	-moz-transition: all 300ms linear;
	-ms-transition: all 300ms linear;
	-o-transition: all 300ms linear;
	transition: all 300ms linear;

	&:hover {
		background-position: right center;
	}
`;

export const Container = styled.div`
	width: 70%;
	display: flex;
	align-items: center;
	margin: 0 auto;
`;
