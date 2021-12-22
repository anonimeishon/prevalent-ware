import { GraphQLResolveInfo } from "graphql";
import { FindUniqueDocumentsArgs } from "./args/FindUniqueDocumentsArgs";
import { Documents } from "../../../models/Documents";
export declare class FindUniqueDocumentsResolver {
    findUniqueDocuments(ctx: any, info: GraphQLResolveInfo, args: FindUniqueDocumentsArgs): Promise<Documents | null>;
}
