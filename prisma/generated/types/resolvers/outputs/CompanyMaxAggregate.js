"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const CompanyIdType_1 = require("../../enums/CompanyIdType");
const Status_1 = require("../../enums/Status");
let CompanyMaxAggregate = class CompanyMaxAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyMaxAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyMaxAggregate.prototype, "logo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyMaxAggregate.prototype, "companyName", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyMaxAggregate.prototype, "socialReason", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyIdType_1.CompanyIdType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyMaxAggregate.prototype, "idType", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyMaxAggregate.prototype, "companyId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CompanyMaxAggregate.prototype, "isApproved", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Status_1.Status, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyMaxAggregate.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CompanyMaxAggregate.prototype, "employeeAmount", void 0);
CompanyMaxAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("CompanyMaxAggregate", {
        isAbstract: true
    })
], CompanyMaxAggregate);
exports.CompanyMaxAggregate = CompanyMaxAggregate;
