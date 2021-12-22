"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertDocumentsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const UpsertDocumentsArgs_1 = require("./args/UpsertDocumentsArgs");
const Documents_1 = require("../../../models/Documents");
const helpers_1 = require("../../../helpers");
let UpsertDocumentsResolver = class UpsertDocumentsResolver {
    async upsertDocuments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).documents.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Documents_1.Documents, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpsertDocumentsArgs_1.UpsertDocumentsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UpsertDocumentsResolver.prototype, "upsertDocuments", null);
UpsertDocumentsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Documents_1.Documents)
], UpsertDocumentsResolver);
exports.UpsertDocumentsResolver = UpsertDocumentsResolver;
