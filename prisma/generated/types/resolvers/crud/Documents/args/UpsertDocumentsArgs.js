"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertDocumentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DocumentsCreateInput_1 = require("../../../inputs/DocumentsCreateInput");
const DocumentsUpdateInput_1 = require("../../../inputs/DocumentsUpdateInput");
const DocumentsWhereUniqueInput_1 = require("../../../inputs/DocumentsWhereUniqueInput");
let UpsertDocumentsArgs = class UpsertDocumentsArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentsWhereUniqueInput_1.DocumentsWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", DocumentsWhereUniqueInput_1.DocumentsWhereUniqueInput)
], UpsertDocumentsArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentsCreateInput_1.DocumentsCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", DocumentsCreateInput_1.DocumentsCreateInput)
], UpsertDocumentsArgs.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentsUpdateInput_1.DocumentsUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", DocumentsUpdateInput_1.DocumentsUpdateInput)
], UpsertDocumentsArgs.prototype, "update", void 0);
UpsertDocumentsArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpsertDocumentsArgs);
exports.UpsertDocumentsArgs = UpsertDocumentsArgs;
