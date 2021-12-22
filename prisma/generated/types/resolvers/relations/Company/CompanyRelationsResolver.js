"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Company_1 = require("../../../models/Company");
const Documents_1 = require("../../../models/Documents");
const CompanyDocumentsArgs_1 = require("./args/CompanyDocumentsArgs");
const helpers_1 = require("../../../helpers");
let CompanyRelationsResolver = class CompanyRelationsResolver {
    async documents(company, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).company.findUnique({
            where: {
                id: company.id,
            },
        }).documents(args);
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => [Documents_1.Documents], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Company_1.Company, Object, CompanyDocumentsArgs_1.CompanyDocumentsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CompanyRelationsResolver.prototype, "documents", null);
CompanyRelationsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Company_1.Company)
], CompanyRelationsResolver);
exports.CompanyRelationsResolver = CompanyRelationsResolver;
