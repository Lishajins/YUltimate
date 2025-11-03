"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TournamentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TournamentService = class TournamentService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createTournament(createTournamentDto, userId) {
        return this.prisma.tournament.create({
            data: {
                ...createTournamentDto,
                startDate: new Date(createTournamentDto.startDate),
                endDate: createTournamentDto.endDate ? new Date(createTournamentDto.endDate) : null,
                createdById: userId,
            },
            include: { teams: true },
        });
    }
    async getTournaments() {
        return this.prisma.tournament.findMany({
            include: { teams: { include: { players: true } } },
            orderBy: { createdAt: 'desc' },
        });
    }
    async getTournament(id) {
        return this.prisma.tournament.findUnique({
            where: { id },
            include: { teams: { include: { players: true } } },
        });
    }
    async createTeam(createTeamDto) {
        return this.prisma.team.create({
            data: createTeamDto,
            include: { players: true },
        });
    }
    async createPlayer(createPlayerDto) {
        return this.prisma.player.create({
            data: createPlayerDto,
        });
    }
    async updateSpiritScore(teamId, updateSpiritScoreDto) {
        return this.prisma.team.update({
            where: { id: teamId },
            data: { spiritScore: updateSpiritScoreDto.spiritScore },
        });
    }
    async getLeaderboard(tournamentId) {
        return this.prisma.team.findMany({
            where: { tournamentId },
            include: { players: true },
            orderBy: { spiritScore: 'desc' },
        });
    }
};
exports.TournamentService = TournamentService;
exports.TournamentService = TournamentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TournamentService);
//# sourceMappingURL=tournament.service.js.map