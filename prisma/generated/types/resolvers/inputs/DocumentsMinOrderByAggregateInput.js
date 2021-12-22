"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let DocumentsMinOrderByAggregateInput = class DocumentsMinOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentsMinOrderByAggregateInput.prototype, "companyId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentsMinOrderByAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentsMinOrderByAggregateInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentsMinOrderByAggregateInput.prototype, "url", void 0);
DocumentsMinOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("DocumentsMinOrderByAggregateInput", {
        isAbstract: true
    })
], DocumentsMinOrderByAggregateInput);
exports.DocumentsMinOrderByAggregateInput = DocumentsMinOrderByAggregateInput;
