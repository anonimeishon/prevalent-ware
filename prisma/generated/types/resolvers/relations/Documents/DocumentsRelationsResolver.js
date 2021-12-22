"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Company_1 = require("../../../models/Company");
const Documents_1 = require("../../../models/Documents");
const helpers_1 = require("../../../helpers");
let DocumentsRelationsResolver = class DocumentsRelationsResolver {
    async company(documents, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).documents.findUnique({
            where: {
                id: documents.id,
            },
        }).company({});
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => Company_1.Company, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Documents_1.Documents, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DocumentsRelationsResolver.prototype, "company", null);
DocumentsRelationsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Documents_1.Documents)
], DocumentsRelationsResolver);
exports.DocumentsRelationsResolver = DocumentsRelationsResolver;
