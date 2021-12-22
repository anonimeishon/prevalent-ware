"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DocumentsUpdateManyWithoutCompanyInput_1 = require("../inputs/DocumentsUpdateManyWithoutCompanyInput");
const EnumCompanyIdTypeFieldUpdateOperationsInput_1 = require("../inputs/EnumCompanyIdTypeFieldUpdateOperationsInput");
const EnumStatusFieldUpdateOperationsInput_1 = require("../inputs/EnumStatusFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const NullableBoolFieldUpdateOperationsInput_1 = require("../inputs/NullableBoolFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let CompanyUpdateInput = class CompanyUpdateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CompanyUpdateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CompanyUpdateInput.prototype, "logo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CompanyUpdateInput.prototype, "companyName", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CompanyUpdateInput.prototype, "socialReason", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumCompanyIdTypeFieldUpdateOperationsInput_1.EnumCompanyIdTypeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumCompanyIdTypeFieldUpdateOperationsInput_1.EnumCompanyIdTypeFieldUpdateOperationsInput)
], CompanyUpdateInput.prototype, "idType", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CompanyUpdateInput.prototype, "companyId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput)
], CompanyUpdateInput.prototype, "isApproved", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumStatusFieldUpdateOperationsInput_1.EnumStatusFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumStatusFieldUpdateOperationsInput_1.EnumStatusFieldUpdateOperationsInput)
], CompanyUpdateInput.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], CompanyUpdateInput.prototype, "employeeAmount", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentsUpdateManyWithoutCompanyInput_1.DocumentsUpdateManyWithoutCompanyInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DocumentsUpdateManyWithoutCompanyInput_1.DocumentsUpdateManyWithoutCompanyInput)
], CompanyUpdateInput.prototype, "documents", void 0);
CompanyUpdateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("CompanyUpdateInput", {
        isAbstract: true
    })
], CompanyUpdateInput);
exports.CompanyUpdateInput = CompanyUpdateInput;
