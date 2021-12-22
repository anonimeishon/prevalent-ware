"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let DocumentsCountOrderByAggregateInput = class DocumentsCountOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentsCountOrderByAggregateInput.prototype, "companyId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentsCountOrderByAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentsCountOrderByAggregateInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentsCountOrderByAggregateInput.prototype, "url", void 0);
DocumentsCountOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("DocumentsCountOrderByAggregateInput", {
        isAbstract: true
    })
], DocumentsCountOrderByAggregateInput);
exports.DocumentsCountOrderByAggregateInput = DocumentsCountOrderByAggregateInput;
