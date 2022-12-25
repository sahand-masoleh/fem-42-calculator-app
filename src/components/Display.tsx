import * as s from "./Display.styles";

interface Displayable {
	text: string;
}

function Display({ text }: Displayable) {
	return (
		<s.Display>
			<span>{text}</span>
		</s.Display>
	);
}

export default Display;
