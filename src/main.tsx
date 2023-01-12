import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

declare global {
	export interface Window {
		env: { IS_ELECTRON: boolean };
		main: { closeAbout: () => void; openLink: (url: string) => void };
	}
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
