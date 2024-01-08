REM Check if Node.js is installed
node -v > nul 2>&1
if errorlevel 1 (
    echo Node.js is not installed.
    echo Please install Node.js from https://nodejs.org/en/download/
    read -p "Press any key to continue . . . " -n1 -s
    exit /b
)
cd frontend
call npm install
cd ../backend
call npm install

start cmd /k node app
cd ../frontend
start cmd /k npm run dev
start http://localhost:5173/welcome
exit /b