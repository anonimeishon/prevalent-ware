"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const CompanyUpdateOneRequiredWithoutDocumentsInput_1 = require("../inputs/CompanyUpdateOneRequiredWithoutDocumentsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let DocumentsUpdateInput = class DocumentsUpdateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], DocumentsUpdateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], DocumentsUpdateInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], DocumentsUpdateInput.prototype, "url", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyUpdateOneRequiredWithoutDocumentsInput_1.CompanyUpdateOneRequiredWithoutDocumentsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CompanyUpdateOneRequiredWithoutDocumentsInput_1.CompanyUpdateOneRequiredWithoutDocumentsInput)
], DocumentsUpdateInput.prototype, "company", void 0);
DocumentsUpdateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("DocumentsUpdateInput", {
        isAbstract: true
    })
], DocumentsUpdateInput);
exports.DocumentsUpdateInput = DocumentsUpdateInput;
