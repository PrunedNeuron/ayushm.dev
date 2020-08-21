import styled from "styled-components";

export const AboutContainer = styled.div`
	width: 100vw;
	margin: 0 2rem;
`;

export const AboutBlock = styled.div`
	margin: 1rem;
`;

export const List = styled.ul`
	margin: 0;
`;

export const ListItem = styled.li`
	margin: 0;
	&:before {
		content: "";
	}
`;

export const Description = styled.div`
	display: inline-block;
	margin: 0 1rem;
	padding: 0;

	& > * {
		margin: 0 auto;
	}
`;
