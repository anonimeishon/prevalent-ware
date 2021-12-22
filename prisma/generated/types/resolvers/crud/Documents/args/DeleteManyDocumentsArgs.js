"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyDocumentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DocumentsWhereInput_1 = require("../../../inputs/DocumentsWhereInput");
let DeleteManyDocumentsArgs = class DeleteManyDocumentsArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentsWhereInput_1.DocumentsWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DocumentsWhereInput_1.DocumentsWhereInput)
], DeleteManyDocumentsArgs.prototype, "where", void 0);
DeleteManyDocumentsArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteManyDocumentsArgs);
exports.DeleteManyDocumentsArgs = DeleteManyDocumentsArgs;
