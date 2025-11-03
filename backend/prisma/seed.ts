import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Create demo users
  const hashedPassword = await bcrypt.hash('password123', 10);
  
  const admin = await prisma.user.upsert({
    where: { email: 'admin@yultimate.com' },
    update: {},
    create: {
      email: 'admin@yultimate.com',
      name: 'Admin User',
      password: await bcrypt.hash('admin123', 10),
      role: 'ADMIN',
    },
  });

  const coach = await prisma.user.upsert({
    where: { email: 'coach@yultimate.com' },
    update: {},
    create: {
      email: 'coach@yultimate.com',
      name: 'Coach Smith',
      password: await bcrypt.hash('coach123', 10),
      role: 'COACH',
    },
  });

  const player = await prisma.user.upsert({
    where: { email: 'player@yultimate.com' },
    update: {},
    create: {
      email: 'player@yultimate.com',
      name: 'Player Johnson',
      password: await bcrypt.hash('player123', 10),
      role: 'PLAYER',
    },
  });

  const spectator = await prisma.user.upsert({
    where: { email: 'spectator@yultimate.com' },
    update: {},
    create: {
      email: 'spectator@yultimate.com',
      name: 'Spectator Brown',
      password: await bcrypt.hash('spectator123', 10),
      role: 'SPECTATOR',
    },
  });

  // Create demo tournament
  const tournament = await prisma.tournament.create({
    data: {
      name: 'Spring Championship 2024',
      field: 'Central Park Field A',
      category: 'Mixed',
      startDate: new Date('2024-04-15T10:00:00Z'),
      endDate: new Date('2024-04-17T18:00:00Z'),
      status: 'UPCOMING',
      createdById: admin.id,
    },
  });

  // Create demo teams
  const team1 = await prisma.team.create({
    data: {
      name: 'Thunder Bolts',
      tournamentId: tournament.id,
      spiritScore: 85,
    },
  });

  const team2 = await prisma.team.create({
    data: {
      name: 'Flying Discs',
      tournamentId: tournament.id,
      spiritScore: 92,
    },
  });

  // Create demo players
  await prisma.player.createMany({
    data: [
      { name: 'Alice Johnson', email: 'alice@example.com', teamId: team1.id },
      { name: 'Bob Smith', email: 'bob@example.com', teamId: team1.id },
      { name: 'Charlie Brown', email: 'charlie@example.com', teamId: team2.id },
      { name: 'Diana Prince', email: 'diana@example.com', teamId: team2.id },
    ],
  });

  // Create demo children for coaching
  const child1 = await prisma.child.create({
    data: {
      name: 'Emma Wilson',
      age: 12,
      gender: 'FEMALE',
      coachId: coach.id,
    },
  });

  const child2 = await prisma.child.create({
    data: {
      name: 'Liam Davis',
      age: 14,
      gender: 'MALE',
      coachId: coach.id,
    },
  });

  // Create demo session
  const session = await prisma.session.create({
    data: {
      title: 'Basic Skills Training',
      date: new Date('2024-03-20T15:00:00Z'),
      coachId: coach.id,
    },
  });

  // Create demo attendance
  await prisma.attendance.createMany({
    data: [
      { childId: child1.id, sessionId: session.id, present: true },
      { childId: child2.id, sessionId: session.id, present: false },
    ],
  });

  // Create demo assessments
  await prisma.assessment.createMany({
    data: [
      {
        childId: child1.id,
        skill: 'Throwing',
        score: 8,
        notes: 'Good improvement in accuracy',
      },
      {
        childId: child2.id,
        skill: 'Catching',
        score: 7,
        notes: 'Needs more practice with high catches',
      },
    ],
  });

  // Create demo gallery images
  await prisma.gallery.createMany({
    data: [
      {
        imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
        title: 'Tournament Finals Action',
        description: 'Intense moment from the championship game',
        isPinned: true,
      },
      {
        imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
        title: 'Team Celebration',
        description: 'Victory celebration after the match',
        isPinned: false,
      },
      {
        imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
        title: 'Perfect Catch',
        description: 'Amazing diving catch in the end zone',
        isPinned: false,
      },
    ],
  });

  console.log('Database seeded successfully!');
  console.log('Demo users created:');
  console.log('- Admin: admin@yultimate.com / admin123');
  console.log('- Coach: coach@yultimate.com / coach123');
  console.log('- Player: player@yultimate.com / player123');
  console.log('- Spectator: spectator@yultimate.com / spectator123');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });