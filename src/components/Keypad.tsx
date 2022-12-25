import { Calculator } from "../utils/calculator";
import * as s from "./Keypad.styles";

interface Keypadable {
	calculator: Calculator;
	setText: (text: string) => void;
}

function Keypad({ calculator, setText }: Keypadable) {
	const nums = [];
	for (let i = 1; i <= 9; i++) {
		nums.push(
			<Button
				key={i}
				label={i.toString()}
				className="prm"
				id={i.toString()}
				onClick={() => setText(calculator.concat(i.toString()))}
			/>
		);
	}

	return (
		<s.Keypad>
			{nums}
			<Button
				label="0"
				className="prm"
				id="zero"
				onClick={() => setText(calculator.concat("0"))}
			/>
			<Button
				label="."
				className="prm"
				id="point"
				onClick={() => setText(calculator.point())}
			/>
			<Button
				label="del"
				className="sec"
				id="delete"
				onClick={() => setText(calculator.backspace())}
			/>
			<Button
				label="+"
				className="prm"
				id="plus"
				onClick={() => setText(calculator.operate("+"))}
			/>
			<Button
				label="-"
				className="prm"
				id="minus"
				onClick={() => setText(calculator.operate("-"))}
			/>
			<Button
				label="×"
				className="prm"
				id="multiply"
				onClick={() => setText(calculator.operate("×"))}
			/>
			<Button
				label="÷"
				className="prm"
				id="divide"
				onClick={() => setText(calculator.operate("÷"))}
			/>
			<Button
				label="="
				className="tri"
				id="equals"
				onClick={() => setText(calculator.equals())}
			/>
			<Button
				label="reset"
				className="sec"
				id="reset"
				onClick={() => setText(calculator.reset())}
			/>
		</s.Keypad>
	);
}

export default Keypad;

interface Buttonable {
	label: string;
	className: string;
	id?: string;
	onClick: () => void;
}

function Button({ label, className, id, onClick }: Buttonable) {
	return (
		<s.Button className={className} id={id} onClick={onClick}>
			{label}
		</s.Button>
	);
}
