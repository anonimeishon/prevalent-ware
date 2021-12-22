"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByDocumentsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const GroupByDocumentsArgs_1 = require("./args/GroupByDocumentsArgs");
const Documents_1 = require("../../../models/Documents");
const DocumentsGroupBy_1 = require("../../outputs/DocumentsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByDocumentsResolver = class GroupByDocumentsResolver {
    async groupByDocuments(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).documents.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [DocumentsGroupBy_1.DocumentsGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupByDocumentsArgs_1.GroupByDocumentsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], GroupByDocumentsResolver.prototype, "groupByDocuments", null);
GroupByDocumentsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Documents_1.Documents)
], GroupByDocumentsResolver);
exports.GroupByDocumentsResolver = GroupByDocumentsResolver;
