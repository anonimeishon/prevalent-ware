"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumCompanyIdTypeWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumCompanyIdTypeFilter_1 = require("../inputs/NestedEnumCompanyIdTypeFilter");
const NestedEnumCompanyIdTypeWithAggregatesFilter_1 = require("../inputs/NestedEnumCompanyIdTypeWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const CompanyIdType_1 = require("../../enums/CompanyIdType");
let EnumCompanyIdTypeWithAggregatesFilter = class EnumCompanyIdTypeWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyIdType_1.CompanyIdType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumCompanyIdTypeWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [CompanyIdType_1.CompanyIdType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumCompanyIdTypeWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [CompanyIdType_1.CompanyIdType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumCompanyIdTypeWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumCompanyIdTypeWithAggregatesFilter_1.NestedEnumCompanyIdTypeWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumCompanyIdTypeWithAggregatesFilter_1.NestedEnumCompanyIdTypeWithAggregatesFilter)
], EnumCompanyIdTypeWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumCompanyIdTypeWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumCompanyIdTypeFilter_1.NestedEnumCompanyIdTypeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumCompanyIdTypeFilter_1.NestedEnumCompanyIdTypeFilter)
], EnumCompanyIdTypeWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumCompanyIdTypeFilter_1.NestedEnumCompanyIdTypeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumCompanyIdTypeFilter_1.NestedEnumCompanyIdTypeFilter)
], EnumCompanyIdTypeWithAggregatesFilter.prototype, "_max", void 0);
EnumCompanyIdTypeWithAggregatesFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumCompanyIdTypeWithAggregatesFilter", {
        isAbstract: true
    })
], EnumCompanyIdTypeWithAggregatesFilter);
exports.EnumCompanyIdTypeWithAggregatesFilter = EnumCompanyIdTypeWithAggregatesFilter;
