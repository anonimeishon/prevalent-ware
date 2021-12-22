import { Documents } from "../models/Documents";
import { CompanyCount } from "../resolvers/outputs/CompanyCount";
export declare class Company {
    id: string;
    logo: string;
    companyName: string;
    socialReason: string;
    idType: "AT" | "NIT" | "ID";
    companyId: string;
    isApproved?: boolean | null;
    status: "approved" | "pending" | "rejected";
    employeeAmount: number;
    documents?: Documents[];
    _count?: CompanyCount | null;
}
