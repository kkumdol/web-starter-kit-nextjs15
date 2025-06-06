#!/bin/bash

# ==============================================
# Web Starter Kit 백업 및 개발 환경 설정 스크립트
# ==============================================

echo "🧹 프로젝트 정리 중..."

# 빌드 파일 및 node_modules 삭제 (flutter clean과 동일)
rm -rf .next node_modules 

echo "📦 프로젝트 백업 중..."

# 현재 날짜와 시간으로 파일명 생성 (YYYYMMDD_HHMM)
DATE=$(date +%Y%m%d_%H%M)
ARCHIVE_NAME="web-starter-kit-${DATE}.7z"

# 상위 디렉토리로 이동하여 web-starter-kit 폴더를 압축
cd ..

# 7z 명령어 확인
if ! command -v 7z &> /dev/null; then
    echo "❌ 7z 명령어가 설치되지 않았습니다."
    echo "💡 7-Zip을 설치하고 PATH에 추가하세요:"
    echo "   https://www.7-zip.org/download.html"
    cd web-starter-kit
    exit 1
fi

echo "📦 압축 파일 생성 중: ${ARCHIVE_NAME}"
# 모든 파일과 폴더를 포함하되, 특정 폴더만 제외
7z a "${ARCHIVE_NAME}" "web-starter-kit" -r \
  "-x!web-starter-kit\.next\*" \
  "-x!web-starter-kit\node_modules\*" \
  "-x!web-starter-kit\.git\*" \
  "-x!web-starter-kit\*.log"

# 압축 성공 확인
if [ $? -eq 0 ] && [ -f "${ARCHIVE_NAME}" ]; then
    echo "✅ 압축 파일 생성 완료: ${ARCHIVE_NAME}"
    
    # 백업 폴더 생성 시도
    BACKUP_DIR="/g/prj_backup/web-starter-kit"
    
    if mkdir -p "$BACKUP_DIR" 2>/dev/null; then
        # 7z 파일을 백업 폴더로 이동
        if mv "${ARCHIVE_NAME}" "$BACKUP_DIR/"; then
            echo "✅ 백업 완료: $BACKUP_DIR/${ARCHIVE_NAME}"
        else
            echo "⚠️  백업 폴더로 이동 실패. 현재 위치에 보관: ${ARCHIVE_NAME}"
        fi
    else
        echo "⚠️  백업 폴더 생성 실패. 현재 위치에 보관: ${ARCHIVE_NAME}"
    fi
else
    echo "❌ 압축 파일 생성 실패"
    cd web-starter-kit
    exit 1
fi

# 다시 프로젝트 폴더로 이동
cd web-starter-kit

echo "📥 의존성 설치 중..."
npm install 

echo "🚀 개발 서버 시작..."
npm run dev 
