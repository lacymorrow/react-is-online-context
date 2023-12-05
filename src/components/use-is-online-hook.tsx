import isOnline from "is-online";
import React, { useEffect, useMemo } from "react";

export interface IsOnlineProps {
	timeout?: number;
	ipVersion?: 4 | 6;
}

// Provide a hook to check if the user is online, this should not be used, since context is the "right" way to do this
// However, we provide this for those who don't know any better.
export function useIsOnline(props?: IsOnlineProps) {
	const [online, setOnline] = React.useState<boolean>(false);
	const [isLoading, setIsLoading] = React.useState<boolean>(true);
	const [error, setError] = React.useState<Error | null>(null);

	useEffect(() => {
		const checkOnlineStatus = async () => {
			// Reset the loading and error states
			setError(null);
			setIsLoading(true);

			// We allow the timeout and ipVersion to be passed in as props to be passed to is-online
			await isOnline({
				...(props?.timeout ? { timeout: props.timeout } : {}),
				...(props?.ipVersion ? { ipVersion: props.ipVersion } : {}),
			})
				.then((result: boolean) => {
					setOnline(result);

					// return the value from isOnline
					return result;
				})
				.catch((err: Error) => {
					setError(err);
					return false;
				})
				.finally(() => {
					setIsLoading(false);
				});
		};

		// We use the online/offline events
		window.addEventListener("offline", checkOnlineStatus);
		window.addEventListener("online", checkOnlineStatus);

		// We need to check the online status on mount
		checkOnlineStatus();

		return () => {
			// Remove the event listeners on unmount
			window.removeEventListener("offline", checkOnlineStatus);
			window.removeEventListener("online", checkOnlineStatus);
		};
	}, []);

	const value = useMemo(() => {
		return {
			isOnline: online,
			isLoading,
			error,
		};
	}, [online, isLoading, error]);

	return value;
}
