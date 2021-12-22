"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DocumentsCountOrderByAggregateInput_1 = require("../inputs/DocumentsCountOrderByAggregateInput");
const DocumentsMaxOrderByAggregateInput_1 = require("../inputs/DocumentsMaxOrderByAggregateInput");
const DocumentsMinOrderByAggregateInput_1 = require("../inputs/DocumentsMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let DocumentsOrderByWithAggregationInput = class DocumentsOrderByWithAggregationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentsOrderByWithAggregationInput.prototype, "companyId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentsOrderByWithAggregationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentsOrderByWithAggregationInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentsOrderByWithAggregationInput.prototype, "url", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentsCountOrderByAggregateInput_1.DocumentsCountOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DocumentsCountOrderByAggregateInput_1.DocumentsCountOrderByAggregateInput)
], DocumentsOrderByWithAggregationInput.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentsMaxOrderByAggregateInput_1.DocumentsMaxOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DocumentsMaxOrderByAggregateInput_1.DocumentsMaxOrderByAggregateInput)
], DocumentsOrderByWithAggregationInput.prototype, "_max", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentsMinOrderByAggregateInput_1.DocumentsMinOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DocumentsMinOrderByAggregateInput_1.DocumentsMinOrderByAggregateInput)
], DocumentsOrderByWithAggregationInput.prototype, "_min", void 0);
DocumentsOrderByWithAggregationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("DocumentsOrderByWithAggregationInput", {
        isAbstract: true
    })
], DocumentsOrderByWithAggregationInput);
exports.DocumentsOrderByWithAggregationInput = DocumentsOrderByWithAggregationInput;
