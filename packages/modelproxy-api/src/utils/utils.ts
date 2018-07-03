import { EntityParamOptions } from "typeorm-routing-controllers-extensions";
import { getConnectionManager } from "typeorm";

/**
 * @internal
 */
export function getRespository(target: any, options?: EntityParamOptions) {
    const connection = getConnectionManager().get(options ? options.connection : undefined);
    const repository = connection.getRepository(target);

    return repository;
}