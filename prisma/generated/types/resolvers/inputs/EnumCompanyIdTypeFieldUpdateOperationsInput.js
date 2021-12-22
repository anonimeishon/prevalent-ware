"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumCompanyIdTypeFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const CompanyIdType_1 = require("../../enums/CompanyIdType");
let EnumCompanyIdTypeFieldUpdateOperationsInput = class EnumCompanyIdTypeFieldUpdateOperationsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyIdType_1.CompanyIdType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumCompanyIdTypeFieldUpdateOperationsInput.prototype, "set", void 0);
EnumCompanyIdTypeFieldUpdateOperationsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumCompanyIdTypeFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumCompanyIdTypeFieldUpdateOperationsInput);
exports.EnumCompanyIdTypeFieldUpdateOperationsInput = EnumCompanyIdTypeFieldUpdateOperationsInput;
