import { Company } from "../../../models/Company";
import { Documents } from "../../../models/Documents";
import { CompanyDocumentsArgs } from "./args/CompanyDocumentsArgs";
export declare class CompanyRelationsResolver {
    documents(company: Company, ctx: any, args: CompanyDocumentsArgs): Promise<Documents[]>;
}
