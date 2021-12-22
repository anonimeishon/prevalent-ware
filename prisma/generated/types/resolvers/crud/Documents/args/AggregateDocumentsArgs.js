"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateDocumentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DocumentsOrderByWithRelationInput_1 = require("../../../inputs/DocumentsOrderByWithRelationInput");
const DocumentsWhereInput_1 = require("../../../inputs/DocumentsWhereInput");
const DocumentsWhereUniqueInput_1 = require("../../../inputs/DocumentsWhereUniqueInput");
let AggregateDocumentsArgs = class AggregateDocumentsArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentsWhereInput_1.DocumentsWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DocumentsWhereInput_1.DocumentsWhereInput)
], AggregateDocumentsArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [DocumentsOrderByWithRelationInput_1.DocumentsOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AggregateDocumentsArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentsWhereUniqueInput_1.DocumentsWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DocumentsWhereUniqueInput_1.DocumentsWhereUniqueInput)
], AggregateDocumentsArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AggregateDocumentsArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AggregateDocumentsArgs.prototype, "skip", void 0);
AggregateDocumentsArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], AggregateDocumentsArgs);
exports.AggregateDocumentsArgs = AggregateDocumentsArgs;
