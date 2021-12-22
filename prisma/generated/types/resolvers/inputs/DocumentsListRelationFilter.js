"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DocumentsWhereInput_1 = require("../inputs/DocumentsWhereInput");
let DocumentsListRelationFilter = class DocumentsListRelationFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentsWhereInput_1.DocumentsWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DocumentsWhereInput_1.DocumentsWhereInput)
], DocumentsListRelationFilter.prototype, "every", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentsWhereInput_1.DocumentsWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DocumentsWhereInput_1.DocumentsWhereInput)
], DocumentsListRelationFilter.prototype, "some", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentsWhereInput_1.DocumentsWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DocumentsWhereInput_1.DocumentsWhereInput)
], DocumentsListRelationFilter.prototype, "none", void 0);
DocumentsListRelationFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("DocumentsListRelationFilter", {
        isAbstract: true
    })
], DocumentsListRelationFilter);
exports.DocumentsListRelationFilter = DocumentsListRelationFilter;
