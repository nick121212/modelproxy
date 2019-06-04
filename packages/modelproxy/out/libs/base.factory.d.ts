export declare class BaseFactory<T> implements Storage {
    protected instances: {
        [id: string]: T;
    };
    length: number;
    [key: string]: any;
    add(name: string, instance: T, override?: boolean): void;
    setItem(key: string, value: string): void;
    private remove(name);
    removeItem(name: string): void;
    has(name: string): boolean;
    get(name: string): T | null;
    getItem(name: string): any;
    forEach(fn: (key: string, instance: T) => void): void;
    clear(): void;
    key(index: number): string;
}
