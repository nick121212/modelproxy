export interface ICommon {
    key?: string;
    title?: string;
    engine?: string;
    states?: {
        [id: string]: string;
    };
    state?: string;
    version?: string;
    mockDir?: string;
}
