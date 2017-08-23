export declare class BaseFactory<T> {
    protected instances: {
        [id: string]: T;
    };
    add(name: string, intance: T, override?: boolean): void;
    get(name: string): T | null;
    use(name: string): T;
}
