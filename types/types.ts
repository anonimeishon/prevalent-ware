import type { Company, Documents } from "@prisma/client";
export type CompanyT = Company & { documents: Documents[] };
