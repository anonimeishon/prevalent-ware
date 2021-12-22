"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsCreateManyCompanyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let DocumentsCreateManyCompanyInput = class DocumentsCreateManyCompanyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentsCreateManyCompanyInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentsCreateManyCompanyInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentsCreateManyCompanyInput.prototype, "url", void 0);
DocumentsCreateManyCompanyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("DocumentsCreateManyCompanyInput", {
        isAbstract: true
    })
], DocumentsCreateManyCompanyInput);
exports.DocumentsCreateManyCompanyInput = DocumentsCreateManyCompanyInput;
