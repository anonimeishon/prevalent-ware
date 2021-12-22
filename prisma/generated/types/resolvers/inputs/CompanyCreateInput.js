"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DocumentsCreateNestedManyWithoutCompanyInput_1 = require("../inputs/DocumentsCreateNestedManyWithoutCompanyInput");
const CompanyIdType_1 = require("../../enums/CompanyIdType");
const Status_1 = require("../../enums/Status");
let CompanyCreateInput = class CompanyCreateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyCreateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyCreateInput.prototype, "logo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyCreateInput.prototype, "companyName", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyCreateInput.prototype, "socialReason", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyIdType_1.CompanyIdType, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyCreateInput.prototype, "idType", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyCreateInput.prototype, "companyId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CompanyCreateInput.prototype, "isApproved", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Status_1.Status, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyCreateInput.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CompanyCreateInput.prototype, "employeeAmount", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentsCreateNestedManyWithoutCompanyInput_1.DocumentsCreateNestedManyWithoutCompanyInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DocumentsCreateNestedManyWithoutCompanyInput_1.DocumentsCreateNestedManyWithoutCompanyInput)
], CompanyCreateInput.prototype, "documents", void 0);
CompanyCreateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("CompanyCreateInput", {
        isAbstract: true
    })
], CompanyCreateInput);
exports.CompanyCreateInput = CompanyCreateInput;
