import { useState } from "react";
import * as s from "./Selector.styles";

export interface Selectorable {
	handleTheme: (num: number) => void;
}

function Selector({ handleTheme }: Selectorable) {
	const [knobPos, setKnobPos] = useState(0);

	const handleChange: React.FormEventHandler<HTMLFieldSetElement> = function (
		event
	) {
		const { value, offsetLeft } = event.target as HTMLInputElement;
		handleTheme(parseInt(value));
		setKnobPos(offsetLeft);
	};

	return (
		<s.Selector>
			<span className="label">theme</span>
			<fieldset onChange={(e) => handleChange(e)}>
				<legend>
					<span>1</span>
					<span>2</span>
					<span>3</span>
				</legend>
				<input type="radio" name="theme" value={0} defaultChecked />
				<input type="radio" name="theme" value={1} />
				<input type="radio" name="theme" value={2} />
				<div
					className="knob"
					style={{ "--left": knobPos + "px" } as React.CSSProperties}
				/>
			</fieldset>
		</s.Selector>
	);
}

export default Selector;
