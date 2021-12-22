"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyUpdateOneRequiredWithoutDocumentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const CompanyCreateOrConnectWithoutDocumentsInput_1 = require("../inputs/CompanyCreateOrConnectWithoutDocumentsInput");
const CompanyCreateWithoutDocumentsInput_1 = require("../inputs/CompanyCreateWithoutDocumentsInput");
const CompanyUpdateWithoutDocumentsInput_1 = require("../inputs/CompanyUpdateWithoutDocumentsInput");
const CompanyUpsertWithoutDocumentsInput_1 = require("../inputs/CompanyUpsertWithoutDocumentsInput");
const CompanyWhereUniqueInput_1 = require("../inputs/CompanyWhereUniqueInput");
let CompanyUpdateOneRequiredWithoutDocumentsInput = class CompanyUpdateOneRequiredWithoutDocumentsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyCreateWithoutDocumentsInput_1.CompanyCreateWithoutDocumentsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CompanyCreateWithoutDocumentsInput_1.CompanyCreateWithoutDocumentsInput)
], CompanyUpdateOneRequiredWithoutDocumentsInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyCreateOrConnectWithoutDocumentsInput_1.CompanyCreateOrConnectWithoutDocumentsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CompanyCreateOrConnectWithoutDocumentsInput_1.CompanyCreateOrConnectWithoutDocumentsInput)
], CompanyUpdateOneRequiredWithoutDocumentsInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyUpsertWithoutDocumentsInput_1.CompanyUpsertWithoutDocumentsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CompanyUpsertWithoutDocumentsInput_1.CompanyUpsertWithoutDocumentsInput)
], CompanyUpdateOneRequiredWithoutDocumentsInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyWhereUniqueInput_1.CompanyWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CompanyWhereUniqueInput_1.CompanyWhereUniqueInput)
], CompanyUpdateOneRequiredWithoutDocumentsInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyUpdateWithoutDocumentsInput_1.CompanyUpdateWithoutDocumentsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CompanyUpdateWithoutDocumentsInput_1.CompanyUpdateWithoutDocumentsInput)
], CompanyUpdateOneRequiredWithoutDocumentsInput.prototype, "update", void 0);
CompanyUpdateOneRequiredWithoutDocumentsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("CompanyUpdateOneRequiredWithoutDocumentsInput", {
        isAbstract: true
    })
], CompanyUpdateOneRequiredWithoutDocumentsInput);
exports.CompanyUpdateOneRequiredWithoutDocumentsInput = CompanyUpdateOneRequiredWithoutDocumentsInput;
