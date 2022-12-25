import { useState } from "react";
import * as s from "./Device.styles";
import Selector, { Selectorable } from "./Selector";
import Display from "./Display";
import Keypad from "./Keypad";
import calculator from "../utils/calculator";

interface Deviceable extends Selectorable {}

function Device({ handleTheme }: Deviceable) {
	const [text, setText] = useState("0");

	return (
		<s.Device>
			<s.TopBar>
				<span className="brand">calc</span>
				<Selector handleTheme={handleTheme} />
			</s.TopBar>
			<Display text={text} />
			<Keypad calculator={calculator} setText={setText} />
		</s.Device>
	);
}

export default Device;
