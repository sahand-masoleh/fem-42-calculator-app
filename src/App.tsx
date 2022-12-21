import "./styles/globals.css";
import "./styles/reset.css";
import { useState } from "react";
import * as s from "./App.styles";

const THEMES = ["theme-1", "theme-2", "theme-3"];

function App() {
	const [theme, setTheme] = useState<string>("theme-1");

	function handleTheme(num: number) {
		setTheme(THEMES[num]);
	}

	return (
		<s.Div_App className={`app ${theme}`} data-theme={theme}>
			Calculator
		</s.Div_App>
	);
}

export default App;
