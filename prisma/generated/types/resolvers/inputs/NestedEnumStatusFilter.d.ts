export declare class NestedEnumStatusFilter {
    equals?: "approved" | "pending" | "rejected" | undefined;
    in?: Array<"approved" | "pending" | "rejected"> | undefined;
    notIn?: Array<"approved" | "pending" | "rejected"> | undefined;
    not?: NestedEnumStatusFilter | undefined;
}
