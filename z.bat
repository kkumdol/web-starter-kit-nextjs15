@echo off
REM ==============================================
REM Web Starter Kit 백업 및 개발 환경 설정 스크립트 (Windows)
REM ==============================================

echo 🧹 프로젝트 정리 중...

REM 빌드 파일 및 node_modules 삭제 (flutter clean과 동일)
if exist .next rmdir /s /q .next
if exist node_modules rmdir /s /q node_modules

echo 📦 프로젝트 백업 중...

REM 현재 날짜와 시간으로 파일명 생성 (YYYYMMDD_HHMM)
for /f "tokens=1-4 delims=/ " %%a in ('date /t') do set mydate=%%c%%a%%b
for /f "tokens=1-2 delims=: " %%a in ('time /t') do set mytime=%%a%%b
set mytime=%mytime: =0%
set ZIP_NAME=web-starter-kit-%mydate%_%mytime%.zip

REM 상위 디렉토리로 이동
cd ..

REM 7zip 또는 PowerShell을 사용하여 압축 (Git Bash 환경에서는 zip 명령어 사용)
powershell -command "Compress-Archive -Path 'web-starter-kit' -DestinationPath '%ZIP_NAME%' -Force"

REM 백업 폴더가 없으면 생성
if not exist "g\prj_backup\web-starter-kit" mkdir "g\prj_backup\web-starter-kit"

REM zip 파일을 백업 폴더로 이동
move "%ZIP_NAME%" "g\prj_backup\web-starter-kit\"

echo ✅ 백업 완료: g\prj_backup\web-starter-kit\%ZIP_NAME%

REM 다시 프로젝트 폴더로 이동
cd web-starter-kit

echo 📥 의존성 설치 중...
npm install

echo 🚀 개발 서버 시작...
npm run dev

pause 