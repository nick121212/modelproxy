"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
/**
 * @internal
 */
function getRespository(target, options) {
    const connection = typeorm_1.getConnectionManager().get(options ? options.connection : undefined);
    const repository = connection.getRepository(target);
    return repository;
}
exports.getRespository = getRespository;
//# sourceMappingURL=utils.js.map