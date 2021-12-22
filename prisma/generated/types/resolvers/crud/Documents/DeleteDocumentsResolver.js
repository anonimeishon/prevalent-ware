"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteDocumentsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const DeleteDocumentsArgs_1 = require("./args/DeleteDocumentsArgs");
const Documents_1 = require("../../../models/Documents");
const helpers_1 = require("../../../helpers");
let DeleteDocumentsResolver = class DeleteDocumentsResolver {
    async deleteDocuments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).documents.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Documents_1.Documents, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteDocumentsArgs_1.DeleteDocumentsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DeleteDocumentsResolver.prototype, "deleteDocuments", null);
DeleteDocumentsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Documents_1.Documents)
], DeleteDocumentsResolver);
exports.DeleteDocumentsResolver = DeleteDocumentsResolver;
