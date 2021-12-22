"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DocumentsCountAggregate_1 = require("../outputs/DocumentsCountAggregate");
const DocumentsMaxAggregate_1 = require("../outputs/DocumentsMaxAggregate");
const DocumentsMinAggregate_1 = require("../outputs/DocumentsMinAggregate");
let DocumentsGroupBy = class DocumentsGroupBy {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentsGroupBy.prototype, "companyId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentsGroupBy.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentsGroupBy.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentsGroupBy.prototype, "url", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentsCountAggregate_1.DocumentsCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DocumentsCountAggregate_1.DocumentsCountAggregate)
], DocumentsGroupBy.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentsMinAggregate_1.DocumentsMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DocumentsMinAggregate_1.DocumentsMinAggregate)
], DocumentsGroupBy.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentsMaxAggregate_1.DocumentsMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DocumentsMaxAggregate_1.DocumentsMaxAggregate)
], DocumentsGroupBy.prototype, "_max", void 0);
DocumentsGroupBy = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("DocumentsGroupBy", {
        isAbstract: true
    })
], DocumentsGroupBy);
exports.DocumentsGroupBy = DocumentsGroupBy;
