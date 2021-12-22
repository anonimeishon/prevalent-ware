"use strict";
var NestedEnumCompanyIdTypeFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumCompanyIdTypeFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const CompanyIdType_1 = require("../../enums/CompanyIdType");
let NestedEnumCompanyIdTypeFilter = NestedEnumCompanyIdTypeFilter_1 = class NestedEnumCompanyIdTypeFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyIdType_1.CompanyIdType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedEnumCompanyIdTypeFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [CompanyIdType_1.CompanyIdType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumCompanyIdTypeFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [CompanyIdType_1.CompanyIdType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumCompanyIdTypeFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumCompanyIdTypeFilter_1, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumCompanyIdTypeFilter)
], NestedEnumCompanyIdTypeFilter.prototype, "not", void 0);
NestedEnumCompanyIdTypeFilter = NestedEnumCompanyIdTypeFilter_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("NestedEnumCompanyIdTypeFilter", {
        isAbstract: true
    })
], NestedEnumCompanyIdTypeFilter);
exports.NestedEnumCompanyIdTypeFilter = NestedEnumCompanyIdTypeFilter;
