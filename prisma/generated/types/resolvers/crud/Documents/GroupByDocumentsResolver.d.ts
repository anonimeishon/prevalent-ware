import { GraphQLResolveInfo } from "graphql";
import { GroupByDocumentsArgs } from "./args/GroupByDocumentsArgs";
import { DocumentsGroupBy } from "../../outputs/DocumentsGroupBy";
export declare class GroupByDocumentsResolver {
    groupByDocuments(ctx: any, info: GraphQLResolveInfo, args: GroupByDocumentsArgs): Promise<DocumentsGroupBy[]>;
}
