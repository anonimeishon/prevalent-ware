import { GraphQLResolveInfo } from "graphql";
import { DeleteDocumentsArgs } from "./args/DeleteDocumentsArgs";
import { Documents } from "../../../models/Documents";
export declare class DeleteDocumentsResolver {
    deleteDocuments(ctx: any, info: GraphQLResolveInfo, args: DeleteDocumentsArgs): Promise<Documents | null>;
}
