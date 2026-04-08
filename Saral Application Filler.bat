@echo off
setlocal

set "ROOT_DIR=%~dp0"

if not exist "%ROOT_DIR%app.py" (
  echo [ERROR] Could not find app.py in "%ROOT_DIR%"
  pause
  exit /b 1
)

if not exist "%ROOT_DIR%env\Scripts\activate.bat" (
  echo [ERROR] Could not find virtual env activate script:
  echo         "%ROOT_DIR%env\Scripts\activate.bat"
  echo Make sure your root env folder exists.
  pause
  exit /b 1
)

start "Saral Backend" cmd /k "cd /d ""%ROOT_DIR%"" && call ""%ROOT_DIR%env\Scripts\activate.bat"" && python app.py"

echo Started backend in a new terminal.
endlocal
