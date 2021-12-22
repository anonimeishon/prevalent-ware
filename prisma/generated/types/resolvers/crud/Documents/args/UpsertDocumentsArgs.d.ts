import { DocumentsCreateInput } from "../../../inputs/DocumentsCreateInput";
import { DocumentsUpdateInput } from "../../../inputs/DocumentsUpdateInput";
import { DocumentsWhereUniqueInput } from "../../../inputs/DocumentsWhereUniqueInput";
export declare class UpsertDocumentsArgs {
    where: DocumentsWhereUniqueInput;
    create: DocumentsCreateInput;
    update: DocumentsUpdateInput;
}
