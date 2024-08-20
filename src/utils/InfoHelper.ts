/** @format */

export function getVersion(): string {
    const common = require("../config/common.json");
    return common.version;
}
