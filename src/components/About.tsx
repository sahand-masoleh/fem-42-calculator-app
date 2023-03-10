import React from "react";
import * as s from "./About.styles";

const { IS_ELECTRON } = window.env || {};

export interface Aboutable {
	handleShowingModal?: () => void;
}

function About({ handleShowingModal }: Aboutable) {
	function handleClose() {
		if (IS_ELECTRON) {
			window.main.closeAbout();
		} else {
			handleShowingModal && handleShowingModal();
		}
	}

	const handleClickLink: React.MouseEventHandler = function (event) {
		event.preventDefault();
		const target = event.target as HTMLLinkElement;
		const url = target.getAttribute("href");
		window.main.openLink(url || "");
	};

	return (
		<s.About>
			<h1>Cross-platform Calculator</h1>
			<p>Hi!</p>
			<p>
				This is a solution to the{" "}
				<a
					href="https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29"
					onClick={handleClickLink}
				>
					Calculator App challenge from frontendmontor.io
				</a>
				, available as a web app and a desktop app.
			</p>
			<p>
				Since the app is relatively small, all the versions share the same code
				base. You can check out the code on my github repository.
			</p>
			<h2>Tech Stack</h2>
			<ul>
				<li>TypeScript</li>
				<li>React.js</li>
				<li>Electron.js</li>
				<li>Styled Components</li>
			</ul>
			<a
				href="https://github.com/sahand-masoleh/fem-42-calculator-app"
				onClick={handleClickLink}
			>
				Github repository
			</a>
			<a href="https://sahandmasoleh.com/" onClick={handleClickLink}>
				My portfolio
			</a>
			<button onClick={handleClose}>Ok</button>
		</s.About>
	);
}

export default About;
