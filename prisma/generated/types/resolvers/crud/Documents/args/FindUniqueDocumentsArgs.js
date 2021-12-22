"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueDocumentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DocumentsWhereUniqueInput_1 = require("../../../inputs/DocumentsWhereUniqueInput");
let FindUniqueDocumentsArgs = class FindUniqueDocumentsArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentsWhereUniqueInput_1.DocumentsWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", DocumentsWhereUniqueInput_1.DocumentsWhereUniqueInput)
], FindUniqueDocumentsArgs.prototype, "where", void 0);
FindUniqueDocumentsArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindUniqueDocumentsArgs);
exports.FindUniqueDocumentsArgs = FindUniqueDocumentsArgs;
