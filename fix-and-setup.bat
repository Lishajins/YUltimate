@echo off
echo ========================================
echo YUltimate Project Setup and Fix Script
echo ========================================
echo.

echo [1/6] Cleaning backend node_modules...
cd backend
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del package-lock.json
echo Backend cleaned!
echo.

echo [2/6] Installing backend dependencies...
call npm install --legacy-peer-deps
if %errorlevel% neq 0 (
    echo ERROR: Backend installation failed!
    pause
    exit /b 1
)
echo Backend dependencies installed!
echo.

echo [3/6] Generating Prisma client...
call npm run db:generate
if %errorlevel% neq 0 (
    echo WARNING: Prisma generate failed. Make sure PostgreSQL is configured.
)
echo.

echo [4/6] Cleaning frontend node_modules...
cd ..\frontend
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del package-lock.json
echo Frontend cleaned!
echo.

echo [5/6] Installing frontend dependencies...
call npm install --legacy-peer-deps
if %errorlevel% neq 0 (
    echo ERROR: Frontend installation failed!
    pause
    exit /b 1
)
echo Frontend dependencies installed!
echo.

echo [6/6] Setup complete!
echo.
echo ========================================
echo Next Steps:
echo ========================================
echo 1. Make sure PostgreSQL is running
echo 2. Update backend\.env with your database credentials
echo 3. Run: cd backend ^&^& npm run db:push
echo 4. Run: cd backend ^&^& npm run db:seed
echo 5. Start backend: cd backend ^&^& npm run start:dev
echo 6. Start frontend: cd frontend ^&^& npm run dev
echo ========================================
echo.
cd ..
pause
