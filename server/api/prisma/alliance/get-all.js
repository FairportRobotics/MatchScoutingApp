import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default defineEventHandler(async () => {
    const res = await prisma.alliance.findMany()
    return res
})
