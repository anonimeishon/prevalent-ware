"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyIdType = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var CompanyIdType;
(function (CompanyIdType) {
    CompanyIdType["AT"] = "AT";
    CompanyIdType["NIT"] = "NIT";
    CompanyIdType["ID"] = "ID";
})(CompanyIdType = exports.CompanyIdType || (exports.CompanyIdType = {}));
TypeGraphQL.registerEnumType(CompanyIdType, {
    name: "CompanyIdType",
    description: undefined,
});
