import { GraphQLResolveInfo } from "graphql";
import { FindFirstDocumentsArgs } from "./args/FindFirstDocumentsArgs";
import { Documents } from "../../../models/Documents";
export declare class FindFirstDocumentsResolver {
    findFirstDocuments(ctx: any, info: GraphQLResolveInfo, args: FindFirstDocumentsArgs): Promise<Documents | null>;
}
