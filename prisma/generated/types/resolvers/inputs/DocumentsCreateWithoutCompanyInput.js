"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsCreateWithoutCompanyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let DocumentsCreateWithoutCompanyInput = class DocumentsCreateWithoutCompanyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentsCreateWithoutCompanyInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentsCreateWithoutCompanyInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentsCreateWithoutCompanyInput.prototype, "url", void 0);
DocumentsCreateWithoutCompanyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("DocumentsCreateWithoutCompanyInput", {
        isAbstract: true
    })
], DocumentsCreateWithoutCompanyInput);
exports.DocumentsCreateWithoutCompanyInput = DocumentsCreateWithoutCompanyInput;
