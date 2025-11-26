@echo off
echo ====================================
echo   APIPEMAPET - Iniciando Servidor
echo ====================================
echo.

REM Verificar se o Node.js está instalado
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERRO] Node.js nao encontrado!
    echo Por favor, instale o Node.js de: https://nodejs.org
    pause
    exit /b 1
)

REM Verificar se as dependências estão instaladas
if not exist "node_modules\" (
    echo [INFO] Instalando dependencias...
    call npm install
    echo.
)

REM Iniciar o servidor
echo [INFO] Iniciando servidor...
echo.
call npm start
