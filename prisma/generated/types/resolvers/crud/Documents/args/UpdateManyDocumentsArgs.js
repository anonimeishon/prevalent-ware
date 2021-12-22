"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyDocumentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DocumentsUpdateManyMutationInput_1 = require("../../../inputs/DocumentsUpdateManyMutationInput");
const DocumentsWhereInput_1 = require("../../../inputs/DocumentsWhereInput");
let UpdateManyDocumentsArgs = class UpdateManyDocumentsArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentsUpdateManyMutationInput_1.DocumentsUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", DocumentsUpdateManyMutationInput_1.DocumentsUpdateManyMutationInput)
], UpdateManyDocumentsArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentsWhereInput_1.DocumentsWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DocumentsWhereInput_1.DocumentsWhereInput)
], UpdateManyDocumentsArgs.prototype, "where", void 0);
UpdateManyDocumentsArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateManyDocumentsArgs);
exports.UpdateManyDocumentsArgs = UpdateManyDocumentsArgs;
