import { ForwardedRef, forwardRef, useState } from "react";
import * as s from "./Device.styles";
import Selector, { Selectorable } from "./Selector";
import Display from "./Display";
import Keypad from "./Keypad";
import Modal from "./Modal";
import calculator from "../utils/calculator";

const { IS_ELECTRON } = window.env || {};

interface Deviceable extends Selectorable {}

const Device = forwardRef(function (
	{ handleTheme }: Deviceable,
	ref: ForwardedRef<HTMLDivElement>
) {
	const [text, setText] = useState("0");
	const [isShowingModal, setIsShowingModal] = useState(false);

	function handleInput(input: string) {
		let result = "";
		if (input.match(/[0-9]/)) {
			result = calculator.concat(input);
		} else if (input === ".") {
			result = calculator.point();
		} else if (["Backspace", "Delete"].includes(input)) {
			result = calculator.backspace();
		} else if (input === "r") {
			result = calculator.reset();
		} else if (/[+\-\*\/]/.test(input)) {
			result = calculator.operate(input as "+" | "-" | "*" | "/");
		} else {
			result = calculator.equals();
		}
		setText(result);
	}

	const handleKeyDown: React.KeyboardEventHandler = function (event) {
		const { key } = event;
		if (!/^[0-9]|\.|Backspace|Delete|r|[+\-\*\/]|=|Enter$/.test(key)) return;
		handleInput(key);
	};

	function handleShowingModal() {
		const body = document.querySelector("body");

		setIsShowingModal((prev) => {
			// if (!prev) {
			// 	body?.style.overflow = "hidden";
			// } else {
			// 	body?.style.overflow = "unset";
			// }
			return !prev;
		});
	}

	return (
		<>
			<s.Device onKeyDown={handleKeyDown} tabIndex={-1} ref={ref}>
				<s.TopBar>
					<span className="brand">calc</span>
					{!IS_ELECTRON && (
						<button
							className="info"
							onClick={handleShowingModal}
							aria-label="info"
						>
							i
						</button>
					)}
					<Selector handleTheme={handleTheme} />
				</s.TopBar>
				<Display text={text} />
				<Keypad handleInput={handleInput} />
			</s.Device>
			{!IS_ELECTRON && isShowingModal && (
				<Modal handleShowingModal={handleShowingModal} />
			)}
		</>
	);
});

export default Device;
