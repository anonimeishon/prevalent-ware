import { GraphQLResolveInfo } from "graphql";
import { FindManyDocumentsArgs } from "./args/FindManyDocumentsArgs";
import { Documents } from "../../../models/Documents";
export declare class FindManyDocumentsResolver {
    findManyDocuments(ctx: any, info: GraphQLResolveInfo, args: FindManyDocumentsArgs): Promise<Documents[]>;
}
