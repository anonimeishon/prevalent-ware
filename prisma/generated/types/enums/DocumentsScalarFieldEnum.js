"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var DocumentsScalarFieldEnum;
(function (DocumentsScalarFieldEnum) {
    DocumentsScalarFieldEnum["companyId"] = "companyId";
    DocumentsScalarFieldEnum["id"] = "id";
    DocumentsScalarFieldEnum["name"] = "name";
    DocumentsScalarFieldEnum["url"] = "url";
})(DocumentsScalarFieldEnum = exports.DocumentsScalarFieldEnum || (exports.DocumentsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(DocumentsScalarFieldEnum, {
    name: "DocumentsScalarFieldEnum",
    description: undefined,
});
