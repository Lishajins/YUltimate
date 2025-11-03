@echo off
echo Starting YUltimate Development Servers...
echo.
echo Backend will run on: http://localhost:3001
echo Frontend will run on: http://localhost:3000
echo.
echo Press Ctrl+C to stop both servers
echo.

start "YUltimate Backend" cmd /k "cd backend && npm run start:dev"
timeout /t 3 /nobreak >nul
start "YUltimate Frontend" cmd /k "cd frontend && npm run dev"

echo.
echo Both servers are starting in separate windows...
echo Close this window or press any key to exit
pause >nul
