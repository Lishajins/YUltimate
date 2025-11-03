# YUltimate Quick Start Guide

## 🚀 Fastest Way to Get Started

### Step 1: Run the Fix Script
```bash
fix-and-setup.bat
```
This will automatically:
- Clean and reinstall all dependencies
- Fix version conflicts
- Generate Prisma client

### Step 2: Configure Database
Edit `backend\.env`:
```env
DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@localhost:5432/yultimate
```

### Step 3: Setup Database
```bash
cd backend
npm run db:push
npm run db:seed
```

### Step 4: Start Development
```bash
start-dev.bat
```

## 🎯 Access the Application

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:3001

## 🔑 Demo Login Credentials

- **Admin:** admin@yultimate.com / admin123
- **Coach:** coach@yultimate.com / coach123
- **Player:** player@yultimate.com / player123
- **Spectator:** spectator@yultimate.com / spectator123

## ⚡ Manual Start (Alternative)

**Terminal 1 - Backend:**
```bash
cd backend
npm run start:dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

## 🔧 Common Commands

### Backend
```bash
cd backend
npm run start:dev      # Start development server
npm run build          # Build for production
npm run db:generate    # Generate Prisma client
npm run db:push        # Push schema to database
npm run db:seed        # Seed demo data
```

### Frontend
```bash
cd frontend
npm run dev            # Start development server
npm run build          # Build for production
npm run start          # Start production server
```

## 📋 Prerequisites

- Node.js 18 or higher
- PostgreSQL database
- npm or yarn

## ❓ Having Issues?

See [TROUBLESHOOTING.md](TROUBLESHOOTING.md) for detailed solutions.
