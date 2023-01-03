import styled from "styled-components";

export const Device = styled.div`
	max-width: 35rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1.5rem;

	&:focus-visible {
		outline: none;
	}
`;

export const TopBar = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;

	& > .brand {
		font-size: 2rem;
		font-weight: 700;
		color: var(--c-text-disp);
	}

	& > .info {
		border: none;
		background-color: transparent;
		margin-right: auto;
		font-size: 1.25rem;
		font-style: italic;
		font-family: "Times New Roman", Times, serif;
		font-weight: 700;
		color: var(--c-key-tri-bg);
		outline: 0.2rem solid currentColor;
		width: 1.5rem;
		height: 1.5rem;
		display: grid;
		place-items: center;
		line-height: 1.5rem;
		border-radius: 50%;
		cursor: pointer;
	}
`;
