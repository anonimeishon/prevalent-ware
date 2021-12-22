"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let CompanyCount = class CompanyCount {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CompanyCount.prototype, "documents", void 0);
CompanyCount = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("CompanyCount", {
        isAbstract: true
    })
], CompanyCount);
exports.CompanyCount = CompanyCount;
