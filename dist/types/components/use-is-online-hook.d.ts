export interface IsOnlineProps {
    timeout?: number;
    ipVersion?: 4 | 6;
}
export declare function useIsOnline(props?: IsOnlineProps): {
    isOnline: boolean;
    isLoading: boolean;
    error: Error | null;
};
