"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyCreateNestedOneWithoutDocumentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const CompanyCreateOrConnectWithoutDocumentsInput_1 = require("../inputs/CompanyCreateOrConnectWithoutDocumentsInput");
const CompanyCreateWithoutDocumentsInput_1 = require("../inputs/CompanyCreateWithoutDocumentsInput");
const CompanyWhereUniqueInput_1 = require("../inputs/CompanyWhereUniqueInput");
let CompanyCreateNestedOneWithoutDocumentsInput = class CompanyCreateNestedOneWithoutDocumentsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyCreateWithoutDocumentsInput_1.CompanyCreateWithoutDocumentsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CompanyCreateWithoutDocumentsInput_1.CompanyCreateWithoutDocumentsInput)
], CompanyCreateNestedOneWithoutDocumentsInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyCreateOrConnectWithoutDocumentsInput_1.CompanyCreateOrConnectWithoutDocumentsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CompanyCreateOrConnectWithoutDocumentsInput_1.CompanyCreateOrConnectWithoutDocumentsInput)
], CompanyCreateNestedOneWithoutDocumentsInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyWhereUniqueInput_1.CompanyWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CompanyWhereUniqueInput_1.CompanyWhereUniqueInput)
], CompanyCreateNestedOneWithoutDocumentsInput.prototype, "connect", void 0);
CompanyCreateNestedOneWithoutDocumentsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("CompanyCreateNestedOneWithoutDocumentsInput", {
        isAbstract: true
    })
], CompanyCreateNestedOneWithoutDocumentsInput);
exports.CompanyCreateNestedOneWithoutDocumentsInput = CompanyCreateNestedOneWithoutDocumentsInput;
