"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const CompanyCreateNestedOneWithoutDocumentsInput_1 = require("../inputs/CompanyCreateNestedOneWithoutDocumentsInput");
let DocumentsCreateInput = class DocumentsCreateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentsCreateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentsCreateInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentsCreateInput.prototype, "url", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyCreateNestedOneWithoutDocumentsInput_1.CompanyCreateNestedOneWithoutDocumentsInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", CompanyCreateNestedOneWithoutDocumentsInput_1.CompanyCreateNestedOneWithoutDocumentsInput)
], DocumentsCreateInput.prototype, "company", void 0);
DocumentsCreateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("DocumentsCreateInput", {
        isAbstract: true
    })
], DocumentsCreateInput);
exports.DocumentsCreateInput = DocumentsCreateInput;
