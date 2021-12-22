"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateDocumentsArgs_1 = require("./args/AggregateDocumentsArgs");
const CreateDocumentsArgs_1 = require("./args/CreateDocumentsArgs");
const CreateManyDocumentsArgs_1 = require("./args/CreateManyDocumentsArgs");
const DeleteDocumentsArgs_1 = require("./args/DeleteDocumentsArgs");
const DeleteManyDocumentsArgs_1 = require("./args/DeleteManyDocumentsArgs");
const FindFirstDocumentsArgs_1 = require("./args/FindFirstDocumentsArgs");
const FindManyDocumentsArgs_1 = require("./args/FindManyDocumentsArgs");
const FindUniqueDocumentsArgs_1 = require("./args/FindUniqueDocumentsArgs");
const GroupByDocumentsArgs_1 = require("./args/GroupByDocumentsArgs");
const UpdateDocumentsArgs_1 = require("./args/UpdateDocumentsArgs");
const UpdateManyDocumentsArgs_1 = require("./args/UpdateManyDocumentsArgs");
const UpsertDocumentsArgs_1 = require("./args/UpsertDocumentsArgs");
const helpers_1 = require("../../../helpers");
const Documents_1 = require("../../../models/Documents");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateDocuments_1 = require("../../outputs/AggregateDocuments");
const DocumentsGroupBy_1 = require("../../outputs/DocumentsGroupBy");
let DocumentsCrudResolver = class DocumentsCrudResolver {
    async findUniqueDocuments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).documents.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstDocuments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).documents.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyDocuments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).documents.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createDocuments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).documents.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyDocuments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).documents.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteDocuments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).documents.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateDocuments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).documents.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyDocuments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).documents.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyDocuments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).documents.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertDocuments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).documents.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateDocuments(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).documents.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByDocuments(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).documents.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Documents_1.Documents, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindUniqueDocumentsArgs_1.FindUniqueDocumentsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DocumentsCrudResolver.prototype, "findUniqueDocuments", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Documents_1.Documents, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindFirstDocumentsArgs_1.FindFirstDocumentsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DocumentsCrudResolver.prototype, "findFirstDocuments", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [Documents_1.Documents], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindManyDocumentsArgs_1.FindManyDocumentsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DocumentsCrudResolver.prototype, "findManyDocuments", null);
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
], DocumentsCrudResolver.prototype, "createDocuments", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateManyDocumentsArgs_1.CreateManyDocumentsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DocumentsCrudResolver.prototype, "createManyDocuments", null);
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
], DocumentsCrudResolver.prototype, "deleteDocuments", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Documents_1.Documents, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateDocumentsArgs_1.UpdateDocumentsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DocumentsCrudResolver.prototype, "updateDocuments", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteManyDocumentsArgs_1.DeleteManyDocumentsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DocumentsCrudResolver.prototype, "deleteManyDocuments", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateManyDocumentsArgs_1.UpdateManyDocumentsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DocumentsCrudResolver.prototype, "updateManyDocuments", null);
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
], DocumentsCrudResolver.prototype, "upsertDocuments", null);
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
], DocumentsCrudResolver.prototype, "aggregateDocuments", null);
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
], DocumentsCrudResolver.prototype, "groupByDocuments", null);
DocumentsCrudResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Documents_1.Documents)
], DocumentsCrudResolver);
exports.DocumentsCrudResolver = DocumentsCrudResolver;
