import { useEffect, useRef, useState } from "react";
import * as s from "./Selector.styles";

export interface Selectorable {
	handleTheme: (num: number) => void;
	theme: number;
}

function Selector({ handleTheme, theme }: Selectorable) {
	const ref = useRef<HTMLFormElement>(null);
	const [knobPos, setKnobPos] = useState<number | null>(null);

	// get the position of the currently selected radio button
	useEffect(() => {
		const children = Array.from(ref.current?.elements || []);
		if (!children.length) {
			setKnobPos(0);
		} else {
			const currentChoice = children.filter(
				(child) => child.tagName === "INPUT"
			)[theme] as HTMLInputElement;
			setKnobPos(currentChoice?.offsetLeft);
		}
	}, []);

	const handleChange: React.FormEventHandler<HTMLFormElement> = function (
		event
	) {
		const { value, offsetLeft } = event.target as HTMLInputElement;
		handleTheme(parseInt(value));
		setKnobPos(offsetLeft);
	};

	return (
		<s.Selector>
			<span className="label">theme</span>
			<form onChange={handleChange} ref={ref}>
				<fieldset>
					<legend>
						<span>1</span>
						<span>2</span>
						<span>3</span>
					</legend>
					<input
						type="radio"
						name="theme"
						value={0}
						defaultChecked={theme === 0}
					/>
					<input
						type="radio"
						name="theme"
						value={1}
						defaultChecked={theme === 1}
					/>
					<input
						type="radio"
						name="theme"
						value={2}
						defaultChecked={theme === 2}
					/>
					{/* do not show the knob initially befor the useEffect sets in,
					otherwise there will be an animation from zero to current position */}
					{knobPos !== null && (
						<div
							className="knob"
							style={{ "--left": knobPos + "px" } as React.CSSProperties}
						/>
					)}
				</fieldset>
			</form>
		</s.Selector>
	);
}

export default Selector;
