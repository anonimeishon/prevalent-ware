import { CompanyAvgAggregate } from "../outputs/CompanyAvgAggregate";
import { CompanyCountAggregate } from "../outputs/CompanyCountAggregate";
import { CompanyMaxAggregate } from "../outputs/CompanyMaxAggregate";
import { CompanyMinAggregate } from "../outputs/CompanyMinAggregate";
import { CompanySumAggregate } from "../outputs/CompanySumAggregate";
export declare class CompanyGroupBy {
    id: string;
    logo: string;
    companyName: string;
    socialReason: string;
    idType: "AT" | "NIT" | "ID";
    companyId: string;
    isApproved: boolean | null;
    status: "approved" | "pending" | "rejected";
    employeeAmount: number;
    _count: CompanyCountAggregate | null;
    _avg: CompanyAvgAggregate | null;
    _sum: CompanySumAggregate | null;
    _min: CompanyMinAggregate | null;
    _max: CompanyMaxAggregate | null;
}
