import React from 'react';

interface IsOnlineProps {
    timeout?: number;
    ipVersion?: 4 | 6;
}
declare function useIsOnline(props?: IsOnlineProps): {
    isOnline: boolean;
    isLoading: boolean;
    error: Error | null;
};

interface IsOnlineContextType {
    isOnline: boolean;
    isLoading: boolean;
    error: Error | null;
}
declare const IsOnlineContext: React.Context<IsOnlineContextType>;
declare function IsOnlineContextProvider({ children, timeout, ipVersion, }: {
    children?: React.ReactNode;
} & IsOnlineProps): React.JSX.Element;

export { IsOnlineContext, IsOnlineContextProvider, useIsOnline };
