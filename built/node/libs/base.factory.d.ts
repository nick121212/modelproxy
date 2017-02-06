export declare namespace ModelProxy {
    class BaseFactory<T> {
        protected intances: {
            [id: string]: T;
        };
        constructor();
        add(name: string, intance: T, override?: boolean): void;
        use(name: string): T;
    }
}
