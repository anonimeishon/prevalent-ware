"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let CompanyWhereUniqueInput = class CompanyWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyWhereUniqueInput.prototype, "id", void 0);
CompanyWhereUniqueInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("CompanyWhereUniqueInput", {
        isAbstract: true
    })
], CompanyWhereUniqueInput);
exports.CompanyWhereUniqueInput = CompanyWhereUniqueInput;
