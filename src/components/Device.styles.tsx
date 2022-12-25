import styled from "styled-components";

export const Device = styled.div`
	max-width: 35rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
`;

export const TopBar = styled.div`
	display: flex;
	justify-content: space-between;

	& > .brand {
		font-size: 2rem;
		color: var(--c-text-disp);
	}
`;

export const Keypad = styled.div``;
