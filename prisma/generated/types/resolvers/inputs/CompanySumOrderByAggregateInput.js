"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanySumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let CompanySumOrderByAggregateInput = class CompanySumOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanySumOrderByAggregateInput.prototype, "employeeAmount", void 0);
CompanySumOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("CompanySumOrderByAggregateInput", {
        isAbstract: true
    })
], CompanySumOrderByAggregateInput);
exports.CompanySumOrderByAggregateInput = CompanySumOrderByAggregateInput;
