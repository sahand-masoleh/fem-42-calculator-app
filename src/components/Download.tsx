import * as s from "./Download.styles";

function Download() {
	return (
		<s.Download>
			<h2>Download the desktop version:</h2>
			<div>
				<a download href="/calculator-app_amd64.deb">
					.deb (Linux amd64)
				</a>
			</div>
		</s.Download>
	);
}

export default Download;
