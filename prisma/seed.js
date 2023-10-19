import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

/******************************************************************************
Seasons
******************************************************************************/
async function seedSeasons() {

    let seasons = [
        { id: 2021, name: "Infinite Recharge" },
        { id: 2022, name: "Rapid React" },
        { id: 2023, name: "Charged Up" },
        { id: 2024, name: "Crescendo" },
    ]

    try {
        for(let i = 0; i < seasons.length; i++) {
            let season = seasons[i]
            await prisma.season.create({
                data: {
                    id: season.id,
                    name: season.name,
                    createdBy: "bf11ee0a-1c5c-435b-89b6-bc77884e3deb",
                    updatedBy: "bf11ee0a-1c5c-435b-89b6-bc77884e3deb",
                }
            });
        }

    } catch (error) {
        console.error(error);
    } finally {
        await prisma.$disconnect();
    }
}

/******************************************************************************
Tournaments
******************************************************************************/
async function seedTournaments() {
    let tournaments = [
        { 
            seasonId: 2022, 
            name: "Scouting App Training",
            fromDate: new Date(2022, 1, 1),
            throughDate: new Date(2022, 12, 31),            
        },        
        { 
            seasonId: 2023, 
            name: "Scouting App Training",
            fromDate: new Date(2023, 1, 1),
            throughDate: new Date(2023, 12, 31),            
        },
        { 
            seasonId: 2023, 
            name: "Rah Cha Cha Ruckus",
            fromDate: new Date(2023, 10, 21),
            throughDate: new Date(2023, 10, 21),            
        },
        { 
            seasonId: 2024, 
            name: "Scouting App Training Tournament",
            fromDate: new Date(2024, 1, 1),
            throughDate: new Date(2024, 12, 31),            
        }
    ]

    try {
        for(let i = 0; i < tournaments.length; i++) {
            let tournament = tournaments[i]
            await prisma.tournament.create({
                data: {
                    seasonId: tournament.seasonId,
                    name: tournament.name,
                    fromDate: tournament.fromDate,
                    throughDate: tournament.throughDate,
                    search: `${tournament.season} ${tournament.name}`,
                    createdBy: "bf11ee0a-1c5c-435b-89b6-bc77884e3deb",
                    updatedBy: "bf11ee0a-1c5c-435b-89b6-bc77884e3deb",
                }
            });            
        }
    } catch (error) {
        console.error(error);
    } finally {
        await prisma.$disconnect();
    }
}

/******************************************************************************
Matches
******************************************************************************/
async function seedMatches() {

    let matches = [
        { name: "Practice" },
        { name: "Qualification" },
        { name: "Playoff" },
    ]

    try {
        for(let i = 0; i < matches.length; i++) {
            let match = matches[i]
            await prisma.match.create({
                data: {
                    name: match.name,
                    createdBy: "bf11ee0a-1c5c-435b-89b6-bc77884e3deb",
                    updatedBy: "bf11ee0a-1c5c-435b-89b6-bc77884e3deb",
                }
            });
        }

    } catch (error) {
        console.error(error);
    } finally {
        await prisma.$disconnect();
    }
}

/******************************************************************************
Alliances
******************************************************************************/
async function seedAlliances() {

    let alliances = [
        { name: "Blue Alliance" },
        { name: "Red Alliance" },
    ]

    try {
        for(let i = 0; i < alliances.length; i++) {
            let alliance = alliances[i]
            await prisma.alliance.create({
                data: {
                    name: alliance.name,
                    createdBy: "bf11ee0a-1c5c-435b-89b6-bc77884e3deb",
                    updatedBy: "bf11ee0a-1c5c-435b-89b6-bc77884e3deb",
                }
            });
        }

    } catch (error) {
        console.error(error);
    } finally {
        await prisma.$disconnect();
    }
}

/******************************************************************************
Teams
******************************************************************************/
async function seedTeams() {

    let teams = [
        { number: 191, name: "X-CATS" },
        { number: 340, name: "G.R.R. (Greater Rochester Robotics)" },
        { number: 378, name: "The Circuit Stompers" },
        { number: 424, name: "Rust Belt Robotics" },
        { number: 578, name: "R-cubed - Red Raider Robotics" },
        { number: 639, name: "Code Red Robotics" },
        { number: 1075, name: "Sprockets" },
        { number: 1114, name: "Simbotics" },
        { number: 1126, name: "SPARX 1126" },
        { number: 1405, name: "Finney Falcons" },
        { number: 1450, name: "XQ Robotix" },
        { number: 1507, name: "Warlocks" },
        { number: 1511, name: "Rolling Thunder" },
        { number: 1518, name: "Raider Robotics" },
        { number: 1551, name: "The Grapes of Wrath" },
        { number: 1559, name: "Devil Tech" },
        { number: 1585, name: "Scitobor Robotics" },
        { number: 1591, name: "Greece Gladiators" },
        { number: 2053, name: "Southern Tier Robotics" },
        { number: 2228, name: "CougarTech" },
        { number: 2340, name: "Xcentrics -Mercy Robotics" },
        { number: 2708, name: "Lake Effect Robotics" },
        { number: 2716, name: "Ranger Force" },
        { number: 2852, name: "DM High Voltage" },
        { number: 3003, name: "TAN(X)" },
        { number: 3015, name: "Ranger Robotics" },
        { number: 3157, name: "Iron Lancers" },
        { number: 3173, name: "IgKnighters" },
        { number: 3181, name: "Pittsford Panthers" },
        { number: 3750, name: "Rush Henrietta Royal Robotics" },
        { number: 3799, name: "Electric Fire" },
        { number: 3838, name: "Roc City Robotix" },
        { number: 3951, name: "SUITS" },
        { number: 4093, name: "Hardwired" },
        { number: 4476, name: "W.A.F.F.L.E.S." },
        { number: 4930, name: "Electric Mayhem" },
        { number: 5020, name: "KilaBots" },
        { number: 5356, name: "TARDIS" },
        { number: 5484, name: "The EnderBots" },
        { number: 5485, name: "GorillaBots" },
        { number: 5590, name: "Alumiboti" },
        { number: 5912, name: "Heritage Robotics" },
        { number: 6110, name: "Doc Botics" },
        { number: 6868, name: "Cadet Robotics" },
        { number: 6978, name: "QuickStrike Niagara" },
        { number: 7230, name: "SAS Atoms" },
        { number: 7743, name: "Lansing Robotics" },
        { number: 7903, name: "Rochester Prep" },
        { number: 9621, name: "Bender & His Mates" },
        { number: 11245, name: "Victor FTC Team 1" },
        { number: 11246, name: "Victor FTC Team 2" },
        { number: 12833, name: "Mechanical Meltdown" },
        { number: 13364, name: "Linear Lions" },
        { number: 14026, name: "Eden Middle and High School" },
        { number: 14669, name: "Vortex" },
        { number: 16854, name: "Nuclear Detonation" },
        { number: 18516, name: "Ragin' Rumble Ponies" },
        { number: 19528, name: "COMET TECH LANCERS" },
        { number: 19565, name: "BEAM Robotics" },
        { number: 20809, name: "Coyotes 1000" },
        { number: 21302, name: "HCS Robotics (CLEOB@ya)" },
        { number: 21916, name: "Hive Voltage" },
        { number: 22163, name: "RIT STEP (StepHive)" },
        { number: 22240, name: "Rough Estimate" },
        { number: 22603, name: "Stormbots" },
        { number: 22612, name: "New Wave" },
        { number: 23364, name: "Icarus" },
        { number: 23789, name: "Rust Belt Robotics" },
        { number: 24043, name: "USA Eagles" },
        { number: 24462, name: "RocSci" },        
    ]

    try {
        for(let i = 0; i < teams.length; i++) {
            let team = teams[i]
            await prisma.team.create({
                data: {
                    id: team.number,
                    name: team.name,
                    search: `${team.number} ${team.name}`,
                    createdBy: "bf11ee0a-1c5c-435b-89b6-bc77884e3deb",
                    updatedBy: "bf11ee0a-1c5c-435b-89b6-bc77884e3deb",
                }
            });            
        }
    } catch (error) {
        console.error(error);
    } finally {
        await prisma.$disconnect();
    }
}

/******************************************************************************
2022 Actions
******************************************************************************/
async function seed2022Actions() {
    let seasonId = 2022

    try {
        let hangerActions = [
            { label: "High Rung",        description: "", },
            { label: "Mid Rung",         description: "", },
            { label: "Low Rung",         description: "", },
            { label: "Traversal Rung",   description: "", },
            { label: "Match Ended",      description: "", },
            { label: "Cancel",           description: "", },
        ]         

        let cargoActions = [
            { label: "Disengaged",       description: "", },
            { label: "Scored Upper Hub", description: "", },
            { label: "Scored Lower Hub", description: "", },
            { label: "Match Ended",      description: "", },
            { label: "Cancel",           description: "", },
        ]

        // Actions for Hanger
        {
            const parent = await prisma.action.create({
                data: {
                    seasonId: seasonId,
                    ordinal: 1,
                    isEnd: false,
                    label: "Hanger Interaction",
                    description: "Robot interacting with Hanger",
                    createdBy: "bf11ee0a-1c5c-435b-89b6-bc77884e3deb",
                    updatedBy: "bf11ee0a-1c5c-435b-89b6-bc77884e3deb",                    
                }
            });   

            // Child actions for Hanger
            for(let i = 0; i < hangerActions.length; i++)
            {
                let child = hangerActions[i]
                await prisma.action.create({
                    data: {
                        seasonId: seasonId,
                        parentId: parent.id,
                        ordinal: i + 1,
                        label: child.label,
                        description: child.description,
                        isEnd: true,
                        createdBy: "bf11ee0a-1c5c-435b-89b6-bc77884e3deb",
                        updatedBy: "bf11ee0a-1c5c-435b-89b6-bc77884e3deb",
                    }
                });        
            }                
        } 
        
        // Actions for Cargo
        {
            const parent = await prisma.action.create({
                data: {
                    seasonId: seasonId,
                    ordinal: 2,
                    isEnd: false,
                    label: "Cargo Interaction",
                    description: "Robot interacting with Cargo",
                    createdBy: "bf11ee0a-1c5c-435b-89b6-bc77884e3deb",
                    updatedBy: "bf11ee0a-1c5c-435b-89b6-bc77884e3deb",                    
                }
            });

            // Child Actions for Cargo
            for(let i = 0; i < cargoActions.length; i++)
            {
                let child = cargoActions[i]
                await prisma.action.create({
                    data: {
                        seasonId: seasonId,
                        parentId: parent.id,
                        ordinal: i + 1,
                        label: child.label,
                        description: child.description,
                        isEnd: true,
                        createdBy: "bf11ee0a-1c5c-435b-89b6-bc77884e3deb",
                        updatedBy: "bf11ee0a-1c5c-435b-89b6-bc77884e3deb",
                    }
                });        
            }            
        }
        
        // Actions for Match Ended
        {
            await prisma.action.create({
                data: {
                    seasonId: seasonId,
                    ordinal: 3,
                    isEnd: true,
                    label: "Match Ended",
                    description: "The match has ended or play is otherwise over",
                    createdBy: "bf11ee0a-1c5c-435b-89b6-bc77884e3deb",
                    updatedBy: "bf11ee0a-1c5c-435b-89b6-bc77884e3deb",                    
                }
            });  
        } 

    } catch (error) {
        console.error(error);
    } finally {
        await prisma.$disconnect();
    }
}

/******************************************************************************
2023 Actions
******************************************************************************/
async function seed2023Actions() {
    let seasonId = 2023
    try {

        let chargeActions = [
            { label: "Docked",          description: "Contacting only the Charge Station",                         },
            { label: "Engaged",         description: "All Alliance Robots are docked and Charge Station is level", },
            { label: "Match Ended",     description: "The match has ended or play is otherwise over",              },
            { label: "Cancel",          description: "Cancel the rest of the Action and return to start",          },
        ]         

        let gamePieceActions = [
            { label: "Disengaged",      description: "Dropped or stopped pushing the game piece",          },
            { label: "Scored Top",      description: "Scored on the top row",                              },
            { label: "Scored Middle",   description: "Scored on the middle row",                           },
            { label: "Scored Bottom",   description: "Scored on the bottom row",                           },
            { label: "Match Ended",     description: "The match has ended or play is otherwise over",      },
            { label: "Cancel",          description: "Cancel the rest of the Action and return to start",  },
        ]


        // Charge Station Actions
        {
            // Root
            var parent = await prisma.action.create({
                data: {
                    seasonId: seasonId,
                    ordinal: 1,
                    isEnd: false,
                    label: "Charge Station Interaction",
                    description: "Robot began interacting with the Charge Station",
                    createdBy: "bf11ee0a-1c5c-435b-89b6-bc77884e3deb",
                    updatedBy: "bf11ee0a-1c5c-435b-89b6-bc77884e3deb",                    
                }
            });  

            // Child actions for "Charge Station"
            for(let i = 0; i < chargeActions.length; i++)
            {
                let child = chargeActions[i]
                await prisma.action.create({
                    data: {
                        seasonId: seasonId,
                        parentId: parent.id,
                        ordinal: i + 1,
                        label: child.label,
                        description: child.description,
                        isEnd: true,
                        createdBy: "bf11ee0a-1c5c-435b-89b6-bc77884e3deb",
                        updatedBy: "bf11ee0a-1c5c-435b-89b6-bc77884e3deb",
                    }
                });        
            }               
        }
        
        // Game Piece Actions
        {
            // Root
            var parent = await prisma.action.create({
                data: {
                    seasonId: seasonId,
                    ordinal: 2,
                    isEnd: false,
                    label: "Game Piece Interaction",
                    description: "Robot picked or pushed up a cone or cube",
                    createdBy: "bf11ee0a-1c5c-435b-89b6-bc77884e3deb",
                    updatedBy: "bf11ee0a-1c5c-435b-89b6-bc77884e3deb",                                      
                }
            });  

            // Child Actions for Game Pieces
            for(let i = 0; i < gamePieceActions.length; i++)
            {
                let child = gamePieceActions[i]
                await prisma.action.create({
                    data: {
                        seasonId: seasonId,
                        parentId: parent.id,
                        ordinal: i + 1,
                        label: child.label,
                        description: child.description,
                        isEnd: true,
                        createdBy: "bf11ee0a-1c5c-435b-89b6-bc77884e3deb",
                        updatedBy: "bf11ee0a-1c5c-435b-89b6-bc77884e3deb",
                    }
                });        
            }            
        }

        // Charge Station Actions
        {
            // Root
            var parent = await prisma.action.create({
                data: {
                    seasonId: seasonId,
                    ordinal: 4,
                    isEnd: true,
                    label: "Match Ended",
                    description: "The match has ended or play is otherwise over",
                    createdBy: "bf11ee0a-1c5c-435b-89b6-bc77884e3deb",
                    updatedBy: "bf11ee0a-1c5c-435b-89b6-bc77884e3deb",                    
                }
            });  
        }

    } catch (error) {
        console.error(error);
    } finally {
        await prisma.$disconnect();
    }
}

/******************************************************************************
Seed
******************************************************************************/
await seedSeasons()
await seedTournaments()
await seedMatches()
await seedAlliances()
await seedTeams()
await seed2022Actions()
await seed2023Actions()
