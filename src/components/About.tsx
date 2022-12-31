import * as s from "./About.styles";

declare global {
	interface Window {
		env: {
			closeAbout: () => void;
		};
	}
}

function About() {
	function handleClose() {
		window.env.closeAbout();
	}

	return (
		<s.About>
			<span>This is the about page.</span>
			<button onClick={handleClose}>Ok</button>
		</s.About>
	);
}

export default About;
