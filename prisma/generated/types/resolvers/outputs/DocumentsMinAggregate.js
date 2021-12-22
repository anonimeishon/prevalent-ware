"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let DocumentsMinAggregate = class DocumentsMinAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentsMinAggregate.prototype, "companyId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentsMinAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentsMinAggregate.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentsMinAggregate.prototype, "url", void 0);
DocumentsMinAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("DocumentsMinAggregate", {
        isAbstract: true
    })
], DocumentsMinAggregate);
exports.DocumentsMinAggregate = DocumentsMinAggregate;
