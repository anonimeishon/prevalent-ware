"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsUpsertWithWhereUniqueWithoutCompanyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DocumentsCreateWithoutCompanyInput_1 = require("../inputs/DocumentsCreateWithoutCompanyInput");
const DocumentsUpdateWithoutCompanyInput_1 = require("../inputs/DocumentsUpdateWithoutCompanyInput");
const DocumentsWhereUniqueInput_1 = require("../inputs/DocumentsWhereUniqueInput");
let DocumentsUpsertWithWhereUniqueWithoutCompanyInput = class DocumentsUpsertWithWhereUniqueWithoutCompanyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentsWhereUniqueInput_1.DocumentsWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", DocumentsWhereUniqueInput_1.DocumentsWhereUniqueInput)
], DocumentsUpsertWithWhereUniqueWithoutCompanyInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentsUpdateWithoutCompanyInput_1.DocumentsUpdateWithoutCompanyInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", DocumentsUpdateWithoutCompanyInput_1.DocumentsUpdateWithoutCompanyInput)
], DocumentsUpsertWithWhereUniqueWithoutCompanyInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentsCreateWithoutCompanyInput_1.DocumentsCreateWithoutCompanyInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", DocumentsCreateWithoutCompanyInput_1.DocumentsCreateWithoutCompanyInput)
], DocumentsUpsertWithWhereUniqueWithoutCompanyInput.prototype, "create", void 0);
DocumentsUpsertWithWhereUniqueWithoutCompanyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("DocumentsUpsertWithWhereUniqueWithoutCompanyInput", {
        isAbstract: true
    })
], DocumentsUpsertWithWhereUniqueWithoutCompanyInput);
exports.DocumentsUpsertWithWhereUniqueWithoutCompanyInput = DocumentsUpsertWithWhereUniqueWithoutCompanyInput;
