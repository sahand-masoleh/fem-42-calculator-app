import styled from "styled-components";

export const Download = styled.div`
	& > h2 {
		font-size: 1rem;
		font-weight: 500;
		color: var(--c-text-disp);
		text-align: center;
	}

	& > div {
		display: flex;
		gap: 0.25rem;

		& > a {
			border: none;
			border-radius: 0.25rem;
			flex-grow: 1;
			display: grid;
			place-items: center;
			background-color: var(--c-key-sec-bg);
			font-weight: 600;
			color: var(--c-key-sec-txt);
			text-decoration: none;
		}
	}
`;
