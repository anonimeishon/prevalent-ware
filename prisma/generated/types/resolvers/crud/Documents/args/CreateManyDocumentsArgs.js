"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyDocumentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DocumentsCreateManyInput_1 = require("../../../inputs/DocumentsCreateManyInput");
let CreateManyDocumentsArgs = class CreateManyDocumentsArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [DocumentsCreateManyInput_1.DocumentsCreateManyInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], CreateManyDocumentsArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CreateManyDocumentsArgs.prototype, "skipDuplicates", void 0);
CreateManyDocumentsArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateManyDocumentsArgs);
exports.CreateManyDocumentsArgs = CreateManyDocumentsArgs;
