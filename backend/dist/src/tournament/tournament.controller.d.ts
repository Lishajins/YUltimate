import { TournamentService } from './tournament.service';
import { CreateTournamentDto, CreateTeamDto, CreatePlayerDto, UpdateSpiritScoreDto } from './dto/tournament.dto';
export declare class TournamentController {
    private tournamentService;
    constructor(tournamentService: TournamentService);
    createTournament(createTournamentDto: CreateTournamentDto, req: any): Promise<{
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
    updateSpiritScore(id: string, updateSpiritScoreDto: UpdateSpiritScoreDto): Promise<{
        id: string;
        name: string;
        spiritScore: number;
        tournamentId: string;
    }>;
    getLeaderboard(id: string): Promise<({
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
