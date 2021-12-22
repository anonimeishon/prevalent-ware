import { DocumentsOrderByRelationAggregateInput } from "../inputs/DocumentsOrderByRelationAggregateInput";
export declare class CompanyOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    logo?: "asc" | "desc" | undefined;
    companyName?: "asc" | "desc" | undefined;
    socialReason?: "asc" | "desc" | undefined;
    idType?: "asc" | "desc" | undefined;
    companyId?: "asc" | "desc" | undefined;
    isApproved?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    employeeAmount?: "asc" | "desc" | undefined;
    documents?: DocumentsOrderByRelationAggregateInput | undefined;
}
