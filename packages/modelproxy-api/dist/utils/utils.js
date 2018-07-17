"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
/**
 * @internal
 */
function getRespository(target, options) {
    const connection = exports.getConn(target, options);
    const repository = connection.getRepository(target);
    // connection.transaction()
    return repository;
}
exports.getRespository = getRespository;
exports.getConn = (_target, options) => {
    const connection = typeorm_1.getConnectionManager().get(options ? options.connection : undefined);
    return connection;
};
//# sourceMappingURL=utils.js.map