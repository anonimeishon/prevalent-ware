"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsCreateNestedManyWithoutCompanyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DocumentsCreateManyCompanyInputEnvelope_1 = require("../inputs/DocumentsCreateManyCompanyInputEnvelope");
const DocumentsCreateOrConnectWithoutCompanyInput_1 = require("../inputs/DocumentsCreateOrConnectWithoutCompanyInput");
const DocumentsCreateWithoutCompanyInput_1 = require("../inputs/DocumentsCreateWithoutCompanyInput");
const DocumentsWhereUniqueInput_1 = require("../inputs/DocumentsWhereUniqueInput");
let DocumentsCreateNestedManyWithoutCompanyInput = class DocumentsCreateNestedManyWithoutCompanyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [DocumentsCreateWithoutCompanyInput_1.DocumentsCreateWithoutCompanyInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], DocumentsCreateNestedManyWithoutCompanyInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [DocumentsCreateOrConnectWithoutCompanyInput_1.DocumentsCreateOrConnectWithoutCompanyInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], DocumentsCreateNestedManyWithoutCompanyInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentsCreateManyCompanyInputEnvelope_1.DocumentsCreateManyCompanyInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DocumentsCreateManyCompanyInputEnvelope_1.DocumentsCreateManyCompanyInputEnvelope)
], DocumentsCreateNestedManyWithoutCompanyInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [DocumentsWhereUniqueInput_1.DocumentsWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], DocumentsCreateNestedManyWithoutCompanyInput.prototype, "connect", void 0);
DocumentsCreateNestedManyWithoutCompanyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("DocumentsCreateNestedManyWithoutCompanyInput", {
        isAbstract: true
    })
], DocumentsCreateNestedManyWithoutCompanyInput);
exports.DocumentsCreateNestedManyWithoutCompanyInput = DocumentsCreateNestedManyWithoutCompanyInput;
