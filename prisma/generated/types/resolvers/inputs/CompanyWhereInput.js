"use strict";
var CompanyWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BoolNullableFilter_1 = require("../inputs/BoolNullableFilter");
const DocumentsListRelationFilter_1 = require("../inputs/DocumentsListRelationFilter");
const EnumCompanyIdTypeFilter_1 = require("../inputs/EnumCompanyIdTypeFilter");
const EnumStatusFilter_1 = require("../inputs/EnumStatusFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let CompanyWhereInput = CompanyWhereInput_1 = class CompanyWhereInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [CompanyWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], CompanyWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [CompanyWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], CompanyWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [CompanyWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], CompanyWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], CompanyWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], CompanyWhereInput.prototype, "logo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], CompanyWhereInput.prototype, "companyName", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], CompanyWhereInput.prototype, "socialReason", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumCompanyIdTypeFilter_1.EnumCompanyIdTypeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumCompanyIdTypeFilter_1.EnumCompanyIdTypeFilter)
], CompanyWhereInput.prototype, "idType", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], CompanyWhereInput.prototype, "companyId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BoolNullableFilter_1.BoolNullableFilter)
], CompanyWhereInput.prototype, "isApproved", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumStatusFilter_1.EnumStatusFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumStatusFilter_1.EnumStatusFilter)
], CompanyWhereInput.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntFilter_1.IntFilter)
], CompanyWhereInput.prototype, "employeeAmount", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentsListRelationFilter_1.DocumentsListRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DocumentsListRelationFilter_1.DocumentsListRelationFilter)
], CompanyWhereInput.prototype, "documents", void 0);
CompanyWhereInput = CompanyWhereInput_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("CompanyWhereInput", {
        isAbstract: true
    })
], CompanyWhereInput);
exports.CompanyWhereInput = CompanyWhereInput;
