import { NestedEnumStatusFilter } from "../inputs/NestedEnumStatusFilter";
export declare class EnumStatusFilter {
    equals?: "approved" | "pending" | "rejected" | undefined;
    in?: Array<"approved" | "pending" | "rejected"> | undefined;
    notIn?: Array<"approved" | "pending" | "rejected"> | undefined;
    not?: NestedEnumStatusFilter | undefined;
}
