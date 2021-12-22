import { GraphQLResolveInfo } from "graphql";
import { CreateDocumentsArgs } from "./args/CreateDocumentsArgs";
import { Documents } from "../../../models/Documents";
export declare class CreateDocumentsResolver {
    createDocuments(ctx: any, info: GraphQLResolveInfo, args: CreateDocumentsArgs): Promise<Documents>;
}
