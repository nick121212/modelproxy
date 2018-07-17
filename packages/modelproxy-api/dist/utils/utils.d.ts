import { EntityParamOptions } from "typeorm-routing-controllers-extensions";
/**
 * @internal
 */
export declare function getRespository(target: any, options?: EntityParamOptions): import("../../node_modules/typeorm/repository/Repository").Repository<{}>;
export declare const getConn: (_target: any, options?: EntityParamOptions | undefined) => import("../../node_modules/typeorm/connection/Connection").Connection;
