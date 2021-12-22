"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let DocumentsWhereUniqueInput = class DocumentsWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentsWhereUniqueInput.prototype, "id", void 0);
DocumentsWhereUniqueInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("DocumentsWhereUniqueInput", {
        isAbstract: true
    })
], DocumentsWhereUniqueInput);
exports.DocumentsWhereUniqueInput = DocumentsWhereUniqueInput;
