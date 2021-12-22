"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstDocumentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DocumentsOrderByWithRelationInput_1 = require("../../../inputs/DocumentsOrderByWithRelationInput");
const DocumentsWhereInput_1 = require("../../../inputs/DocumentsWhereInput");
const DocumentsWhereUniqueInput_1 = require("../../../inputs/DocumentsWhereUniqueInput");
const DocumentsScalarFieldEnum_1 = require("../../../../enums/DocumentsScalarFieldEnum");
let FindFirstDocumentsArgs = class FindFirstDocumentsArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentsWhereInput_1.DocumentsWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DocumentsWhereInput_1.DocumentsWhereInput)
], FindFirstDocumentsArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [DocumentsOrderByWithRelationInput_1.DocumentsOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstDocumentsArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentsWhereUniqueInput_1.DocumentsWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DocumentsWhereUniqueInput_1.DocumentsWhereUniqueInput)
], FindFirstDocumentsArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstDocumentsArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstDocumentsArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [DocumentsScalarFieldEnum_1.DocumentsScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstDocumentsArgs.prototype, "distinct", void 0);
FindFirstDocumentsArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindFirstDocumentsArgs);
exports.FindFirstDocumentsArgs = FindFirstDocumentsArgs;
