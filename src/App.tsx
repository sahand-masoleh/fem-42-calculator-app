import "./styles/reset.css";
import "./styles/globals.css";
import "./styles/themes.css";

import { useEffect, useRef, useState } from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import * as s from "./App.styles";
import Device from "./components/Device";
import About from "./components/About";

/* PREP */

const THEMES = ["theme-1", "theme-2", "theme-3"];

const { IS_ELECTRON } = window.env || {};

function setInitialThemeState() {
	const savedTheme = window.localStorage.getItem("theme");
	if (savedTheme) {
		return parseInt(savedTheme);
	} else {
		return 0;
	}
}

/* COMPONENT */

function App() {
	const [theme, setTheme] = useState<number>(setInitialThemeState);

	const ref = useRef<HTMLDivElement>(null);
	useEffect(() => {
		focus();
	}, []);

	function focus() {
		ref.current?.focus();
	}

	function handleTheme(num: number) {
		setTheme(num);
		window.localStorage.setItem("theme", num.toString());
	}

	return (
		<s.Div_App className={`app ${THEMES[theme]}`} onClick={focus}>
			{IS_ELECTRON ? (
				// for Electron
				<RouterProvider
					router={createHashRouter([
						{
							path: "/",
							element: (
								<Device handleTheme={handleTheme} theme={theme} ref={ref} />
							),
						},
						{ path: "about", element: <About /> },
					])}
				/>
			) : (
				// for the web
				<Device handleTheme={handleTheme} theme={theme} ref={ref} />
			)}
		</s.Div_App>
	);
}

export default App;
