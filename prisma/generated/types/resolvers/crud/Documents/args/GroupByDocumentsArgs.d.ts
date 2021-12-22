import { DocumentsOrderByWithAggregationInput } from "../../../inputs/DocumentsOrderByWithAggregationInput";
import { DocumentsScalarWhereWithAggregatesInput } from "../../../inputs/DocumentsScalarWhereWithAggregatesInput";
import { DocumentsWhereInput } from "../../../inputs/DocumentsWhereInput";
export declare class GroupByDocumentsArgs {
    where?: DocumentsWhereInput | undefined;
    orderBy?: DocumentsOrderByWithAggregationInput[] | undefined;
    by: Array<"companyId" | "id" | "name" | "url">;
    having?: DocumentsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
