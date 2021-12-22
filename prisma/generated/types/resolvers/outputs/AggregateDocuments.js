"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateDocuments = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DocumentsCountAggregate_1 = require("../outputs/DocumentsCountAggregate");
const DocumentsMaxAggregate_1 = require("../outputs/DocumentsMaxAggregate");
const DocumentsMinAggregate_1 = require("../outputs/DocumentsMinAggregate");
let AggregateDocuments = class AggregateDocuments {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentsCountAggregate_1.DocumentsCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DocumentsCountAggregate_1.DocumentsCountAggregate)
], AggregateDocuments.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentsMinAggregate_1.DocumentsMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DocumentsMinAggregate_1.DocumentsMinAggregate)
], AggregateDocuments.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentsMaxAggregate_1.DocumentsMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DocumentsMaxAggregate_1.DocumentsMaxAggregate)
], AggregateDocuments.prototype, "_max", void 0);
AggregateDocuments = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("AggregateDocuments", {
        isAbstract: true
    })
], AggregateDocuments);
exports.AggregateDocuments = AggregateDocuments;
