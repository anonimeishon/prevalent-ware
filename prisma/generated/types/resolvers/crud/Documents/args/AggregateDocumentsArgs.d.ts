import { DocumentsOrderByWithRelationInput } from "../../../inputs/DocumentsOrderByWithRelationInput";
import { DocumentsWhereInput } from "../../../inputs/DocumentsWhereInput";
import { DocumentsWhereUniqueInput } from "../../../inputs/DocumentsWhereUniqueInput";
export declare class AggregateDocumentsArgs {
    where?: DocumentsWhereInput | undefined;
    orderBy?: DocumentsOrderByWithRelationInput[] | undefined;
    cursor?: DocumentsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
