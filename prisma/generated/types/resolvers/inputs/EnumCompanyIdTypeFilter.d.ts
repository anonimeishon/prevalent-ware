import { NestedEnumCompanyIdTypeFilter } from "../inputs/NestedEnumCompanyIdTypeFilter";
export declare class EnumCompanyIdTypeFilter {
    equals?: "AT" | "NIT" | "ID" | undefined;
    in?: Array<"AT" | "NIT" | "ID"> | undefined;
    notIn?: Array<"AT" | "NIT" | "ID"> | undefined;
    not?: NestedEnumCompanyIdTypeFilter | undefined;
}
