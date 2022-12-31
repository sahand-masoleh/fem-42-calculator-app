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
	gap: min(1.5rem, 5vw);
`;

export const Button = styled.button`
	border: none;
	display: grid;
	place-items: center;
	height: 4rem;
	border-radius: 0.5rem;
	text-transform: uppercase;
	position: relative;
	cursor: pointer;
	z-index: 1;
	overflow: hidden;
	background-color: transparent;
	border-bottom: 0.25rem solid;
	box-sizing: content-box;

	&::before {
		content: "";
		position: absolute;
		inset: 0;
		z-index: -1;
	}

	&:hover::before {
		filter: brightness(1.5);
	}

	&:active {
		border-width: 0.15rem;
		translate: 0 0.1rem;
	}

	&.prm {
		font-size: 3rem;
		color: var(--c-text-btn-prm);
		border-color: var(--c-key-prm-shdw);

		&::before {
			background-color: var(--c-key-prm-bg);
		}
	}
	&.sec {
		font-size: 1.5rem;
		color: var(--c-text-btn-sec);
		border-color: var(--c-key-sec-shdw);

		&::before {
			background-color: var(--c-key-sec-bg);
		}
	}
	&.tri {
		font-size: 2rem;
		color: var(--c-text-btn-tri);
		border-color: var(--c-key-tri-shdw);

		&::before {
			background-color: var(--c-key-tri-bg);
		}
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
