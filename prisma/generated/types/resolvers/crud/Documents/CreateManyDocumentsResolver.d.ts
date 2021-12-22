import { GraphQLResolveInfo } from "graphql";
import { CreateManyDocumentsArgs } from "./args/CreateManyDocumentsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyDocumentsResolver {
    createManyDocuments(ctx: any, info: GraphQLResolveInfo, args: CreateManyDocumentsArgs): Promise<AffectedRowsOutput>;
}
