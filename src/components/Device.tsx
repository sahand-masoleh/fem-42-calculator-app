import * as s from "./Device.styles";
import Selector, { Selectorable } from "./Selector";
import Display from "./Display";
import Keypad from "./Keypad";

interface Deviceable extends Selectorable {}

function Device({ handleTheme }: Deviceable) {
	return (
		<s.Device>
			<s.TopBar>
				<span className="brand">calc</span>
				<Selector handleTheme={handleTheme} />
			</s.TopBar>
			<Display />
			<Keypad />
		</s.Device>
	);
}

export default Device;
