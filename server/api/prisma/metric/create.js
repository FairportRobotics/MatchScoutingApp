
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    return await prisma.metric.create({
        data: {
            tournamentId: body.tournamentId,
            matchId: body.matchId,
            round: body.round,
            allianceId: body.allianceId,

            teamId: body.teamId,
            actionId: body.actionId,
            fromDate: body.fromDate,
            throughDate: body.throughDate,

            // TODO
            createdBy: "John Hurrell",
            updatedBy: "John Hurrell",
        }
    })
})
