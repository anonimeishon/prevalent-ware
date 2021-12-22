"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByDocumentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DocumentsOrderByWithAggregationInput_1 = require("../../../inputs/DocumentsOrderByWithAggregationInput");
const DocumentsScalarWhereWithAggregatesInput_1 = require("../../../inputs/DocumentsScalarWhereWithAggregatesInput");
const DocumentsWhereInput_1 = require("../../../inputs/DocumentsWhereInput");
const DocumentsScalarFieldEnum_1 = require("../../../../enums/DocumentsScalarFieldEnum");
let GroupByDocumentsArgs = class GroupByDocumentsArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentsWhereInput_1.DocumentsWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DocumentsWhereInput_1.DocumentsWhereInput)
], GroupByDocumentsArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [DocumentsOrderByWithAggregationInput_1.DocumentsOrderByWithAggregationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByDocumentsArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [DocumentsScalarFieldEnum_1.DocumentsScalarFieldEnum], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByDocumentsArgs.prototype, "by", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentsScalarWhereWithAggregatesInput_1.DocumentsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DocumentsScalarWhereWithAggregatesInput_1.DocumentsScalarWhereWithAggregatesInput)
], GroupByDocumentsArgs.prototype, "having", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByDocumentsArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByDocumentsArgs.prototype, "skip", void 0);
GroupByDocumentsArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], GroupByDocumentsArgs);
exports.GroupByDocumentsArgs = GroupByDocumentsArgs;
