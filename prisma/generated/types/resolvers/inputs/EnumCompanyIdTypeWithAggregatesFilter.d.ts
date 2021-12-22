import { NestedEnumCompanyIdTypeFilter } from "../inputs/NestedEnumCompanyIdTypeFilter";
import { NestedEnumCompanyIdTypeWithAggregatesFilter } from "../inputs/NestedEnumCompanyIdTypeWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumCompanyIdTypeWithAggregatesFilter {
    equals?: "AT" | "NIT" | "ID" | undefined;
    in?: Array<"AT" | "NIT" | "ID"> | undefined;
    notIn?: Array<"AT" | "NIT" | "ID"> | undefined;
    not?: NestedEnumCompanyIdTypeWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumCompanyIdTypeFilter | undefined;
    _max?: NestedEnumCompanyIdTypeFilter | undefined;
}
