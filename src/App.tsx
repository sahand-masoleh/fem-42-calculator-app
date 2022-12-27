import "./styles/globals.css";
import "./styles/reset.css";
import "./styles/themes.css";
import { useEffect, useRef, useState } from "react";
import * as s from "./App.styles";
import Device from "./components/Device";

const THEMES = ["theme-1", "theme-2", "theme-3"];

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
			<Device handleTheme={handleTheme} ref={ref} />
		</s.Div_App>
	);
}

export default App;
