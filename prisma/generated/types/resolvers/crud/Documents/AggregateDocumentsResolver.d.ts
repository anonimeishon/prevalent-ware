import { GraphQLResolveInfo } from "graphql";
import { AggregateDocumentsArgs } from "./args/AggregateDocumentsArgs";
import { AggregateDocuments } from "../../outputs/AggregateDocuments";
export declare class AggregateDocumentsResolver {
    aggregateDocuments(ctx: any, info: GraphQLResolveInfo, args: AggregateDocumentsArgs): Promise<AggregateDocuments>;
}
