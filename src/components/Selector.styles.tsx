import styled from "styled-components";

export const Selector = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
	max-width: 8rem;
	flex-grow: 1;

	// label (THEME)
	& > .label {
		font-size: 0.8rem;
		font-weight: 700;
		color: var(--c-text-disp);
		text-transform: uppercase;
	}

	// the selector panel
	& > form > fieldset {
		border: none;
		color: var(--c-device-bg);
		background-color: currentColor;
		border: 0.33rem solid currentColor;
		height: min-content;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		position: relative;
		border-radius: 1rem;

		// labels on the top
		& > legend {
			position: absolute;
			inset: auto 0;
			padding: 0 0.25rem;
			translate: 0 -1.5rem;
			display: flex;
			justify-content: space-between;

			& > span {
				font-size: 0.85rem;
				font-weight: 700;
				width: 1rem;
				height: 1rem;
				display: grid;
				place-items: center;
				color: var(--c-text-disp);
			}
		}

		// the actual radio buttons are hidden
		// we use a moving div because we need animation
		// same size for the actual buttons and the knob using a variable
		--knob-size: 1rem;
		// HTML radio buttons
		& > input {
			appearance: none;
			width: var(--knob-size);
			height: var(--knob-size);
			cursor: pointer;
		}

		// knob moves based on selected radio button
		& > .knob {
			position: absolute;
			height: var(--knob-size);
			width: var(--knob-size);
			background-color: var(--c-key-tri-bg);
			border-radius: 50%;
			left: var(--left);
			transition: left 0.2s linear;
		}
	}
`;
