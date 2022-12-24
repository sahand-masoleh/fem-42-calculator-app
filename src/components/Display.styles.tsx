import styled from "styled-components";

export const Display = styled.div`
	background-color: var(--c-display-bg);
	border-radius: 1rem;
	border: 2rem solid var(--c-display-bg);
	overflow: hidden;
	display: flex;
	justify-content: flex-end;

	& > span {
		display: block;
		color: var(--c-text-disp);
		font-size: 3rem;
		line-height: 3rem;
	}
`;
