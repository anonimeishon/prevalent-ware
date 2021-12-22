"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DocumentsOrderByRelationAggregateInput_1 = require("../inputs/DocumentsOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let CompanyOrderByWithRelationInput = class CompanyOrderByWithRelationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyOrderByWithRelationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyOrderByWithRelationInput.prototype, "logo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyOrderByWithRelationInput.prototype, "companyName", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyOrderByWithRelationInput.prototype, "socialReason", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyOrderByWithRelationInput.prototype, "idType", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyOrderByWithRelationInput.prototype, "companyId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyOrderByWithRelationInput.prototype, "isApproved", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyOrderByWithRelationInput.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyOrderByWithRelationInput.prototype, "employeeAmount", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentsOrderByRelationAggregateInput_1.DocumentsOrderByRelationAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DocumentsOrderByRelationAggregateInput_1.DocumentsOrderByRelationAggregateInput)
], CompanyOrderByWithRelationInput.prototype, "documents", void 0);
CompanyOrderByWithRelationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("CompanyOrderByWithRelationInput", {
        isAbstract: true
    })
], CompanyOrderByWithRelationInput);
exports.CompanyOrderByWithRelationInput = CompanyOrderByWithRelationInput;
