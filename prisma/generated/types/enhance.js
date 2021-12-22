"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const tslib_1 = require("tslib");
const tslib = (0, tslib_1.__importStar)(require("tslib"));
const crudResolvers = (0, tslib_1.__importStar)(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = (0, tslib_1.__importStar)(require("./resolvers/crud/args.index"));
const actionResolvers = (0, tslib_1.__importStar)(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = (0, tslib_1.__importStar)(require("./resolvers/relations/resolvers.index"));
const models = (0, tslib_1.__importStar)(require("./models"));
const outputTypes = (0, tslib_1.__importStar)(require("./resolvers/outputs"));
const inputTypes = (0, tslib_1.__importStar)(require("./resolvers/inputs"));
const crudResolversMap = {
    Company: crudResolvers.CompanyCrudResolver,
    Documents: crudResolvers.DocumentsCrudResolver
};
const actionResolversMap = {
    Company: {
        company: actionResolvers.FindUniqueCompanyResolver,
        findFirstCompany: actionResolvers.FindFirstCompanyResolver,
        companies: actionResolvers.FindManyCompanyResolver,
        createCompany: actionResolvers.CreateCompanyResolver,
        createManyCompany: actionResolvers.CreateManyCompanyResolver,
        deleteCompany: actionResolvers.DeleteCompanyResolver,
        updateCompany: actionResolvers.UpdateCompanyResolver,
        deleteManyCompany: actionResolvers.DeleteManyCompanyResolver,
        updateManyCompany: actionResolvers.UpdateManyCompanyResolver,
        upsertCompany: actionResolvers.UpsertCompanyResolver,
        aggregateCompany: actionResolvers.AggregateCompanyResolver,
        groupByCompany: actionResolvers.GroupByCompanyResolver
    },
    Documents: {
        findUniqueDocuments: actionResolvers.FindUniqueDocumentsResolver,
        findFirstDocuments: actionResolvers.FindFirstDocumentsResolver,
        findManyDocuments: actionResolvers.FindManyDocumentsResolver,
        createDocuments: actionResolvers.CreateDocumentsResolver,
        createManyDocuments: actionResolvers.CreateManyDocumentsResolver,
        deleteDocuments: actionResolvers.DeleteDocumentsResolver,
        updateDocuments: actionResolvers.UpdateDocumentsResolver,
        deleteManyDocuments: actionResolvers.DeleteManyDocumentsResolver,
        updateManyDocuments: actionResolvers.UpdateManyDocumentsResolver,
        upsertDocuments: actionResolvers.UpsertDocumentsResolver,
        aggregateDocuments: actionResolvers.AggregateDocumentsResolver,
        groupByDocuments: actionResolvers.GroupByDocumentsResolver
    }
};
const crudResolversInfo = {
    Company: ["company", "findFirstCompany", "companies", "createCompany", "createManyCompany", "deleteCompany", "updateCompany", "deleteManyCompany", "updateManyCompany", "upsertCompany", "aggregateCompany", "groupByCompany"],
    Documents: ["findUniqueDocuments", "findFirstDocuments", "findManyDocuments", "createDocuments", "createManyDocuments", "deleteDocuments", "updateDocuments", "deleteManyDocuments", "updateManyDocuments", "upsertDocuments", "aggregateDocuments", "groupByDocuments"]
};
const argsInfo = {
    FindUniqueCompanyArgs: ["where"],
    FindFirstCompanyArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyCompanyArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateCompanyArgs: ["data"],
    CreateManyCompanyArgs: ["data", "skipDuplicates"],
    DeleteCompanyArgs: ["where"],
    UpdateCompanyArgs: ["data", "where"],
    DeleteManyCompanyArgs: ["where"],
    UpdateManyCompanyArgs: ["data", "where"],
    UpsertCompanyArgs: ["where", "create", "update"],
    AggregateCompanyArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByCompanyArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueDocumentsArgs: ["where"],
    FindFirstDocumentsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyDocumentsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateDocumentsArgs: ["data"],
    CreateManyDocumentsArgs: ["data", "skipDuplicates"],
    DeleteDocumentsArgs: ["where"],
    UpdateDocumentsArgs: ["data", "where"],
    DeleteManyDocumentsArgs: ["where"],
    UpdateManyDocumentsArgs: ["data", "where"],
    UpsertDocumentsArgs: ["where", "create", "update"],
    AggregateDocumentsArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByDocumentsArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        if (resolverActionsConfig._all) {
            const allActionsDecorators = resolverActionsConfig._all;
            const resolverActionNames = crudResolversInfo[modelName];
            for (const resolverActionName of resolverActionNames) {
                const actionTarget = actionResolversConfig[resolverActionName].prototype;
                tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
                tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
            }
        }
        const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(it => it !== "_all");
        for (const resolverActionName of resolverActionsToApply) {
            const decorators = resolverActionsConfig[resolverActionName];
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
const relationResolversMap = {
    Company: relationResolvers.CompanyRelationsResolver,
    Documents: relationResolvers.DocumentsRelationsResolver
};
const relationResolversInfo = {
    Company: ["documents"],
    Documents: ["company"]
};
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        if (relationResolverActionsConfig._all) {
            const allActionsDecorators = relationResolverActionsConfig._all;
            const relationResolverActionNames = relationResolversInfo[modelName];
            for (const relationResolverActionName of relationResolverActionNames) {
                tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
            }
        }
        const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(it => it !== "_all");
        for (const relationResolverActionName of relationResolverActionsToApply) {
            const decorators = relationResolverActionsConfig[relationResolverActionName];
            tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        if (enhanceConfig.fields._all) {
            const allFieldsDecorators = enhanceConfig.fields._all;
            for (const typeFieldName of typeFieldNames) {
                tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
            }
        }
        const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(it => it !== "_all");
        for (const typeFieldName of configFieldsToApply) {
            const fieldDecorators = enhanceConfig.fields[typeFieldName];
            tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    Company: ["id", "logo", "companyName", "socialReason", "idType", "companyId", "isApproved", "status", "employeeAmount"],
    Documents: ["companyId", "id", "name", "url"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const outputsInfo = {
    AggregateCompany: ["_count", "_avg", "_sum", "_min", "_max"],
    CompanyGroupBy: ["id", "logo", "companyName", "socialReason", "idType", "companyId", "isApproved", "status", "employeeAmount", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateDocuments: ["_count", "_min", "_max"],
    DocumentsGroupBy: ["companyId", "id", "name", "url", "_count", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    CompanyCount: ["documents"],
    CompanyCountAggregate: ["id", "logo", "companyName", "socialReason", "idType", "companyId", "isApproved", "status", "employeeAmount", "_all"],
    CompanyAvgAggregate: ["employeeAmount"],
    CompanySumAggregate: ["employeeAmount"],
    CompanyMinAggregate: ["id", "logo", "companyName", "socialReason", "idType", "companyId", "isApproved", "status", "employeeAmount"],
    CompanyMaxAggregate: ["id", "logo", "companyName", "socialReason", "idType", "companyId", "isApproved", "status", "employeeAmount"],
    DocumentsCountAggregate: ["companyId", "id", "name", "url", "_all"],
    DocumentsMinAggregate: ["companyId", "id", "name", "url"],
    DocumentsMaxAggregate: ["companyId", "id", "name", "url"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
const inputsInfo = {
    CompanyWhereInput: ["AND", "OR", "NOT", "id", "logo", "companyName", "socialReason", "idType", "companyId", "isApproved", "status", "employeeAmount", "documents"],
    CompanyOrderByWithRelationInput: ["id", "logo", "companyName", "socialReason", "idType", "companyId", "isApproved", "status", "employeeAmount", "documents"],
    CompanyWhereUniqueInput: ["id"],
    CompanyOrderByWithAggregationInput: ["id", "logo", "companyName", "socialReason", "idType", "companyId", "isApproved", "status", "employeeAmount", "_count", "_avg", "_max", "_min", "_sum"],
    CompanyScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "logo", "companyName", "socialReason", "idType", "companyId", "isApproved", "status", "employeeAmount"],
    DocumentsWhereInput: ["AND", "OR", "NOT", "company", "companyId", "id", "name", "url"],
    DocumentsOrderByWithRelationInput: ["company", "companyId", "id", "name", "url"],
    DocumentsWhereUniqueInput: ["id"],
    DocumentsOrderByWithAggregationInput: ["companyId", "id", "name", "url", "_count", "_max", "_min"],
    DocumentsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "companyId", "id", "name", "url"],
    CompanyCreateInput: ["id", "logo", "companyName", "socialReason", "idType", "companyId", "isApproved", "status", "employeeAmount", "documents"],
    CompanyUpdateInput: ["id", "logo", "companyName", "socialReason", "idType", "companyId", "isApproved", "status", "employeeAmount", "documents"],
    CompanyCreateManyInput: ["id", "logo", "companyName", "socialReason", "idType", "companyId", "isApproved", "status", "employeeAmount"],
    CompanyUpdateManyMutationInput: ["id", "logo", "companyName", "socialReason", "idType", "companyId", "isApproved", "status", "employeeAmount"],
    DocumentsCreateInput: ["id", "name", "url", "company"],
    DocumentsUpdateInput: ["id", "name", "url", "company"],
    DocumentsCreateManyInput: ["companyId", "id", "name", "url"],
    DocumentsUpdateManyMutationInput: ["id", "name", "url"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    EnumCompanyIdTypeFilter: ["equals", "in", "notIn", "not"],
    BoolNullableFilter: ["equals", "not"],
    EnumStatusFilter: ["equals", "in", "notIn", "not"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    DocumentsListRelationFilter: ["every", "some", "none"],
    DocumentsOrderByRelationAggregateInput: ["_count"],
    CompanyCountOrderByAggregateInput: ["id", "logo", "companyName", "socialReason", "idType", "companyId", "isApproved", "status", "employeeAmount"],
    CompanyAvgOrderByAggregateInput: ["employeeAmount"],
    CompanyMaxOrderByAggregateInput: ["id", "logo", "companyName", "socialReason", "idType", "companyId", "isApproved", "status", "employeeAmount"],
    CompanyMinOrderByAggregateInput: ["id", "logo", "companyName", "socialReason", "idType", "companyId", "isApproved", "status", "employeeAmount"],
    CompanySumOrderByAggregateInput: ["employeeAmount"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    EnumCompanyIdTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    BoolNullableWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    EnumStatusWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    CompanyRelationFilter: ["is", "isNot"],
    DocumentsCountOrderByAggregateInput: ["companyId", "id", "name", "url"],
    DocumentsMaxOrderByAggregateInput: ["companyId", "id", "name", "url"],
    DocumentsMinOrderByAggregateInput: ["companyId", "id", "name", "url"],
    DocumentsCreateNestedManyWithoutCompanyInput: ["create", "connectOrCreate", "createMany", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    EnumCompanyIdTypeFieldUpdateOperationsInput: ["set"],
    NullableBoolFieldUpdateOperationsInput: ["set"],
    EnumStatusFieldUpdateOperationsInput: ["set"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    DocumentsUpdateManyWithoutCompanyInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    CompanyCreateNestedOneWithoutDocumentsInput: ["create", "connectOrCreate", "connect"],
    CompanyUpdateOneRequiredWithoutDocumentsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedEnumCompanyIdTypeFilter: ["equals", "in", "notIn", "not"],
    NestedBoolNullableFilter: ["equals", "not"],
    NestedEnumStatusFilter: ["equals", "in", "notIn", "not"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedEnumCompanyIdTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    NestedBoolNullableWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedEnumStatusWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    DocumentsCreateWithoutCompanyInput: ["id", "name", "url"],
    DocumentsCreateOrConnectWithoutCompanyInput: ["where", "create"],
    DocumentsCreateManyCompanyInputEnvelope: ["data", "skipDuplicates"],
    DocumentsUpsertWithWhereUniqueWithoutCompanyInput: ["where", "update", "create"],
    DocumentsUpdateWithWhereUniqueWithoutCompanyInput: ["where", "data"],
    DocumentsUpdateManyWithWhereWithoutCompanyInput: ["where", "data"],
    DocumentsScalarWhereInput: ["AND", "OR", "NOT", "companyId", "id", "name", "url"],
    CompanyCreateWithoutDocumentsInput: ["id", "logo", "companyName", "socialReason", "idType", "companyId", "isApproved", "status", "employeeAmount"],
    CompanyCreateOrConnectWithoutDocumentsInput: ["where", "create"],
    CompanyUpsertWithoutDocumentsInput: ["update", "create"],
    CompanyUpdateWithoutDocumentsInput: ["id", "logo", "companyName", "socialReason", "idType", "companyId", "isApproved", "status", "employeeAmount"],
    DocumentsCreateManyCompanyInput: ["id", "name", "url"],
    DocumentsUpdateWithoutCompanyInput: ["id", "name", "url"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
