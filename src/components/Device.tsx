import { ForwardedRef, forwardRef, useEffect, useRef, useState } from "react";
import * as s from "./Device.styles";
import Selector, { Selectorable } from "./Selector";
import Display from "./Display";
import Keypad from "./Keypad";
import calculator from "../utils/calculator";

interface Deviceable extends Selectorable {}

const Device = forwardRef(function (
	{ handleTheme }: Deviceable,
	ref: ForwardedRef<HTMLDivElement>
) {
	const [text, setText] = useState("0");

	function handleInput(input: string) {
		let result = "";
		if (input.match(/[0-9]/)) {
			result = calculator.concat(input);
		} else if (input === ".") {
			result = calculator.point();
		} else if (input === "Backspace") {
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

	return (
		<s.Device onKeyDown={handleKeyDown} tabIndex={-1} ref={ref}>
			<s.TopBar>
				<span className="brand">calc</span>
				<Selector handleTheme={handleTheme} />
			</s.TopBar>
			<Display text={text} />
			<Keypad handleInput={handleInput} />
		</s.Device>
	);
});

export default Device;
