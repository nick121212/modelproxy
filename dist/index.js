if (!global) {
    module.exports = require("./web");
} else {
    module.exports = require("./node");
}