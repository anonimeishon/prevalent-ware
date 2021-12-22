"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumCompanyIdTypeFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumCompanyIdTypeFilter_1 = require("../inputs/NestedEnumCompanyIdTypeFilter");
const CompanyIdType_1 = require("../../enums/CompanyIdType");
let EnumCompanyIdTypeFilter = class EnumCompanyIdTypeFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyIdType_1.CompanyIdType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumCompanyIdTypeFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [CompanyIdType_1.CompanyIdType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumCompanyIdTypeFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [CompanyIdType_1.CompanyIdType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumCompanyIdTypeFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumCompanyIdTypeFilter_1.NestedEnumCompanyIdTypeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumCompanyIdTypeFilter_1.NestedEnumCompanyIdTypeFilter)
], EnumCompanyIdTypeFilter.prototype, "not", void 0);
EnumCompanyIdTypeFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumCompanyIdTypeFilter", {
        isAbstract: true
    })
], EnumCompanyIdTypeFilter);
exports.EnumCompanyIdTypeFilter = EnumCompanyIdTypeFilter;
