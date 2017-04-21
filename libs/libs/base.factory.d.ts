export declare namespace ModelProxy {
    class BaseFactory<T> {
        protected instances: {
            [id: string]: T;
        };
        constructor();
        add(name: string, intance: T, override?: boolean): void;
        get(name: string): T;
        use(name: string): T;
    }
}
