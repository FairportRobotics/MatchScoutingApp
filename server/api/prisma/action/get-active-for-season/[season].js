import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const res = await prisma.action.findMany({
        where: {
            season: Number(event.context.params.season),
            isActive: true
        }
    })
    return res
})
