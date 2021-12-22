import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { DocumentsListRelationFilter } from "../inputs/DocumentsListRelationFilter";
import { EnumCompanyIdTypeFilter } from "../inputs/EnumCompanyIdTypeFilter";
import { EnumStatusFilter } from "../inputs/EnumStatusFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class CompanyWhereInput {
    AND?: CompanyWhereInput[] | undefined;
    OR?: CompanyWhereInput[] | undefined;
    NOT?: CompanyWhereInput[] | undefined;
    id?: StringFilter | undefined;
    logo?: StringFilter | undefined;
    companyName?: StringFilter | undefined;
    socialReason?: StringFilter | undefined;
    idType?: EnumCompanyIdTypeFilter | undefined;
    companyId?: StringFilter | undefined;
    isApproved?: BoolNullableFilter | undefined;
    status?: EnumStatusFilter | undefined;
    employeeAmount?: IntFilter | undefined;
    documents?: DocumentsListRelationFilter | undefined;
}
