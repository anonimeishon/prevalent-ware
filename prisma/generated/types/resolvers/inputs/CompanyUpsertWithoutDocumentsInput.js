"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyUpsertWithoutDocumentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const CompanyCreateWithoutDocumentsInput_1 = require("../inputs/CompanyCreateWithoutDocumentsInput");
const CompanyUpdateWithoutDocumentsInput_1 = require("../inputs/CompanyUpdateWithoutDocumentsInput");
let CompanyUpsertWithoutDocumentsInput = class CompanyUpsertWithoutDocumentsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyUpdateWithoutDocumentsInput_1.CompanyUpdateWithoutDocumentsInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", CompanyUpdateWithoutDocumentsInput_1.CompanyUpdateWithoutDocumentsInput)
], CompanyUpsertWithoutDocumentsInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyCreateWithoutDocumentsInput_1.CompanyCreateWithoutDocumentsInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", CompanyCreateWithoutDocumentsInput_1.CompanyCreateWithoutDocumentsInput)
], CompanyUpsertWithoutDocumentsInput.prototype, "create", void 0);
CompanyUpsertWithoutDocumentsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("CompanyUpsertWithoutDocumentsInput", {
        isAbstract: true
    })
], CompanyUpsertWithoutDocumentsInput);
exports.CompanyUpsertWithoutDocumentsInput = CompanyUpsertWithoutDocumentsInput;
