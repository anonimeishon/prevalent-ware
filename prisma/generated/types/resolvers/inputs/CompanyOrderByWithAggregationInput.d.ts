import { CompanyAvgOrderByAggregateInput } from "../inputs/CompanyAvgOrderByAggregateInput";
import { CompanyCountOrderByAggregateInput } from "../inputs/CompanyCountOrderByAggregateInput";
import { CompanyMaxOrderByAggregateInput } from "../inputs/CompanyMaxOrderByAggregateInput";
import { CompanyMinOrderByAggregateInput } from "../inputs/CompanyMinOrderByAggregateInput";
import { CompanySumOrderByAggregateInput } from "../inputs/CompanySumOrderByAggregateInput";
export declare class CompanyOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    logo?: "asc" | "desc" | undefined;
    companyName?: "asc" | "desc" | undefined;
    socialReason?: "asc" | "desc" | undefined;
    idType?: "asc" | "desc" | undefined;
    companyId?: "asc" | "desc" | undefined;
    isApproved?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    employeeAmount?: "asc" | "desc" | undefined;
    _count?: CompanyCountOrderByAggregateInput | undefined;
    _avg?: CompanyAvgOrderByAggregateInput | undefined;
    _max?: CompanyMaxOrderByAggregateInput | undefined;
    _min?: CompanyMinOrderByAggregateInput | undefined;
    _sum?: CompanySumOrderByAggregateInput | undefined;
}
