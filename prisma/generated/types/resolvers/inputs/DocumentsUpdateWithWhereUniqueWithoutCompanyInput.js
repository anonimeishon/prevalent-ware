"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsUpdateWithWhereUniqueWithoutCompanyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DocumentsUpdateWithoutCompanyInput_1 = require("../inputs/DocumentsUpdateWithoutCompanyInput");
const DocumentsWhereUniqueInput_1 = require("../inputs/DocumentsWhereUniqueInput");
let DocumentsUpdateWithWhereUniqueWithoutCompanyInput = class DocumentsUpdateWithWhereUniqueWithoutCompanyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentsWhereUniqueInput_1.DocumentsWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", DocumentsWhereUniqueInput_1.DocumentsWhereUniqueInput)
], DocumentsUpdateWithWhereUniqueWithoutCompanyInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentsUpdateWithoutCompanyInput_1.DocumentsUpdateWithoutCompanyInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", DocumentsUpdateWithoutCompanyInput_1.DocumentsUpdateWithoutCompanyInput)
], DocumentsUpdateWithWhereUniqueWithoutCompanyInput.prototype, "data", void 0);
DocumentsUpdateWithWhereUniqueWithoutCompanyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("DocumentsUpdateWithWhereUniqueWithoutCompanyInput", {
        isAbstract: true
    })
], DocumentsUpdateWithWhereUniqueWithoutCompanyInput);
exports.DocumentsUpdateWithWhereUniqueWithoutCompanyInput = DocumentsUpdateWithWhereUniqueWithoutCompanyInput;
