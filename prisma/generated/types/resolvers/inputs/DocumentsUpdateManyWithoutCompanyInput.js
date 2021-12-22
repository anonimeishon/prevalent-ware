"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsUpdateManyWithoutCompanyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DocumentsCreateManyCompanyInputEnvelope_1 = require("../inputs/DocumentsCreateManyCompanyInputEnvelope");
const DocumentsCreateOrConnectWithoutCompanyInput_1 = require("../inputs/DocumentsCreateOrConnectWithoutCompanyInput");
const DocumentsCreateWithoutCompanyInput_1 = require("../inputs/DocumentsCreateWithoutCompanyInput");
const DocumentsScalarWhereInput_1 = require("../inputs/DocumentsScalarWhereInput");
const DocumentsUpdateManyWithWhereWithoutCompanyInput_1 = require("../inputs/DocumentsUpdateManyWithWhereWithoutCompanyInput");
const DocumentsUpdateWithWhereUniqueWithoutCompanyInput_1 = require("../inputs/DocumentsUpdateWithWhereUniqueWithoutCompanyInput");
const DocumentsUpsertWithWhereUniqueWithoutCompanyInput_1 = require("../inputs/DocumentsUpsertWithWhereUniqueWithoutCompanyInput");
const DocumentsWhereUniqueInput_1 = require("../inputs/DocumentsWhereUniqueInput");
let DocumentsUpdateManyWithoutCompanyInput = class DocumentsUpdateManyWithoutCompanyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [DocumentsCreateWithoutCompanyInput_1.DocumentsCreateWithoutCompanyInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], DocumentsUpdateManyWithoutCompanyInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [DocumentsCreateOrConnectWithoutCompanyInput_1.DocumentsCreateOrConnectWithoutCompanyInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], DocumentsUpdateManyWithoutCompanyInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [DocumentsUpsertWithWhereUniqueWithoutCompanyInput_1.DocumentsUpsertWithWhereUniqueWithoutCompanyInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], DocumentsUpdateManyWithoutCompanyInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentsCreateManyCompanyInputEnvelope_1.DocumentsCreateManyCompanyInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DocumentsCreateManyCompanyInputEnvelope_1.DocumentsCreateManyCompanyInputEnvelope)
], DocumentsUpdateManyWithoutCompanyInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [DocumentsWhereUniqueInput_1.DocumentsWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], DocumentsUpdateManyWithoutCompanyInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [DocumentsWhereUniqueInput_1.DocumentsWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], DocumentsUpdateManyWithoutCompanyInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [DocumentsWhereUniqueInput_1.DocumentsWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], DocumentsUpdateManyWithoutCompanyInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [DocumentsWhereUniqueInput_1.DocumentsWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], DocumentsUpdateManyWithoutCompanyInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [DocumentsUpdateWithWhereUniqueWithoutCompanyInput_1.DocumentsUpdateWithWhereUniqueWithoutCompanyInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], DocumentsUpdateManyWithoutCompanyInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [DocumentsUpdateManyWithWhereWithoutCompanyInput_1.DocumentsUpdateManyWithWhereWithoutCompanyInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], DocumentsUpdateManyWithoutCompanyInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [DocumentsScalarWhereInput_1.DocumentsScalarWhereInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], DocumentsUpdateManyWithoutCompanyInput.prototype, "deleteMany", void 0);
DocumentsUpdateManyWithoutCompanyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("DocumentsUpdateManyWithoutCompanyInput", {
        isAbstract: true
    })
], DocumentsUpdateManyWithoutCompanyInput);
exports.DocumentsUpdateManyWithoutCompanyInput = DocumentsUpdateManyWithoutCompanyInput;
