import { GraphQLResolveInfo } from "graphql";
import { UpdateDocumentsArgs } from "./args/UpdateDocumentsArgs";
import { Documents } from "../../../models/Documents";
export declare class UpdateDocumentsResolver {
    updateDocuments(ctx: any, info: GraphQLResolveInfo, args: UpdateDocumentsArgs): Promise<Documents | null>;
}
