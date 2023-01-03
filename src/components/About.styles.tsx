import styled from "styled-components";

const { IS_ELECTRON } = window.env || {};

export const About = styled.div`
	/* SHARED BETWEEN ELECTRON AND WEB */
	background-color: var(--c-main-bg);
	max-height: 48rem;
	max-width: 32rem;
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	color: var(--c-text-disp);

	& > h1 {
		font-size: 2rem;
		font-weight: 700;
		margin-bottom: 1rem;
	}

	& > p {
		margin-bottom: 1rem;
		font-size: 1.25rem;

		& > a {
			color: inherit;
		}
	}

	& > h2 {
		font-size: 1.5rem;
		font-weight: 600;
	}

	& > ul {
		list-style-position: inside;
		margin-bottom: 1rem;
	}

	& > a {
		display: block;
		font-size: 1.25rem;
		color: inherit;
		margin-bottom: 1rem;
	}

	& > button {
		margin-top: auto;
		font-size: 2rem;
		font-weight: 700;
		background-color: transparent;
		border: none;
		color: inherit;
		cursor: pointer;

		&:hover {
			color: var(--c-key-tri-bg);
		}
	}

	/* FOR THE WEB */
	// if environment is not Electron we need to style out own window
	${!IS_ELECTRON &&
	`
		padding: 1.5rem;
		border-radius: 1rem;
		outline: 0.25rem solid var(--c-key-tri-bg);
	`}
`;
