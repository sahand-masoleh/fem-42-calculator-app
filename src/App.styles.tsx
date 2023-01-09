import styled from "styled-components";

export const Div_App = styled.div`
	min-height: 100%;
	padding: 1rem;
	background-color: var(--c-main-bg);
	display: grid;
	grid-template-rows: 1fr auto;
	place-items: center;
	transition: background-color var(--transition-duration) linear;
`;
