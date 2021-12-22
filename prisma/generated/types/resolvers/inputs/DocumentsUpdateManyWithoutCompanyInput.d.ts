import { DocumentsCreateManyCompanyInputEnvelope } from "../inputs/DocumentsCreateManyCompanyInputEnvelope";
import { DocumentsCreateOrConnectWithoutCompanyInput } from "../inputs/DocumentsCreateOrConnectWithoutCompanyInput";
import { DocumentsCreateWithoutCompanyInput } from "../inputs/DocumentsCreateWithoutCompanyInput";
import { DocumentsScalarWhereInput } from "../inputs/DocumentsScalarWhereInput";
import { DocumentsUpdateManyWithWhereWithoutCompanyInput } from "../inputs/DocumentsUpdateManyWithWhereWithoutCompanyInput";
import { DocumentsUpdateWithWhereUniqueWithoutCompanyInput } from "../inputs/DocumentsUpdateWithWhereUniqueWithoutCompanyInput";
import { DocumentsUpsertWithWhereUniqueWithoutCompanyInput } from "../inputs/DocumentsUpsertWithWhereUniqueWithoutCompanyInput";
import { DocumentsWhereUniqueInput } from "../inputs/DocumentsWhereUniqueInput";
export declare class DocumentsUpdateManyWithoutCompanyInput {
    create?: DocumentsCreateWithoutCompanyInput[] | undefined;
    connectOrCreate?: DocumentsCreateOrConnectWithoutCompanyInput[] | undefined;
    upsert?: DocumentsUpsertWithWhereUniqueWithoutCompanyInput[] | undefined;
    createMany?: DocumentsCreateManyCompanyInputEnvelope | undefined;
    set?: DocumentsWhereUniqueInput[] | undefined;
    disconnect?: DocumentsWhereUniqueInput[] | undefined;
    delete?: DocumentsWhereUniqueInput[] | undefined;
    connect?: DocumentsWhereUniqueInput[] | undefined;
    update?: DocumentsUpdateWithWhereUniqueWithoutCompanyInput[] | undefined;
    updateMany?: DocumentsUpdateManyWithWhereWithoutCompanyInput[] | undefined;
    deleteMany?: DocumentsScalarWhereInput[] | undefined;
}
