import { DocumentsCountAggregate } from "../outputs/DocumentsCountAggregate";
import { DocumentsMaxAggregate } from "../outputs/DocumentsMaxAggregate";
import { DocumentsMinAggregate } from "../outputs/DocumentsMinAggregate";
export declare class DocumentsGroupBy {
    companyId: string;
    id: string;
    name: string;
    url: string;
    _count: DocumentsCountAggregate | null;
    _min: DocumentsMinAggregate | null;
    _max: DocumentsMaxAggregate | null;
}
