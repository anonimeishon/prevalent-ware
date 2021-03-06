"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var Status;
(function (Status) {
    Status["approved"] = "approved";
    Status["pending"] = "pending";
    Status["rejected"] = "rejected";
})(Status = exports.Status || (exports.Status = {}));
TypeGraphQL.registerEnumType(Status, {
    name: "Status",
    description: undefined,
});
