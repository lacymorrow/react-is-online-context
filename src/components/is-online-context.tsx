// We allow the timeout and ipVersion to be passed in as props to be passed to is-online

import React from "react";
import { IsOnlineProps, useIsOnline } from "./use-is-online-hook";
interface IsOnlineContextType {
	isOnline: boolean;
	isLoading: boolean;
	error: Error | null;
}

export const IsOnlineContext = React.createContext<IsOnlineContextType>({
	isOnline: false,
	isLoading: true,
	error: null,
});

export function IsOnlineContextProvider({
	children,
	timeout,
	ipVersion,
}: {
	children?: React.ReactNode;
} & IsOnlineProps) {
	const options = {
		...(timeout ? { timeout: timeout } : {}),
		...(ipVersion ? { ipVersion: ipVersion } : {}),
	};

	const value = useIsOnline(options);
	return (
		<IsOnlineContext.Provider value={value}>
			{children}
		</IsOnlineContext.Provider>
	);
}
