import { GraphQLResolveInfo } from "graphql";
import { DeleteManyDocumentsArgs } from "./args/DeleteManyDocumentsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyDocumentsResolver {
    deleteManyDocuments(ctx: any, info: GraphQLResolveInfo, args: DeleteManyDocumentsArgs): Promise<AffectedRowsOutput>;
}
