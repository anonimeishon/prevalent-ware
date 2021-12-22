import { CompanyUpdateOneRequiredWithoutDocumentsInput } from "../inputs/CompanyUpdateOneRequiredWithoutDocumentsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class DocumentsUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    url?: StringFieldUpdateOperationsInput | undefined;
    company?: CompanyUpdateOneRequiredWithoutDocumentsInput | undefined;
}
