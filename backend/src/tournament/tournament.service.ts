import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTournamentDto, CreateTeamDto, CreatePlayerDto, UpdateSpiritScoreDto } from './dto/tournament.dto';

@Injectable()
export class TournamentService {
  constructor(private prisma: PrismaService) {}

  async createTournament(createTournamentDto: CreateTournamentDto, userId: string) {
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

  async getTournament(id: string) {
    return this.prisma.tournament.findUnique({
      where: { id },
      include: { teams: { include: { players: true } } },
    });
  }

  async createTeam(createTeamDto: CreateTeamDto) {
    return this.prisma.team.create({
      data: createTeamDto,
      include: { players: true },
    });
  }

  async createPlayer(createPlayerDto: CreatePlayerDto) {
    return this.prisma.player.create({
      data: createPlayerDto,
    });
  }

  async updateSpiritScore(teamId: string, updateSpiritScoreDto: UpdateSpiritScoreDto) {
    return this.prisma.team.update({
      where: { id: teamId },
      data: { spiritScore: updateSpiritScoreDto.spiritScore },
    });
  }

  async getLeaderboard(tournamentId: string) {
    return this.prisma.team.findMany({
      where: { tournamentId },
      include: { players: true },
      orderBy: { spiritScore: 'desc' },
    });
  }
}