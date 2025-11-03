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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TournamentController = void 0;
const common_1 = require("@nestjs/common");
const tournament_service_1 = require("./tournament.service");
const tournament_dto_1 = require("./dto/tournament.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
let TournamentController = class TournamentController {
    constructor(tournamentService) {
        this.tournamentService = tournamentService;
    }
    createTournament(createTournamentDto, req) {
        return this.tournamentService.createTournament(createTournamentDto, req.user.userId);
    }
    getTournaments() {
        return this.tournamentService.getTournaments();
    }
    getTournament(id) {
        return this.tournamentService.getTournament(id);
    }
    createTeam(createTeamDto) {
        return this.tournamentService.createTeam(createTeamDto);
    }
    createPlayer(createPlayerDto) {
        return this.tournamentService.createPlayer(createPlayerDto);
    }
    updateSpiritScore(id, updateSpiritScoreDto) {
        return this.tournamentService.updateSpiritScore(id, updateSpiritScoreDto);
    }
    getLeaderboard(id) {
        return this.tournamentService.getLeaderboard(id);
    }
};
exports.TournamentController = TournamentController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tournament_dto_1.CreateTournamentDto, Object]),
    __metadata("design:returntype", void 0)
], TournamentController.prototype, "createTournament", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TournamentController.prototype, "getTournaments", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TournamentController.prototype, "getTournament", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('teams'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tournament_dto_1.CreateTeamDto]),
    __metadata("design:returntype", void 0)
], TournamentController.prototype, "createTeam", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('players'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tournament_dto_1.CreatePlayerDto]),
    __metadata("design:returntype", void 0)
], TournamentController.prototype, "createPlayer", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)('teams/:id/spirit-score'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, tournament_dto_1.UpdateSpiritScoreDto]),
    __metadata("design:returntype", void 0)
], TournamentController.prototype, "updateSpiritScore", null);
__decorate([
    (0, common_1.Get)(':id/leaderboard'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TournamentController.prototype, "getLeaderboard", null);
exports.TournamentController = TournamentController = __decorate([
    (0, common_1.Controller)('tournaments'),
    __metadata("design:paramtypes", [tournament_service_1.TournamentService])
], TournamentController);
//# sourceMappingURL=tournament.controller.js.map