import { EntityParamOptions } from "typeorm-routing-controllers-extensions";
import { getConnectionManager } from "typeorm";

/**
 * @internal
 */
export function getRespository(target: any, options?: EntityParamOptions) {
    const connection = getConn(target, options);
    const repository = connection.getRepository(target);

    // connection.transaction()

    return repository;
}

export const getConn = (_target: any, options?: EntityParamOptions) => {
    const connection = getConnectionManager().get(options ? options.connection : undefined);

    return connection;
};