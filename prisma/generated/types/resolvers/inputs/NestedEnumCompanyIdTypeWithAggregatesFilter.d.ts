import { NestedEnumCompanyIdTypeFilter } from "../inputs/NestedEnumCompanyIdTypeFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumCompanyIdTypeWithAggregatesFilter {
    equals?: "AT" | "NIT" | "ID" | undefined;
    in?: Array<"AT" | "NIT" | "ID"> | undefined;
    notIn?: Array<"AT" | "NIT" | "ID"> | undefined;
    not?: NestedEnumCompanyIdTypeWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumCompanyIdTypeFilter | undefined;
    _max?: NestedEnumCompanyIdTypeFilter | undefined;
}
