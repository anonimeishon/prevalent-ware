import { Company } from "../../../models/Company";
import { Documents } from "../../../models/Documents";
export declare class DocumentsRelationsResolver {
    company(documents: Documents, ctx: any): Promise<Company>;
}
