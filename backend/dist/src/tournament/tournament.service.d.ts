import { PrismaService } from '../prisma/prisma.service';
import { CreateTournamentDto, CreateTeamDto, CreatePlayerDto, UpdateSpiritScoreDto } from './dto/tournament.dto';
export declare class TournamentService {
    private prisma;
    constructor(prisma: PrismaService);
    createTournament(createTournamentDto: CreateTournamentDto, userId: string): Promise<{
        teams: {
            id: string;
            name: string;
            spiritScore: number;
            tournamentId: string;
        }[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        field: string;
        category: string;
        startDate: Date;
        endDate: Date | null;
        status: string;
        createdById: string;
    }>;
    getTournaments(): Promise<({
        teams: ({
            players: {
                id: string;
                email: string | null;
                name: string;
                teamId: string;
            }[];
        } & {
            id: string;
            name: string;
            spiritScore: number;
            tournamentId: string;
        })[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        field: string;
        category: string;
        startDate: Date;
        endDate: Date | null;
        status: string;
        createdById: string;
    })[]>;
    getTournament(id: string): Promise<{
        teams: ({
            players: {
                id: string;
                email: string | null;
                name: string;
                teamId: string;
            }[];
        } & {
            id: string;
            name: string;
            spiritScore: number;
            tournamentId: string;
        })[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        field: string;
        category: string;
        startDate: Date;
        endDate: Date | null;
        status: string;
        createdById: string;
    }>;
    createTeam(createTeamDto: CreateTeamDto): Promise<{
        players: {
            id: string;
            email: string | null;
            name: string;
            teamId: string;
        }[];
    } & {
        id: string;
        name: string;
        spiritScore: number;
        tournamentId: string;
    }>;
    createPlayer(createPlayerDto: CreatePlayerDto): Promise<{
        id: string;
        email: string | null;
        name: string;
        teamId: string;
    }>;
    updateSpiritScore(teamId: string, updateSpiritScoreDto: UpdateSpiritScoreDto): Promise<{
        id: string;
        name: string;
        spiritScore: number;
        tournamentId: string;
    }>;
    getLeaderboard(tournamentId: string): Promise<({
        players: {
            id: string;
            email: string | null;
            name: string;
            teamId: string;
        }[];
    } & {
        id: string;
        name: string;
        spiritScore: number;
        tournamentId: string;
    })[]>;
}
