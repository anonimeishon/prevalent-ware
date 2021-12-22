"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyUpdateWithoutDocumentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const EnumCompanyIdTypeFieldUpdateOperationsInput_1 = require("../inputs/EnumCompanyIdTypeFieldUpdateOperationsInput");
const EnumStatusFieldUpdateOperationsInput_1 = require("../inputs/EnumStatusFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const NullableBoolFieldUpdateOperationsInput_1 = require("../inputs/NullableBoolFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let CompanyUpdateWithoutDocumentsInput = class CompanyUpdateWithoutDocumentsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CompanyUpdateWithoutDocumentsInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CompanyUpdateWithoutDocumentsInput.prototype, "logo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CompanyUpdateWithoutDocumentsInput.prototype, "companyName", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CompanyUpdateWithoutDocumentsInput.prototype, "socialReason", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumCompanyIdTypeFieldUpdateOperationsInput_1.EnumCompanyIdTypeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumCompanyIdTypeFieldUpdateOperationsInput_1.EnumCompanyIdTypeFieldUpdateOperationsInput)
], CompanyUpdateWithoutDocumentsInput.prototype, "idType", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CompanyUpdateWithoutDocumentsInput.prototype, "companyId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput)
], CompanyUpdateWithoutDocumentsInput.prototype, "isApproved", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumStatusFieldUpdateOperationsInput_1.EnumStatusFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumStatusFieldUpdateOperationsInput_1.EnumStatusFieldUpdateOperationsInput)
], CompanyUpdateWithoutDocumentsInput.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], CompanyUpdateWithoutDocumentsInput.prototype, "employeeAmount", void 0);
CompanyUpdateWithoutDocumentsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("CompanyUpdateWithoutDocumentsInput", {
        isAbstract: true
    })
], CompanyUpdateWithoutDocumentsInput);
exports.CompanyUpdateWithoutDocumentsInput = CompanyUpdateWithoutDocumentsInput;
