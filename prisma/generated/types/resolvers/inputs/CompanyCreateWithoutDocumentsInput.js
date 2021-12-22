"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyCreateWithoutDocumentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const CompanyIdType_1 = require("../../enums/CompanyIdType");
const Status_1 = require("../../enums/Status");
let CompanyCreateWithoutDocumentsInput = class CompanyCreateWithoutDocumentsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyCreateWithoutDocumentsInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyCreateWithoutDocumentsInput.prototype, "logo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyCreateWithoutDocumentsInput.prototype, "companyName", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyCreateWithoutDocumentsInput.prototype, "socialReason", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyIdType_1.CompanyIdType, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyCreateWithoutDocumentsInput.prototype, "idType", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyCreateWithoutDocumentsInput.prototype, "companyId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CompanyCreateWithoutDocumentsInput.prototype, "isApproved", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Status_1.Status, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyCreateWithoutDocumentsInput.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CompanyCreateWithoutDocumentsInput.prototype, "employeeAmount", void 0);
CompanyCreateWithoutDocumentsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("CompanyCreateWithoutDocumentsInput", {
        isAbstract: true
    })
], CompanyCreateWithoutDocumentsInput);
exports.CompanyCreateWithoutDocumentsInput = CompanyCreateWithoutDocumentsInput;
