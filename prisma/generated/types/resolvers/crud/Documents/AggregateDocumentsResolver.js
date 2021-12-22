"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateDocumentsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateDocumentsArgs_1 = require("./args/AggregateDocumentsArgs");
const Documents_1 = require("../../../models/Documents");
const AggregateDocuments_1 = require("../../outputs/AggregateDocuments");
const helpers_1 = require("../../../helpers");
let AggregateDocumentsResolver = class AggregateDocumentsResolver {
    async aggregateDocuments(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).documents.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateDocuments_1.AggregateDocuments, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateDocumentsArgs_1.AggregateDocumentsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AggregateDocumentsResolver.prototype, "aggregateDocuments", null);
AggregateDocumentsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Documents_1.Documents)
], AggregateDocumentsResolver);
exports.AggregateDocumentsResolver = AggregateDocumentsResolver;
