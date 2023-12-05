import { render } from "@testing-library/react";
import React from "react";
import { useIsOnline } from "./use-is-online-hook";

export const DefaultComponent = (props: any) => {
	const { isOnline, isLoading, error } = useIsOnline(props);
	return (
		<div>
			<a href="https://github.com/sindresorhus/is-online">
				See is-online on GitHub for more information.
			</a>
			<p>isOnline: {isOnline ? "true" : "false"}</p>
			<p>isLoading: {isLoading ? "true" : "false"}</p>
			<p>error: {error && String(error)}</p>
		</div>
	);
};

describe("is-online-hook", () => {
	test("no options", () => {
		render(<DefaultComponent />);
	});
});
