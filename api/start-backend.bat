@echo off
echo ========================================
echo   Starting NXXIM Email API Server
echo ========================================
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
    echo.
)

echo Starting server...
echo.
call npm start

pause

