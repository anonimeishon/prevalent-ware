"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let CompanyAvgAggregate = class CompanyAvgAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CompanyAvgAggregate.prototype, "employeeAmount", void 0);
CompanyAvgAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("CompanyAvgAggregate", {
        isAbstract: true
    })
], CompanyAvgAggregate);
exports.CompanyAvgAggregate = CompanyAvgAggregate;
