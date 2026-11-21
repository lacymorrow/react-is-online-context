import React from "react";
import { IsOnlineProps } from "./use-is-online-hook";
interface IsOnlineContextType {
    isOnline: boolean;
    isLoading: boolean;
    error: Error | null;
}
export declare const IsOnlineContext: React.Context<IsOnlineContextType>;
export declare function IsOnlineContextProvider({ children, timeout, ipVersion, }: {
    children?: React.ReactNode;
} & IsOnlineProps): React.JSX.Element;
export {};
