"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsCreateManyCompanyInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DocumentsCreateManyCompanyInput_1 = require("../inputs/DocumentsCreateManyCompanyInput");
let DocumentsCreateManyCompanyInputEnvelope = class DocumentsCreateManyCompanyInputEnvelope {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [DocumentsCreateManyCompanyInput_1.DocumentsCreateManyCompanyInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], DocumentsCreateManyCompanyInputEnvelope.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], DocumentsCreateManyCompanyInputEnvelope.prototype, "skipDuplicates", void 0);
DocumentsCreateManyCompanyInputEnvelope = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("DocumentsCreateManyCompanyInputEnvelope", {
        isAbstract: true
    })
], DocumentsCreateManyCompanyInputEnvelope);
exports.DocumentsCreateManyCompanyInputEnvelope = DocumentsCreateManyCompanyInputEnvelope;
