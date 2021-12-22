"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDocumentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DocumentsUpdateInput_1 = require("../../../inputs/DocumentsUpdateInput");
const DocumentsWhereUniqueInput_1 = require("../../../inputs/DocumentsWhereUniqueInput");
let UpdateDocumentsArgs = class UpdateDocumentsArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentsUpdateInput_1.DocumentsUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", DocumentsUpdateInput_1.DocumentsUpdateInput)
], UpdateDocumentsArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentsWhereUniqueInput_1.DocumentsWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", DocumentsWhereUniqueInput_1.DocumentsWhereUniqueInput)
], UpdateDocumentsArgs.prototype, "where", void 0);
UpdateDocumentsArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateDocumentsArgs);
exports.UpdateDocumentsArgs = UpdateDocumentsArgs;
