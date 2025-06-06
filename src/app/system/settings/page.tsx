import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DashboardLayout } from "@/components/dashboard-layout";
import { AppConfig } from "@/config/app-config";
import { Save, RefreshCw, Database, Shield, Globe, Mail } from "lucide-react";

export default function SystemSettingsPage() {
  return (
    <DashboardLayout
      title="시스템 설정"
      subtitle="애플리케이션의 전반적인 설정을 관리하세요"
    >
      <div className="space-y-6">
        {/* Header Actions */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold">설정 관리</h2>
            <p className="text-sm text-muted-foreground">
              현재 설정을 확인하고 필요에 따라 수정하세요
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <RefreshCw className="w-4 h-4 mr-2" />
              초기화
            </Button>
            <Button>
              <Save className="w-4 h-4 mr-2" />
              저장
            </Button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* App Configuration */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                애플리케이션 설정
              </CardTitle>
              <CardDescription>
                기본 애플리케이션 정보 및 브랜딩 설정
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="app-name">애플리케이션 이름</Label>
                <Input
                  id="app-name"
                  defaultValue={AppConfig.app.name}
                  placeholder="애플리케이션 이름"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="app-description">설명</Label>
                <Input
                  id="app-description"
                  defaultValue={AppConfig.app.description}
                  placeholder="애플리케이션 설명"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="app-version">버전</Label>
                <Input
                  id="app-version"
                  defaultValue={AppConfig.app.version}
                  placeholder="1.0.0"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="logo-text">로고 텍스트</Label>
                <Input
                  id="logo-text"
                  defaultValue={AppConfig.branding.logo.text}
                  placeholder="로고 텍스트"
                />
              </div>
            </CardContent>
          </Card>

          {/* Feature Toggles */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                기능 활성화/비활성화
              </CardTitle>
              <CardDescription>
                사용할 기능들을 선택적으로 활성화하세요
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>다크모드</Label>
                  <p className="text-xs text-muted-foreground">
                    사용자가 다크/라이트 테마를 선택할 수 있습니다
                  </p>
                </div>
                <Switch defaultChecked={AppConfig.features.ui.darkMode} />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>검색 기능</Label>
                  <p className="text-xs text-muted-foreground">
                    헤더에 검색 기능을 표시합니다
                  </p>
                </div>
                <Switch defaultChecked={AppConfig.features.ui.search} />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>알림 시스템</Label>
                  <p className="text-xs text-muted-foreground">
                    알림 센터 기능을 활성화합니다
                  </p>
                </div>
                <Switch defaultChecked={AppConfig.features.ui.notifications} />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>애니메이션</Label>
                  <p className="text-xs text-muted-foreground">
                    부드러운 전환 애니메이션을 활성화합니다
                  </p>
                </div>
                <Switch defaultChecked={AppConfig.features.ui.animations} />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>인증 시스템</Label>
                  <p className="text-xs text-muted-foreground">
                    사용자 로그인/회원가입 기능
                  </p>
                </div>
                <Switch defaultChecked={AppConfig.features.auth.enabled} />
              </div>
            </CardContent>
          </Card>

          {/* Database Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5" />
                데이터베이스 설정
              </CardTitle>
              <CardDescription>데이터베이스 연결 및 관련 설정</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>데이터베이스 제공자</Label>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="capitalize">
                    {AppConfig.database.provider}
                  </Badge>
                  <Button variant="ghost" size="sm">
                    변경
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label>ORM</Label>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="capitalize">
                    {AppConfig.database.orm}
                  </Badge>
                  <Button variant="ghost" size="sm">
                    변경
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>마이그레이션</Label>
                  <p className="text-xs text-muted-foreground">
                    자동 데이터베이스 마이그레이션
                  </p>
                </div>
                <Switch defaultChecked={AppConfig.database.enableMigrations} />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>시딩</Label>
                  <p className="text-xs text-muted-foreground">
                    초기 데이터 자동 생성
                  </p>
                </div>
                <Switch defaultChecked={AppConfig.database.enableSeeding} />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>백업</Label>
                  <p className="text-xs text-muted-foreground">
                    정기적 데이터베이스 백업
                  </p>
                </div>
                <Switch defaultChecked={AppConfig.database.enableBackup} />
              </div>
            </CardContent>
          </Card>

          {/* Menu Template */}
          <Card>
            <CardHeader>
              <CardTitle>메뉴 템플릿</CardTitle>
              <CardDescription>
                애플리케이션 타입에 맞는 메뉴 구조를 선택하세요
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>현재 템플릿</Label>
                <div className="flex items-center gap-2">
                  <Badge variant="default" className="capitalize">
                    {AppConfig.menu.template}
                  </Badge>
                  <Button variant="ghost" size="sm">
                    변경
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-sm">
                {[
                  { key: "admin", name: "관리자", icon: "🛠️" },
                  { key: "crm", name: "CRM", icon: "👥" },
                  { key: "ecommerce", name: "쇼핑몰", icon: "🛒" },
                  { key: "blog", name: "블로그", icon: "📝" },
                  { key: "saas", name: "SaaS", icon: "🚀" },
                ].map((template) => (
                  <div
                    key={template.key}
                    className={`p-3 border rounded-lg cursor-pointer hover:bg-accent transition-colors ${
                      AppConfig.menu.template === template.key
                        ? "border-primary bg-accent"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{template.icon}</span>
                      <span className="font-medium">{template.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Current Configuration Overview */}
        <Card>
          <CardHeader>
            <CardTitle>현재 설정 요약</CardTitle>
            <CardDescription>
              적용된 주요 설정들을 한눈에 확인하세요
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-2">
                <Label className="text-xs text-muted-foreground">환경</Label>
                <Badge
                  variant={
                    AppConfig.deployment.environment === "production"
                      ? "destructive"
                      : "default"
                  }
                >
                  {AppConfig.deployment.environment}
                </Badge>
              </div>

              <div className="space-y-2">
                <Label className="text-xs text-muted-foreground">
                  메뉴 템플릿
                </Label>
                <Badge variant="outline" className="capitalize">
                  {AppConfig.menu.template}
                </Badge>
              </div>

              <div className="space-y-2">
                <Label className="text-xs text-muted-foreground">
                  데이터베이스
                </Label>
                <Badge variant="secondary" className="capitalize">
                  {AppConfig.database.provider}
                </Badge>
              </div>

              <div className="space-y-2">
                <Label className="text-xs text-muted-foreground">
                  배포 제공자
                </Label>
                <Badge variant="outline" className="capitalize">
                  {AppConfig.deployment.provider}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
