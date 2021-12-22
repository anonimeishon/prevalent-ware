"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyCreateOrConnectWithoutDocumentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const CompanyCreateWithoutDocumentsInput_1 = require("../inputs/CompanyCreateWithoutDocumentsInput");
const CompanyWhereUniqueInput_1 = require("../inputs/CompanyWhereUniqueInput");
let CompanyCreateOrConnectWithoutDocumentsInput = class CompanyCreateOrConnectWithoutDocumentsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyWhereUniqueInput_1.CompanyWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", CompanyWhereUniqueInput_1.CompanyWhereUniqueInput)
], CompanyCreateOrConnectWithoutDocumentsInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyCreateWithoutDocumentsInput_1.CompanyCreateWithoutDocumentsInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", CompanyCreateWithoutDocumentsInput_1.CompanyCreateWithoutDocumentsInput)
], CompanyCreateOrConnectWithoutDocumentsInput.prototype, "create", void 0);
CompanyCreateOrConnectWithoutDocumentsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("CompanyCreateOrConnectWithoutDocumentsInput", {
        isAbstract: true
    })
], CompanyCreateOrConnectWithoutDocumentsInput);
exports.CompanyCreateOrConnectWithoutDocumentsInput = CompanyCreateOrConnectWithoutDocumentsInput;
