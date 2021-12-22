"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let DocumentsCreateManyInput = class DocumentsCreateManyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentsCreateManyInput.prototype, "companyId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentsCreateManyInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentsCreateManyInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentsCreateManyInput.prototype, "url", void 0);
DocumentsCreateManyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("DocumentsCreateManyInput", {
        isAbstract: true
    })
], DocumentsCreateManyInput);
exports.DocumentsCreateManyInput = DocumentsCreateManyInput;
