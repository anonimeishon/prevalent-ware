import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;

// async function main() {
//   const allCompanies = await prisma.company.findMany();
//   console.log(
//     "🚀 ~ file: prisma.ts ~ line 5 ~ main ~ allCompanies",
//     allCompanies
//   );
// }

// main()
//   .catch((e) => {
//     throw e;
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
