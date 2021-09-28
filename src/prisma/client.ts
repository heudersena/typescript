import { PrismaClient } from "@prisma/client"
// log: ["query", "info", "error", "warn"]
const prisma = new PrismaClient({  })
export { prisma }

prisma.$disconnect();