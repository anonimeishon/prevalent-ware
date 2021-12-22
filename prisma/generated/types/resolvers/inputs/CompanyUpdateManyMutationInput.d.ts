import { EnumCompanyIdTypeFieldUpdateOperationsInput } from "../inputs/EnumCompanyIdTypeFieldUpdateOperationsInput";
import { EnumStatusFieldUpdateOperationsInput } from "../inputs/EnumStatusFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class CompanyUpdateManyMutationInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    logo?: StringFieldUpdateOperationsInput | undefined;
    companyName?: StringFieldUpdateOperationsInput | undefined;
    socialReason?: StringFieldUpdateOperationsInput | undefined;
    idType?: EnumCompanyIdTypeFieldUpdateOperationsInput | undefined;
    companyId?: StringFieldUpdateOperationsInput | undefined;
    isApproved?: NullableBoolFieldUpdateOperationsInput | undefined;
    status?: EnumStatusFieldUpdateOperationsInput | undefined;
    employeeAmount?: IntFieldUpdateOperationsInput | undefined;
}
