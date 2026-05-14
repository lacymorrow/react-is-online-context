import { useContext } from "react";
import { IsOnlineContext } from "react-is-online-context";

export function Status() {
	const { isOnline, isLoading, error } = useContext(IsOnlineContext);

	let pill;
	if (isLoading) pill = <span className="status loading">Checking…</span>;
	else if (error) pill = <span className="status offline">Error: {error.message}</span>;
	else if (isOnline) pill = <span className="status online">● Online</span>;
	else pill = <span className="status offline">○ Offline</span>;

	return (
		<div className="card">
			<h1>react-is-online-context</h1>
			<p style={{ marginTop: 0, color: "#a1a1aa" }}>
				Reliable online / offline detection for React, powered by{" "}
				<a style={{ color: "#5eead4" }} href="https://github.com/sindresorhus/is-online">
					is-online
				</a>.
			</p>
			{pill}
			<div className="meta">
				Try toggling your network in DevTools (Application → Service Workers → Offline).{" "}
				<code>navigator.onLine</code> would lie about captive portals — this won't.
			</div>
		</div>
	);
}
