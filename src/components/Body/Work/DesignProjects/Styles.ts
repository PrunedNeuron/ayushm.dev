import { Card } from "@zeit-ui/react";
import styled from "styled-components";

export const Img = styled.div<{ url: string }>`
	background: url(${(props) => props.url}) no-repeat;
	background-size: cover;
	background-position: center center;
	display: block;
	height: 15rem;
	width: 20rem;
	clear: both;
	border-radius: 1rem;
	-webkit-transition: all 0.25s;
	transition: all 0.25s;
	&:hover {
		-webkit-transition: all 0.25s;
		transition: all 0.25s;
		-webkit-transform: scale(1.05);
		transform: scale(1.05);
	}
`;

export const ImageCard = styled(Card)`
	> * {
		padding: 0 !important;
		height: 15rem;
	}
	border-radius: 1rem !important;
`;

export const ImageCardContainer = styled.div`
	display: inline-block;
	margin: 2rem;
`;

export const Cards = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
`;
