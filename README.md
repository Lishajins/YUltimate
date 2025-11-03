# YUltimate - Ultimate Frisbee Hub

A comprehensive platform for Ultimate Frisbee tournament management, coaching tools, and community features.

## Features

### 🏆 Tournament Management
- Create and manage tournaments
- Team and player registration
- Live leaderboards with spirit scores
- Tournament status tracking

### 👨🏫 Coaching Tools
- Child profile management
- Session scheduling and attendance tracking
- Progress assessments and reporting
- Home visit logging

### 📸 Gallery & AI Features
- Photo gallery with pinning
- AI-powered face recognition (ready for AWS Rekognition integration)
- Player tagging in photos

### 🔐 Role-Based Access
- **Admin**: Full system access, tournament creation
- **Coach**: Coaching tools, session management
- **Player**: Tournament participation, gallery access
- **Spectator**: Read-only access to tournaments and gallery

## Tech Stack

### Backend
- **NestJS** - Node.js framework
- **Prisma** - Database ORM
- **PostgreSQL** - Database
- **JWT** - Authentication
- **bcryptjs** - Password hashing

### Frontend
- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Hook Form** - Form management
- **Axios** - HTTP client

## Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL database
- npm or yarn

### 1. Clone and Install
```bash
git clone <repository-url>
cd YUltimate

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 2. Database Setup
```bash
cd backend

# Copy environment file
cp .env.example .env

# Edit .env with your database credentials
# DATABASE_URL="postgresql://username:password@localhost:5432/yultimate"

# Generate Prisma client
npm run db:generate

# Push database schema
npm run db:push

# Seed with demo data
npm run db:seed
```

### 3. Start Development Servers

**Backend (Terminal 1):**
```bash
cd backend
npm run start:dev
# Runs on http://localhost:3001
```

**Frontend (Terminal 2):**
```bash
cd frontend
npm run dev
# Runs on http://localhost:3000
```

### 4. Access the Application
Open http://localhost:3000 in your browser.

## Demo Credentials

After seeding, use these credentials to test different roles:

- **Admin**: admin@yultimate.com / admin123
- **Coach**: coach@yultimate.com / coach123  
- **Player**: player@yultimate.com / player123
- **Spectator**: spectator@yultimate.com / spectator123

## API Documentation

See [docs/api-reference.md](docs/api-reference.md) for complete API documentation.

## Project Structure

```
YUltimate/
├── backend/
│   ├── src/
│   │   ├── auth/          # Authentication module
│   │   ├── tournament/    # Tournament management
│   │   ├── coaching/      # Coaching tools
│   │   ├── gallery/       # Photo gallery
│   │   └── prisma/        # Database service
│   └── prisma/
│       ├── schema.prisma  # Database schema
│       └── seed.ts        # Demo data
├── frontend/
│   ├── app/               # Next.js pages
│   ├── components/        # Reusable components
│   ├── contexts/          # React contexts
│   └── lib/               # Utilities
└── docs/
    └── api-reference.md   # API documentation
```

## Development Workflow

### Team Member Roles (as per work plan)

**Member A - Infrastructure & Auth Lead** ✅
- [x] Backend setup with NestJS
- [x] JWT authentication system
- [x] Role-based authorization
- [x] Database schema with Prisma
- [x] API documentation

**Member B - Tournament Management Lead** ✅
- [x] Tournament CRUD operations
- [x] Team and player management
- [x] Leaderboard functionality
- [x] Spirit score tracking

**Member C - Coaching Management Lead** ✅
- [x] Child profile management
- [x] Session and attendance tracking
- [x] Assessment system
- [x] Reporting dashboard

**Member D - UI/UX + Gallery Lead** ✅
- [x] Responsive UI with Tailwind CSS
- [x] Gallery system with image management
- [x] Face recognition API structure
- [x] Role-based navigation

## Environment Variables

### Backend (.env)
```env
DATABASE_URL=postgresql://postgres:password@localhost:5432/yultimate
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRES_IN=7d
PORT=3001
FRONTEND_URL=http://localhost:3000

# Optional: For future integrations
CLOUDINARY_CLOUD_NAME=your-cloudinary-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
AWS_ACCESS_KEY_ID=your-aws-access-key
AWS_SECRET_ACCESS_KEY=your-aws-secret-key
AWS_REGION=us-east-1
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## Deployment

### Backend (Railway/Render)
1. Create PostgreSQL database
2. Set environment variables
3. Deploy backend code
4. Run migrations: `npx prisma db push`
5. Seed data: `npm run db:seed`

### Frontend (Vercel/Netlify)
1. Connect repository
2. Set `NEXT_PUBLIC_API_URL` to backend URL
3. Deploy

## Future Enhancements

- [ ] Real-time updates with Socket.io
- [ ] AWS Rekognition integration for face detection
- [ ] Cloudinary integration for image uploads
- [ ] Email notifications
- [ ] Mobile app with React Native
- [ ] Advanced analytics and reporting
- [ ] Tournament bracket generation
- [ ] Payment integration for tournament fees

## Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

## License

This project is licensed under the MIT License.