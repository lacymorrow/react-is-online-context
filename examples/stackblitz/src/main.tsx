import React from "react";
import ReactDOM from "react-dom/client";
import { IsOnlineContextProvider } from "react-is-online-context";
import { Status } from "./Status";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<IsOnlineContextProvider timeout={5000}>
			<Status />
		</IsOnlineContextProvider>
	</React.StrictMode>,
);
