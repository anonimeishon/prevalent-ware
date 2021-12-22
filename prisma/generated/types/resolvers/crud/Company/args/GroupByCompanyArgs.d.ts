import { CompanyOrderByWithAggregationInput } from "../../../inputs/CompanyOrderByWithAggregationInput";
import { CompanyScalarWhereWithAggregatesInput } from "../../../inputs/CompanyScalarWhereWithAggregatesInput";
import { CompanyWhereInput } from "../../../inputs/CompanyWhereInput";
export declare class GroupByCompanyArgs {
    where?: CompanyWhereInput | undefined;
    orderBy?: CompanyOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "logo" | "companyName" | "socialReason" | "idType" | "companyId" | "isApproved" | "status" | "employeeAmount">;
    having?: CompanyScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
