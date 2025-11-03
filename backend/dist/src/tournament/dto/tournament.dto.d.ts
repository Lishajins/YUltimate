export declare class CreateTournamentDto {
    name: string;
    field: string;
    category: string;
    startDate: string;
    endDate?: string;
}
export declare class CreateTeamDto {
    name: string;
    tournamentId: string;
}
export declare class CreatePlayerDto {
    name: string;
    email?: string;
    teamId: string;
}
export declare class UpdateSpiritScoreDto {
    spiritScore: number;
}
