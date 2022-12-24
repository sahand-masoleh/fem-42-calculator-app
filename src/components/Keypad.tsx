import React from "react";
import * as s from "./Keypad.styles";

function Keypad() {
	const nums = [];
	for (let i = 1; i <= 9; i++) {
		nums.push(
			<Button label={i.toString()} className="prm" id={i.toString()} />
		);
	}

	return (
		<s.Keypad>
			{nums}
			<Button label="0" className="prm" id="zero" />
			<Button label="." className="prm" id="point" />
			<Button label="del" className="sec" id="delete" />
			<Button label="+" className="prm" id="plus" />
			<Button label="-" className="prm" id="minus" />
			<Button label="x" className="prm" id="multiply" />
			<Button label="/" className="prm" id="divide" />
			<Button label="=" className="tri" id="equals" />
			<Button label="reset" className="sec" id="reset" />
		</s.Keypad>
	);
}

export default Keypad;

interface Buttonable {
	label: string;
	className: string;
	id?: string;
}

function Button({ label, className, id }: Buttonable) {
	return (
		<s.Button className={className} id={id} aria-label={id}>
			{label}
		</s.Button>
	);
}
