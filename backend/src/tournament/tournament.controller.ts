import { Controller, Get, Post, Body, Param, Patch, UseGuards, Request } from '@nestjs/common';
import { TournamentService } from './tournament.service';
import { CreateTournamentDto, CreateTeamDto, CreatePlayerDto, UpdateSpiritScoreDto } from './dto/tournament.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('tournaments')
export class TournamentController {
  constructor(private tournamentService: TournamentService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  createTournament(@Body() createTournamentDto: CreateTournamentDto, @Request() req) {
    return this.tournamentService.createTournament(createTournamentDto, req.user.userId);
  }

  @Get()
  getTournaments() {
    return this.tournamentService.getTournaments();
  }

  @Get(':id')
  getTournament(@Param('id') id: string) {
    return this.tournamentService.getTournament(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('teams')
  createTeam(@Body() createTeamDto: CreateTeamDto) {
    return this.tournamentService.createTeam(createTeamDto);
  }

  @UseGuards(JwtAuthGuard)
  @Post('players')
  createPlayer(@Body() createPlayerDto: CreatePlayerDto) {
    return this.tournamentService.createPlayer(createPlayerDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('teams/:id/spirit-score')
  updateSpiritScore(@Param('id') id: string, @Body() updateSpiritScoreDto: UpdateSpiritScoreDto) {
    return this.tournamentService.updateSpiritScore(id, updateSpiritScoreDto);
  }

  @Get(':id/leaderboard')
  getLeaderboard(@Param('id') id: string) {
    return this.tournamentService.getLeaderboard(id);
  }
}