import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const res = await prisma.team.findMany({
        take: 5,
        where: {
            search: {
                contains: event.context.params.term,
            }
        }
    })
    return res
})
