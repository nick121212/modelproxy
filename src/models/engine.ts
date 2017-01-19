export interface IEngine {
    validate(data: any): boolean;
    proxy(data): any;
}