import { GraphQLResolveInfo } from "graphql";
import { UpsertDocumentsArgs } from "./args/UpsertDocumentsArgs";
import { Documents } from "../../../models/Documents";
export declare class UpsertDocumentsResolver {
    upsertDocuments(ctx: any, info: GraphQLResolveInfo, args: UpsertDocumentsArgs): Promise<Documents>;
}
