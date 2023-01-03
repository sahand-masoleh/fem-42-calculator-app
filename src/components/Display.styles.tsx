import styled from "styled-components";

export const Display = styled.div`
	background-color: var(--c-display-bg);
	border-radius: 0.5rem;
	border: 2rem solid var(--c-display-bg);
	overflow: hidden;
	display: flex;
	justify-content: flex-end;
	padding: 0.5rem 0;

	& > span {
		display: block;
		color: var(--c-text-disp);
		font-size: 3.5rem;
		font-weight: 700;
		line-height: 3.5rem;
	}
`;
