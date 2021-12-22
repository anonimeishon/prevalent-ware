import { NestedEnumStatusFilter } from "../inputs/NestedEnumStatusFilter";
import { NestedEnumStatusWithAggregatesFilter } from "../inputs/NestedEnumStatusWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumStatusWithAggregatesFilter {
    equals?: "approved" | "pending" | "rejected" | undefined;
    in?: Array<"approved" | "pending" | "rejected"> | undefined;
    notIn?: Array<"approved" | "pending" | "rejected"> | undefined;
    not?: NestedEnumStatusWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumStatusFilter | undefined;
    _max?: NestedEnumStatusFilter | undefined;
}
