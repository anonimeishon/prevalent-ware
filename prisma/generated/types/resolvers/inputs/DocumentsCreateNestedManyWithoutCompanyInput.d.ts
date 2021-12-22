import { DocumentsCreateManyCompanyInputEnvelope } from "../inputs/DocumentsCreateManyCompanyInputEnvelope";
import { DocumentsCreateOrConnectWithoutCompanyInput } from "../inputs/DocumentsCreateOrConnectWithoutCompanyInput";
import { DocumentsCreateWithoutCompanyInput } from "../inputs/DocumentsCreateWithoutCompanyInput";
import { DocumentsWhereUniqueInput } from "../inputs/DocumentsWhereUniqueInput";
export declare class DocumentsCreateNestedManyWithoutCompanyInput {
    create?: DocumentsCreateWithoutCompanyInput[] | undefined;
    connectOrCreate?: DocumentsCreateOrConnectWithoutCompanyInput[] | undefined;
    createMany?: DocumentsCreateManyCompanyInputEnvelope | undefined;
    connect?: DocumentsWhereUniqueInput[] | undefined;
}
