import { DocumentsCountOrderByAggregateInput } from "../inputs/DocumentsCountOrderByAggregateInput";
import { DocumentsMaxOrderByAggregateInput } from "../inputs/DocumentsMaxOrderByAggregateInput";
import { DocumentsMinOrderByAggregateInput } from "../inputs/DocumentsMinOrderByAggregateInput";
export declare class DocumentsOrderByWithAggregationInput {
    companyId?: "asc" | "desc" | undefined;
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    url?: "asc" | "desc" | undefined;
    _count?: DocumentsCountOrderByAggregateInput | undefined;
    _max?: DocumentsMaxOrderByAggregateInput | undefined;
    _min?: DocumentsMinOrderByAggregateInput | undefined;
}
