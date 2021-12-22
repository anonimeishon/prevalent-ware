import { CompanyRelationFilter } from "../inputs/CompanyRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class DocumentsWhereInput {
    AND?: DocumentsWhereInput[] | undefined;
    OR?: DocumentsWhereInput[] | undefined;
    NOT?: DocumentsWhereInput[] | undefined;
    company?: CompanyRelationFilter | undefined;
    companyId?: StringFilter | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    url?: StringFilter | undefined;
}
