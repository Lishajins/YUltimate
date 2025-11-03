# YUltimate Troubleshooting Guide

## Quick Fix

Run the automated fix script:
```bash
fix-and-setup.bat
```

## Common Issues and Solutions

### 1. Dependency Conflicts (ERESOLVE errors)

**Problem:** npm shows dependency resolution errors

**Solution:**
```bash
cd backend
rmdir /s /q node_modules
del package-lock.json
npm install --legacy-peer-deps
```

### 2. Database Connection Errors

**Problem:** Cannot connect to PostgreSQL

**Solutions:**
- Ensure PostgreSQL is installed and running
- Check `backend\.env` has correct DATABASE_URL
- Default: `postgresql://postgres:password@localhost:5432/yultimate`
- Update username, password, and database name as needed

**Create database:**
```sql
CREATE DATABASE yultimate;
```

### 3. Prisma Client Not Generated

**Problem:** `@prisma/client` errors

**Solution:**
```bash
cd backend
npm run db:generate
npm run db:push
```

### 4. Port Already in Use

**Problem:** Port 3000 or 3001 already in use

**Solution:**
```bash
# Find and kill process on port 3001 (backend)
netstat -ano | findstr :3001
taskkill /PID <PID> /F

# Find and kill process on port 3000 (frontend)
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### 5. TypeScript Compilation Errors

**Problem:** TypeScript errors during build

**Solution:**
- Backend and frontend tsconfig.json have been fixed
- Run: `npm install` again
- Clear cache: `rmdir /s /q .next` (frontend) or `rmdir /s /q dist` (backend)

### 6. Missing Environment Variables

**Problem:** JWT_SECRET or DATABASE_URL undefined

**Solution:**
- Check `backend\.env` exists
- Check `frontend\.env.local` exists
- Copy from `.env.example` if needed

### 7. CORS Errors

**Problem:** Frontend cannot connect to backend

**Solution:**
- Ensure backend is running on port 3001
- Check `backend\.env` has `FRONTEND_URL=http://localhost:3000`
- Check `frontend\.env.local` has `NEXT_PUBLIC_API_URL=http://localhost:3001`

## Step-by-Step Setup

### 1. Install Dependencies
```bash
# Backend
cd backend
npm install --legacy-peer-deps

# Frontend
cd ../frontend
npm install --legacy-peer-deps
```

### 2. Configure Environment
```bash
# Backend - Edit .env file
DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@localhost:5432/yultimate
JWT_SECRET=your-secret-key
```

### 3. Setup Database
```bash
cd backend
npm run db:generate
npm run db:push
npm run db:seed
```

### 4. Start Development
```bash
# Option 1: Use the start script
start-dev.bat

# Option 2: Manual start
# Terminal 1 - Backend
cd backend
npm run start:dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

## Verification Checklist

- [ ] PostgreSQL is installed and running
- [ ] `backend\.env` file exists with correct values
- [ ] `frontend\.env.local` file exists
- [ ] Backend dependencies installed (`backend\node_modules` exists)
- [ ] Frontend dependencies installed (`frontend\node_modules` exists)
- [ ] Prisma client generated (no @prisma/client errors)
- [ ] Database schema pushed (tables created)
- [ ] Backend running on http://localhost:3001
- [ ] Frontend running on http://localhost:3000

## Getting Help

If issues persist:
1. Check the error logs carefully
2. Ensure all prerequisites are installed (Node.js 18+, PostgreSQL)
3. Try the automated fix script: `fix-and-setup.bat`
4. Clear all caches and reinstall from scratch
