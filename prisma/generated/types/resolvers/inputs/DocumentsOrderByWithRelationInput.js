"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const CompanyOrderByWithRelationInput_1 = require("../inputs/CompanyOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let DocumentsOrderByWithRelationInput = class DocumentsOrderByWithRelationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyOrderByWithRelationInput_1.CompanyOrderByWithRelationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CompanyOrderByWithRelationInput_1.CompanyOrderByWithRelationInput)
], DocumentsOrderByWithRelationInput.prototype, "company", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentsOrderByWithRelationInput.prototype, "companyId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentsOrderByWithRelationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentsOrderByWithRelationInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentsOrderByWithRelationInput.prototype, "url", void 0);
DocumentsOrderByWithRelationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("DocumentsOrderByWithRelationInput", {
        isAbstract: true
    })
], DocumentsOrderByWithRelationInput);
exports.DocumentsOrderByWithRelationInput = DocumentsOrderByWithRelationInput;
