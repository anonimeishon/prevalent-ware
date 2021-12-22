"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let CompanyAvgOrderByAggregateInput = class CompanyAvgOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyAvgOrderByAggregateInput.prototype, "employeeAmount", void 0);
CompanyAvgOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("CompanyAvgOrderByAggregateInput", {
        isAbstract: true
    })
], CompanyAvgOrderByAggregateInput);
exports.CompanyAvgOrderByAggregateInput = CompanyAvgOrderByAggregateInput;
