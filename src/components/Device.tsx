import * as s from "./Device.styles";
import Selector, { Selectorable } from "./Selector";

interface Deviceable extends Selectorable {}

function Device({ handleTheme }: Deviceable) {
	return (
		<s.Device>
			<s.TopBar>
				<span className="brand">calc</span>
				<Selector handleTheme={handleTheme} />
			</s.TopBar>
			<s.Display></s.Display>
			<s.Keypad></s.Keypad>
		</s.Device>
	);
}

export default Device;
