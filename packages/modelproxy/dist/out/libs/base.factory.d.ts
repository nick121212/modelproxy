export declare class BaseFactory<T> {
    protected instances: {
        [id: string]: T;
    };
    add(name: string, intance: T, override?: boolean): void;
    remove(name: string): void;
    has(name: string): boolean;
    get(name: string): T | null;
    use(name: string): T;
    forEach(fn: Function): void;
}
