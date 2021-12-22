import { StringFilter } from "../inputs/StringFilter";
export declare class DocumentsScalarWhereInput {
    AND?: DocumentsScalarWhereInput[] | undefined;
    OR?: DocumentsScalarWhereInput[] | undefined;
    NOT?: DocumentsScalarWhereInput[] | undefined;
    companyId?: StringFilter | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    url?: StringFilter | undefined;
}
