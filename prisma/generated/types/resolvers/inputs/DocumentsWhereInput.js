"use strict";
var DocumentsWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const CompanyRelationFilter_1 = require("../inputs/CompanyRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let DocumentsWhereInput = DocumentsWhereInput_1 = class DocumentsWhereInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [DocumentsWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], DocumentsWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [DocumentsWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], DocumentsWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [DocumentsWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], DocumentsWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyRelationFilter_1.CompanyRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CompanyRelationFilter_1.CompanyRelationFilter)
], DocumentsWhereInput.prototype, "company", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], DocumentsWhereInput.prototype, "companyId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], DocumentsWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], DocumentsWhereInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], DocumentsWhereInput.prototype, "url", void 0);
DocumentsWhereInput = DocumentsWhereInput_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("DocumentsWhereInput", {
        isAbstract: true
    })
], DocumentsWhereInput);
exports.DocumentsWhereInput = DocumentsWhereInput;
