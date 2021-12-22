import { CompanyCreateNestedOneWithoutDocumentsInput } from "../inputs/CompanyCreateNestedOneWithoutDocumentsInput";
export declare class DocumentsCreateInput {
    id?: string | undefined;
    name: string;
    url: string;
    company: CompanyCreateNestedOneWithoutDocumentsInput;
}
