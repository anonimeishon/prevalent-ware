import { DocumentsCountAggregate } from "../outputs/DocumentsCountAggregate";
import { DocumentsMaxAggregate } from "../outputs/DocumentsMaxAggregate";
import { DocumentsMinAggregate } from "../outputs/DocumentsMinAggregate";
export declare class AggregateDocuments {
    _count: DocumentsCountAggregate | null;
    _min: DocumentsMinAggregate | null;
    _max: DocumentsMaxAggregate | null;
}
