import * as s from "./Keypad.styles";

interface Keypadable {
	handleInput: (text: string) => void;
}

function Keypad({ handleInput }: Keypadable) {
	const nums = [];
	for (let i = 1; i <= 9; i++) {
		nums.push(
			<Button
				key={i}
				label={i.toString()}
				className="prm"
				id={i.toString()}
				onClick={() => handleInput(i.toString())}
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
				onClick={() => handleInput("0")}
			/>
			<Button
				label="."
				className="prm"
				id="point"
				onClick={() => handleInput(".")}
			/>
			<Button
				label="del"
				className="sec"
				id="delete"
				onClick={() => handleInput("Backspace")}
			/>
			<Button
				label="+"
				className="prm"
				id="plus"
				onClick={() => handleInput("+")}
			/>
			<Button
				label="-"
				className="prm"
				id="minus"
				onClick={() => handleInput("-")}
			/>
			<Button
				label="×"
				className="prm"
				id="multiply"
				onClick={() => handleInput("*")}
			/>
			<Button
				label="÷"
				className="prm"
				id="divide"
				onClick={() => handleInput("/")}
			/>
			<Button
				label="="
				className="tri"
				id="equals"
				onClick={() => handleInput("=")}
			/>
			<Button
				label="reset"
				className="sec"
				id="reset"
				onClick={() => handleInput("r")}
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
	const handleClick: React.MouseEventHandler = function (e) {
		e.stopPropagation();
		onClick();
	};
	return (
		<s.Button className={className} id={id} onClick={handleClick}>
			{label}
		</s.Button>
	);
}
