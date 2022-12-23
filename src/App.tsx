import "./styles/globals.css";
import "./styles/reset.css";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import * as s from "./App.styles";
import Device from "./components/Device";

const THEMES = ["theme-1", "theme-2", "theme-3"];

function App() {
	const [theme, setTheme] = useState<string>("theme-1");

	function handleTheme(num: number) {
		setTheme(THEMES[num]);
	}

	return (
		<s.Div_App className={`app ${theme}`} data-theme={theme}>
			<Device handleTheme={handleTheme} />
		</s.Div_App>
	);
}

export default App;
