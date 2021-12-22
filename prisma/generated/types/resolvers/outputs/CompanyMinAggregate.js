"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const CompanyIdType_1 = require("../../enums/CompanyIdType");
const Status_1 = require("../../enums/Status");
let CompanyMinAggregate = class CompanyMinAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyMinAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyMinAggregate.prototype, "logo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyMinAggregate.prototype, "companyName", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyMinAggregate.prototype, "socialReason", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyIdType_1.CompanyIdType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyMinAggregate.prototype, "idType", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyMinAggregate.prototype, "companyId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CompanyMinAggregate.prototype, "isApproved", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Status_1.Status, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyMinAggregate.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CompanyMinAggregate.prototype, "employeeAmount", void 0);
CompanyMinAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("CompanyMinAggregate", {
        isAbstract: true
    })
], CompanyMinAggregate);
exports.CompanyMinAggregate = CompanyMinAggregate;
