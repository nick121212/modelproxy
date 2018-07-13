declare module "generate-schema" {
    export interface GenerateSchema {
        json: (title: string, json: any) => any;
    }

    const gs: GenerateSchema;

    export default gs;
}
