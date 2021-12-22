import { BoolNullableWithAggregatesFilter } from "../inputs/BoolNullableWithAggregatesFilter";
import { EnumCompanyIdTypeWithAggregatesFilter } from "../inputs/EnumCompanyIdTypeWithAggregatesFilter";
import { EnumStatusWithAggregatesFilter } from "../inputs/EnumStatusWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class CompanyScalarWhereWithAggregatesInput {
    AND?: CompanyScalarWhereWithAggregatesInput[] | undefined;
    OR?: CompanyScalarWhereWithAggregatesInput[] | undefined;
    NOT?: CompanyScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    logo?: StringWithAggregatesFilter | undefined;
    companyName?: StringWithAggregatesFilter | undefined;
    socialReason?: StringWithAggregatesFilter | undefined;
    idType?: EnumCompanyIdTypeWithAggregatesFilter | undefined;
    companyId?: StringWithAggregatesFilter | undefined;
    isApproved?: BoolNullableWithAggregatesFilter | undefined;
    status?: EnumStatusWithAggregatesFilter | undefined;
    employeeAmount?: IntWithAggregatesFilter | undefined;
}
