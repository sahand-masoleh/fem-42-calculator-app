import { createPortal } from "react-dom";
import About, { Aboutable } from "./About";
import * as s from "./Modal.styles";

interface Modalable extends Aboutable {}

function Modal({ handleShowingModal }: Modalable) {
	return createPortal(
		<s.Modal>
			<About handleShowingModal={handleShowingModal} />
		</s.Modal>,
		document.querySelector(".app") as HTMLElement
	);
}

export default Modal;
