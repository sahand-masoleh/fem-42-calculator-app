import styled from "styled-components";

export const Keypad = styled.div`
	background-color: var(--c-device-bg);
	padding: 2rem;
	border-radius: 1rem;
	display: grid;
	grid-template-areas:
		". . . delete"
		". . . plus"
		". . . minus"
		"point zero divide multiply"
		"reset reset equals equals";
	grid-template-columns: repeat(4, 1fr);
	gap: 1rem;
`;

export const Button = styled.button`
	border: none;
	display: grid;
	place-items: center;
	padding: 0.5rem;
	border-radius: 0.5rem;
	text-transform: uppercase;

	&.prm {
		font-size: 3rem;
		color: var(--c-text-btn-prm);
		background-color: var(--c-key-prm-bg);
		box-shadow: inset 0 -0.33rem var(--c-key-prm-shdw);
	}
	&.sec {
		font-size: 2rem;
		color: var(--c-text-btn-sec);
		background-color: var(--c-key-sec-bg);
		box-shadow: inset 0 -0.33rem var(--c-key-sec-shdw);
	}
	&.tri {
		font-size: 2rem;
		color: var(--c-text-btn-tri);
		background-color: var(--c-key-tri-bg);
		box-shadow: inset 0 -0.33rem var(--c-key-tri-shdw);
	}

	&#delete {
		grid-area: delete;
	}
	&#plus {
		grid-area: plus;
	}
	&#minus {
		grid-area: minus;
	}
	&#point {
		grid-area: point;
	}
	&#zero {
		grid-area: zero;
	}
	&#divide {
		grid-area: divide;
	}
	&#multiply {
		grid-area: multiply;
	}
	&#reset {
		grid-area: reset;
	}
	&#equals {
		grid-area: equals;
	}
`;
