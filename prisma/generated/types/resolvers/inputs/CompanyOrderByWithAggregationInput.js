"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const CompanyAvgOrderByAggregateInput_1 = require("../inputs/CompanyAvgOrderByAggregateInput");
const CompanyCountOrderByAggregateInput_1 = require("../inputs/CompanyCountOrderByAggregateInput");
const CompanyMaxOrderByAggregateInput_1 = require("../inputs/CompanyMaxOrderByAggregateInput");
const CompanyMinOrderByAggregateInput_1 = require("../inputs/CompanyMinOrderByAggregateInput");
const CompanySumOrderByAggregateInput_1 = require("../inputs/CompanySumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let CompanyOrderByWithAggregationInput = class CompanyOrderByWithAggregationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyOrderByWithAggregationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyOrderByWithAggregationInput.prototype, "logo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyOrderByWithAggregationInput.prototype, "companyName", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyOrderByWithAggregationInput.prototype, "socialReason", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyOrderByWithAggregationInput.prototype, "idType", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyOrderByWithAggregationInput.prototype, "companyId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyOrderByWithAggregationInput.prototype, "isApproved", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyOrderByWithAggregationInput.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyOrderByWithAggregationInput.prototype, "employeeAmount", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyCountOrderByAggregateInput_1.CompanyCountOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CompanyCountOrderByAggregateInput_1.CompanyCountOrderByAggregateInput)
], CompanyOrderByWithAggregationInput.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyAvgOrderByAggregateInput_1.CompanyAvgOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CompanyAvgOrderByAggregateInput_1.CompanyAvgOrderByAggregateInput)
], CompanyOrderByWithAggregationInput.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyMaxOrderByAggregateInput_1.CompanyMaxOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CompanyMaxOrderByAggregateInput_1.CompanyMaxOrderByAggregateInput)
], CompanyOrderByWithAggregationInput.prototype, "_max", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyMinOrderByAggregateInput_1.CompanyMinOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CompanyMinOrderByAggregateInput_1.CompanyMinOrderByAggregateInput)
], CompanyOrderByWithAggregationInput.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanySumOrderByAggregateInput_1.CompanySumOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CompanySumOrderByAggregateInput_1.CompanySumOrderByAggregateInput)
], CompanyOrderByWithAggregationInput.prototype, "_sum", void 0);
CompanyOrderByWithAggregationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("CompanyOrderByWithAggregationInput", {
        isAbstract: true
    })
], CompanyOrderByWithAggregationInput);
exports.CompanyOrderByWithAggregationInput = CompanyOrderByWithAggregationInput;
