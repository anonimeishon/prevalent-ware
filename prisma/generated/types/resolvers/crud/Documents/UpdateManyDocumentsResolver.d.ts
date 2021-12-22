import { GraphQLResolveInfo } from "graphql";
import { UpdateManyDocumentsArgs } from "./args/UpdateManyDocumentsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyDocumentsResolver {
    updateManyDocuments(ctx: any, info: GraphQLResolveInfo, args: UpdateManyDocumentsArgs): Promise<AffectedRowsOutput>;
}
