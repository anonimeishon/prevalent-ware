import { CompanyCreateOrConnectWithoutDocumentsInput } from "../inputs/CompanyCreateOrConnectWithoutDocumentsInput";
import { CompanyCreateWithoutDocumentsInput } from "../inputs/CompanyCreateWithoutDocumentsInput";
import { CompanyUpdateWithoutDocumentsInput } from "../inputs/CompanyUpdateWithoutDocumentsInput";
import { CompanyUpsertWithoutDocumentsInput } from "../inputs/CompanyUpsertWithoutDocumentsInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";
export declare class CompanyUpdateOneRequiredWithoutDocumentsInput {
    create?: CompanyCreateWithoutDocumentsInput | undefined;
    connectOrCreate?: CompanyCreateOrConnectWithoutDocumentsInput | undefined;
    upsert?: CompanyUpsertWithoutDocumentsInput | undefined;
    connect?: CompanyWhereUniqueInput | undefined;
    update?: CompanyUpdateWithoutDocumentsInput | undefined;
}
