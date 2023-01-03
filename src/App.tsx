import "./styles/reset.css";
import "./styles/globals.css";
import "./styles/themes.css";

import { useEffect, useRef, useState } from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import * as s from "./App.styles";
import Device from "./components/Device";
import About from "./components/About";

const THEMES = ["theme-1", "theme-2", "theme-3"];

const { IS_ELECTRON } = window.env || {};

function App() {
	const [theme, setTheme] = useState<string>("theme-1");

	const ref = useRef<HTMLDivElement>(null);
	useEffect(() => {
		focus();
	});

	function focus() {
		ref.current?.focus();
	}

	function handleTheme(num: number) {
		setTheme(THEMES[num]);
	}

	return (
		<s.Div_App className={`app ${theme}`} data-theme={theme} onClick={focus}>
			{IS_ELECTRON ? (
				// for Electron
				<RouterProvider
					router={createHashRouter([
						{
							path: "/",
							element: <Device handleTheme={handleTheme} ref={ref} />,
						},
						{ path: "about", element: <About /> },
					])}
				/>
			) : (
				// for the web
				<Device handleTheme={handleTheme} ref={ref} />
			)}
		</s.Div_App>
	);
}

export default App;
