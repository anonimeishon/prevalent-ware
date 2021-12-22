"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanySumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let CompanySumAggregate = class CompanySumAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CompanySumAggregate.prototype, "employeeAmount", void 0);
CompanySumAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("CompanySumAggregate", {
        isAbstract: true
    })
], CompanySumAggregate);
exports.CompanySumAggregate = CompanySumAggregate;
