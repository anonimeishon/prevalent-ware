"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsCreateOrConnectWithoutCompanyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DocumentsCreateWithoutCompanyInput_1 = require("../inputs/DocumentsCreateWithoutCompanyInput");
const DocumentsWhereUniqueInput_1 = require("../inputs/DocumentsWhereUniqueInput");
let DocumentsCreateOrConnectWithoutCompanyInput = class DocumentsCreateOrConnectWithoutCompanyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentsWhereUniqueInput_1.DocumentsWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", DocumentsWhereUniqueInput_1.DocumentsWhereUniqueInput)
], DocumentsCreateOrConnectWithoutCompanyInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentsCreateWithoutCompanyInput_1.DocumentsCreateWithoutCompanyInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", DocumentsCreateWithoutCompanyInput_1.DocumentsCreateWithoutCompanyInput)
], DocumentsCreateOrConnectWithoutCompanyInput.prototype, "create", void 0);
DocumentsCreateOrConnectWithoutCompanyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("DocumentsCreateOrConnectWithoutCompanyInput", {
        isAbstract: true
    })
], DocumentsCreateOrConnectWithoutCompanyInput);
exports.DocumentsCreateOrConnectWithoutCompanyInput = DocumentsCreateOrConnectWithoutCompanyInput;
