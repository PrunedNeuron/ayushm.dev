import styled from "styled-components";

export const Title = styled.p`
	display: block;
	margin: 0;
	padding: 0;
	font-size: 0.75rem;
	color: black;
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
	color: #949494;
	max-width: 10rem;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const AlbumArt = styled.div`
	pointer-events: none;
	display: inline-block;
	width: 40px;
`;

export const AlbumData = styled.div`
	display: inline-block;
	margin: 0 1rem;
`;

export const SpotifyCard = styled.div`
	user-drag: none;
	user-select: none;
	-moz-user-select: none;
	-webkit-user-drag: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	padding: 0.5rem;
	background-color: #ffffff;
	border-radius: 0.5rem;
	border: 1px solid #ececec;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	max-width: 15rem;
`;

export const SpotifyIcon = styled.div`
	align-self: flex-start;
	margin: -1.25rem;
`;
