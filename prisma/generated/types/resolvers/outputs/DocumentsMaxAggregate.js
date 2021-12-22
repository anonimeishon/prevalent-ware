"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let DocumentsMaxAggregate = class DocumentsMaxAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentsMaxAggregate.prototype, "companyId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentsMaxAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentsMaxAggregate.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentsMaxAggregate.prototype, "url", void 0);
DocumentsMaxAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("DocumentsMaxAggregate", {
        isAbstract: true
    })
], DocumentsMaxAggregate);
exports.DocumentsMaxAggregate = DocumentsMaxAggregate;
