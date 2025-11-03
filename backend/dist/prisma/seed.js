"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcrypt = __importStar(require("bcryptjs"));
const prisma = new client_1.PrismaClient();
async function main() {
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
    await prisma.player.createMany({
        data: [
            { name: 'Alice Johnson', email: 'alice@example.com', teamId: team1.id },
            { name: 'Bob Smith', email: 'bob@example.com', teamId: team1.id },
            { name: 'Charlie Brown', email: 'charlie@example.com', teamId: team2.id },
            { name: 'Diana Prince', email: 'diana@example.com', teamId: team2.id },
        ],
    });
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
    const session = await prisma.session.create({
        data: {
            title: 'Basic Skills Training',
            date: new Date('2024-03-20T15:00:00Z'),
            coachId: coach.id,
        },
    });
    await prisma.attendance.createMany({
        data: [
            { childId: child1.id, sessionId: session.id, present: true },
            { childId: child2.id, sessionId: session.id, present: false },
        ],
    });
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
//# sourceMappingURL=seed.js.map