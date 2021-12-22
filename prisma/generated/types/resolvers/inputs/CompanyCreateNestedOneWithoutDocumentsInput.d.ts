import { CompanyCreateOrConnectWithoutDocumentsInput } from "../inputs/CompanyCreateOrConnectWithoutDocumentsInput";
import { CompanyCreateWithoutDocumentsInput } from "../inputs/CompanyCreateWithoutDocumentsInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";
export declare class CompanyCreateNestedOneWithoutDocumentsInput {
    create?: CompanyCreateWithoutDocumentsInput | undefined;
    connectOrCreate?: CompanyCreateOrConnectWithoutDocumentsInput | undefined;
    connect?: CompanyWhereUniqueInput | undefined;
}
