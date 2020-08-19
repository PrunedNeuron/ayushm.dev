import styled from "styled-components";

export const Title = styled.p`
	display: block;
	margin: 0;
	padding: 0;
	font-size: 0.75rem;
	max-width: 10rem;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	> a {
		color: inherit;
		&:hover {
			text-decoration: underline;
		}
	}
`;

export const Artist = styled.p`
	display: block;
	margin: 0;
	padding: 0;
	font-size: 0.75rem;
	font-weight: 500;
	max-width: 10rem;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const AlbumArt = styled.div`
	pointer-events: none;
	display: inline-flex;
	width: 2.5rem;
	justify-content: center;
	> image {
		border-radius: 50%;
	}
`;

export const AlbumData = styled.div`
	display: inline-block;
	margin-left: 1rem;
`;

export const SpotifyCard = styled.div<{ dark: boolean }>`
	user-select: none;
	-moz-user-select: none;
	-webkit-user-drag: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	padding: 0.5rem 1rem;
	background-color: ${(props) => (props.dark ? "black" : "#ffffff")};
	border-left: 1px solid #ededed;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	max-width: 15rem;
	z-index: 1;
`;

export const SpotifyIcon = styled.div`
	align-self: center;
	position: relative;
	left: 0.85rem;
	z-index: 2;
	border-radius: 100rem;
`;

export const SpotifyCardContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
