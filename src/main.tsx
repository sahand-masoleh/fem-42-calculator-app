import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import About from "./components/About";

declare global {
	interface Window {
		env: { IS_ELECTRON: boolean };
	}
}

const { IS_ELECTRON } = window.env || {};

const router = createHashRouter([
	{
		path: "/",
		element: <App />,
	},
	{ path: "about", element: <About /> },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		{IS_ELECTRON ? <RouterProvider router={router} /> : <App />}
	</React.StrictMode>
);
