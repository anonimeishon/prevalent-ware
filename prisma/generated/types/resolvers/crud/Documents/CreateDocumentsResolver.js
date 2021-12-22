"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDocumentsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const CreateDocumentsArgs_1 = require("./args/CreateDocumentsArgs");
const Documents_1 = require("../../../models/Documents");
const helpers_1 = require("../../../helpers");
let CreateDocumentsResolver = class CreateDocumentsResolver {
    async createDocuments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).documents.create({
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
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateDocumentsArgs_1.CreateDocumentsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CreateDocumentsResolver.prototype, "createDocuments", null);
CreateDocumentsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Documents_1.Documents)
], CreateDocumentsResolver);
exports.CreateDocumentsResolver = CreateDocumentsResolver;
