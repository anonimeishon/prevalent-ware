"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDocumentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DocumentsCreateInput_1 = require("../../../inputs/DocumentsCreateInput");
let CreateDocumentsArgs = class CreateDocumentsArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentsCreateInput_1.DocumentsCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", DocumentsCreateInput_1.DocumentsCreateInput)
], CreateDocumentsArgs.prototype, "data", void 0);
CreateDocumentsArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateDocumentsArgs);
exports.CreateDocumentsArgs = CreateDocumentsArgs;
