import styled from "styled-components";

export const Modal = styled.div`
	position: fixed;
	inset: 0;
	display: grid;
	place-items: center;
	padding: 1.5rem;
	backdrop-filter: blur(10px);
	z-index: 1000;
	animation: appear var(--transition-duration) linear;

	@keyframes appear {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}
`;
