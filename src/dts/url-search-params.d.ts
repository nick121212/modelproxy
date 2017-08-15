
// Type definitions for url-search-params 0.5.*
// Project: https://github.com/WebReflection/url-search-params
// Definitions by: Bart van der Schoor <https://github.com/nick121212>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'url-search-params' {

    // function URLSearchParams(init?: string): URLSearchParams.Instance;
    namespace URLSearchParams {
        interface Instance {
            append(name: string, value: any): void;
            delete(name: string): void;
            entries(pointer: string): Iterator<string>;
            get(name: string): string;
            getAll(): Array<string>;
            has(name: string): boolean;
            keys(): Iterator<string>;
            set(name: string, value: any): void;
            values(pointer: string): Iterator<string>;
        }
    }

    var URLSearchParams: {
        prototype: URLSearchParams.Instance;
        new(init?: string): URLSearchParams.Instance;
        new(init?: URLSearchParams.Instance): URLSearchParams.Instance;
        new(init?: any): URLSearchParams.Instance;
    }

    export = URLSearchParams;
}


