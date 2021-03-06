"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsUpdateWithoutCompanyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let DocumentsUpdateWithoutCompanyInput = class DocumentsUpdateWithoutCompanyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], DocumentsUpdateWithoutCompanyInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], DocumentsUpdateWithoutCompanyInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], DocumentsUpdateWithoutCompanyInput.prototype, "url", void 0);
DocumentsUpdateWithoutCompanyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("DocumentsUpdateWithoutCompanyInput", {
        isAbstract: true
    })
], DocumentsUpdateWithoutCompanyInput);
exports.DocumentsUpdateWithoutCompanyInput = DocumentsUpdateWithoutCompanyInput;
