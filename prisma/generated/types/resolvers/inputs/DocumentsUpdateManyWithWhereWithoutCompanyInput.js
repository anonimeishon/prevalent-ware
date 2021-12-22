"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsUpdateManyWithWhereWithoutCompanyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DocumentsScalarWhereInput_1 = require("../inputs/DocumentsScalarWhereInput");
const DocumentsUpdateManyMutationInput_1 = require("../inputs/DocumentsUpdateManyMutationInput");
let DocumentsUpdateManyWithWhereWithoutCompanyInput = class DocumentsUpdateManyWithWhereWithoutCompanyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentsScalarWhereInput_1.DocumentsScalarWhereInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", DocumentsScalarWhereInput_1.DocumentsScalarWhereInput)
], DocumentsUpdateManyWithWhereWithoutCompanyInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentsUpdateManyMutationInput_1.DocumentsUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", DocumentsUpdateManyMutationInput_1.DocumentsUpdateManyMutationInput)
], DocumentsUpdateManyWithWhereWithoutCompanyInput.prototype, "data", void 0);
DocumentsUpdateManyWithWhereWithoutCompanyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("DocumentsUpdateManyWithWhereWithoutCompanyInput", {
        isAbstract: true
    })
], DocumentsUpdateManyWithWhereWithoutCompanyInput);
exports.DocumentsUpdateManyWithWhereWithoutCompanyInput = DocumentsUpdateManyWithWhereWithoutCompanyInput;
