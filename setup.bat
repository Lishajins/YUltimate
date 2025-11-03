@echo off
echo Setting up YUltimate project...
echo.

echo Installing backend dependencies...
cd backend
call npm install
if %errorlevel% neq 0 (
    echo Failed to install backend dependencies
    pause
    exit /b 1
)

echo.
echo Installing frontend dependencies...
cd ..\frontend
call npm install
if %errorlevel% neq 0 (
    echo Failed to install frontend dependencies
    pause
    exit /b 1
)

echo.
echo Setup complete!
echo.
echo Next steps:
echo 1. Set up your PostgreSQL database
echo 2. Copy backend\.env.example to backend\.env and configure your database
echo 3. Run: cd backend && npm run db:generate && npm run db:push && npm run db:seed
echo 4. Start backend: cd backend && npm run start:dev
echo 5. Start frontend: cd frontend && npm run dev
echo.
echo Visit http://localhost:3000 to access the application
echo.
pause