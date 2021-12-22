"use strict";
var NestedEnumCompanyIdTypeWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumCompanyIdTypeWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumCompanyIdTypeFilter_1 = require("../inputs/NestedEnumCompanyIdTypeFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const CompanyIdType_1 = require("../../enums/CompanyIdType");
let NestedEnumCompanyIdTypeWithAggregatesFilter = NestedEnumCompanyIdTypeWithAggregatesFilter_1 = class NestedEnumCompanyIdTypeWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyIdType_1.CompanyIdType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedEnumCompanyIdTypeWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [CompanyIdType_1.CompanyIdType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumCompanyIdTypeWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [CompanyIdType_1.CompanyIdType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumCompanyIdTypeWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumCompanyIdTypeWithAggregatesFilter_1, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumCompanyIdTypeWithAggregatesFilter)
], NestedEnumCompanyIdTypeWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumCompanyIdTypeWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumCompanyIdTypeFilter_1.NestedEnumCompanyIdTypeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumCompanyIdTypeFilter_1.NestedEnumCompanyIdTypeFilter)
], NestedEnumCompanyIdTypeWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumCompanyIdTypeFilter_1.NestedEnumCompanyIdTypeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumCompanyIdTypeFilter_1.NestedEnumCompanyIdTypeFilter)
], NestedEnumCompanyIdTypeWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumCompanyIdTypeWithAggregatesFilter = NestedEnumCompanyIdTypeWithAggregatesFilter_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("NestedEnumCompanyIdTypeWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumCompanyIdTypeWithAggregatesFilter);
exports.NestedEnumCompanyIdTypeWithAggregatesFilter = NestedEnumCompanyIdTypeWithAggregatesFilter;
