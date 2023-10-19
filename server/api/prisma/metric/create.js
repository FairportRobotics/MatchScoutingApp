
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    await prisma.metric.create({
        data: {
            tournamentId: body.tournamentId,
            matchId: body.matchId,
            round: body.round,
            allianceId: body.allianceId,

            teamId: body.teamId,
            actionId: body.actionId,
            fromDate: body.fromDate,
            throughDate: body.throughDate,

            createdBy: "bf11ee0a-1c5c-435b-89b6-bc77884e3deb",
            updatedBy: "bf11ee0a-1c5c-435b-89b6-bc77884e3deb",
        }
    })

    return {
        message: "Done"
    }
})
