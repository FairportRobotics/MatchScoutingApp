
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    for(let i = 0; i < body.length; i++) {
        var metric = body[i]
        await prisma.metric.create({
            data: {
                tournamentId: metric.tournamentId,
                matchId: metric.matchTypeId,
                round: metric.matchRound,
                allianceId: metric.matchAllianceId,
                teamId: metric.teamId,
                actionId: metric.actionId,
                fromDate: metric.fromDate,
                throughDate: metric.throughDate,

                createdBy: "bf11ee0a-1c5c-435b-89b6-bc77884e3deb",
                updatedBy: "bf11ee0a-1c5c-435b-89b6-bc77884e3deb",
            }
        });                
    }

    return {
        message: "Done"
    }
})
