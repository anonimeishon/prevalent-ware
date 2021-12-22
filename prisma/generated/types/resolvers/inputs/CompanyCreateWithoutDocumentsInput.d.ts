export declare class CompanyCreateWithoutDocumentsInput {
    id?: string | undefined;
    logo: string;
    companyName: string;
    socialReason: string;
    idType: "AT" | "NIT" | "ID";
    companyId: string;
    isApproved?: boolean | undefined;
    status?: "approved" | "pending" | "rejected" | undefined;
    employeeAmount: number;
}
