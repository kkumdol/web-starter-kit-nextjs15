import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { DashboardLayout } from "@/components/dashboard-layout";
import { AppConfig } from "@/config/app-config";
import { getMenuByTemplate } from "@/config/menu-templates";
import {
  Users,
  Activity,
  TrendingUp,
  DollarSign,
  ShoppingCart,
  Eye,
  MousePointer,
  Monitor,
  Smartphone,
  Tablet,
  Globe,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

interface SubStat {
  label: string;
  value: string;
  percent?: number;
  icon?: React.ReactNode;
}

export default function DashboardPage() {
  const menuItems = getMenuByTemplate(AppConfig.menu.template);

  // 메인 통계 카드 (Color Admin 스타일)
  const mainStats = [
    {
      title: "TOTAL SALES",
      value: "₩24,850,000",
      change: "+12.5%",
      changeType: "up",
      description: "compare to last week",
      subStats: [
        { label: "Total sales order", value: "1,247" },
        { label: "Avg. sales per order", value: "₩19,900" },
      ],
    },
    {
      title: "CONVERSION RATE",
      value: "3.2%",
      change: "+0.8%",
      changeType: "up",
      description: "compare to last week",
      subStats: [
        { label: "Added to cart", value: "65%", percent: 65 },
        { label: "Reached checkout", value: "45%", percent: 45 },
        { label: "Sessions converted", value: "3.2%", percent: 32 },
      ],
    },
    {
      title: "STORE SESSIONS",
      value: "8,429",
      change: "+15.2%",
      changeType: "up",
      description: "compare to last week",
      subStats: [
        {
          label: "Mobile",
          value: "4,521",
          percent: 53.6,
          icon: <Smartphone className="w-4 h-4" />,
        },
        {
          label: "Desktop",
          value: "3,124",
          percent: 37.1,
          icon: <Monitor className="w-4 h-4" />,
        },
        {
          label: "Tablet",
          value: "784",
          percent: 9.3,
          icon: <Tablet className="w-4 h-4" />,
        },
      ],
    },
  ];

  // 방문자 분석
  const visitorStats = [
    {
      title: "8.2K",
      subtitle: "New Visitors",
      change: "+24.5% from previous 7 days",
      changeType: "up",
    },
    {
      title: "12.4K",
      subtitle: "Returning Visitors",
      change: "+8.2% from previous 7 days",
      changeType: "up",
    },
    {
      title: "45.8K",
      subtitle: "Total Page Views",
      change: "+18.7% from previous 7 days",
      changeType: "up",
    },
  ];

  // 위치별 세션
  const sessionsByLocation = [
    { country: "대한민국", flag: "🇰🇷", percentage: 45.2 },
    { country: "미국", flag: "🇺🇸", percentage: 28.7 },
    { country: "일본", flag: "🇯🇵", percentage: 12.4 },
    { country: "중국", flag: "🇨🇳", percentage: 8.9 },
    { country: "독일", flag: "🇩🇪", percentage: 4.8 },
  ];

  // 상위 제품
  const topProducts = [
    { name: "Premium 플랜", price: "₩99,000", sold: 234, image: "📦" },
    { name: "Business 플랜", price: "₩199,000", sold: 156, image: "💼" },
    { name: "Enterprise 플랜", price: "₩499,000", sold: 89, image: "🏢" },
    { name: "Starter 플랜", price: "₩49,000", sold: 67, image: "🚀" },
    { name: "Pro 플랜", price: "₩149,000", sold: 45, image: "⭐" },
  ];

  // 마케팅 캠페인
  const campaigns = [
    {
      title: "Email Marketing Campaign",
      period: "Mon 1/6 - Sun 7/6",
      performance: 57.5,
      description: "57.5% people click the email",
      status: "active",
    },
    {
      title: "Facebook Marketing Campaign",
      period: "Sat 29/5 - Sun 7/6",
      performance: 78.2,
      description: "+124k visitors from facebook",
      status: "completed",
    },
  ];

  return (
    <DashboardLayout
      title="대시보드"
      subtitle={`1 Jun 2025 - 7 Jun 2025 | compared to 24 Mar-30 Apr 2025`}
    >
      <div className="space-y-6">
        {/* 메인 통계 카드 그리드 */}
        <div className="grid gap-6 lg:grid-cols-3">
          {mainStats.map((stat, index) => (
            <Card key={index} className="p-6">
              <div className="space-y-4">
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-muted-foreground tracking-wide">
                    {stat.title}
                  </p>
                  <div className="flex items-end justify-between">
                    <h2 className="text-3xl font-bold">{stat.value}</h2>
                    <div
                      className={`flex items-center text-sm ${
                        stat.changeType === "up"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {stat.changeType === "up" ? (
                        <ArrowUp className="w-3 h-3 mr-1" />
                      ) : (
                        <ArrowDown className="w-3 h-3 mr-1" />
                      )}
                      {stat.change}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {stat.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {stat.subStats.map((subStat, subIndex) => (
                    <div key={subIndex} className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          {"icon" in subStat && subStat.icon}
                          <span className="text-muted-foreground">
                            {subStat.label}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{subStat.value}</span>
                          {"percent" in subStat && subStat.percent && (
                            <span className="text-xs text-muted-foreground">
                              {subStat.percent}%
                            </span>
                          )}
                        </div>
                      </div>
                      {"percent" in subStat && subStat.percent && (
                        <Progress value={subStat.percent} className="h-1" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* 방문자 분석 & 위치별 세션 */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* 방문자 분석 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">VISITORS ANALYTICS</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {visitorStats.map((visitor, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-end gap-2">
                    <h3 className="text-2xl font-bold">{visitor.title}</h3>
                    <span className="text-sm text-muted-foreground">
                      {visitor.subtitle}
                    </span>
                  </div>
                  <p
                    className={`text-xs flex items-center gap-1 ${
                      visitor.changeType === "up"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {visitor.changeType === "up" ? (
                      <ArrowUp className="w-3 h-3" />
                    ) : (
                      <ArrowDown className="w-3 h-3" />
                    )}
                    {visitor.change}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* 위치별 세션 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">SESSION BY LOCATION</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {sessionsByLocation.map((location, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{location.flag}</span>
                      <span className="text-sm font-medium">
                        {location.country}
                      </span>
                    </div>
                    <span className="text-sm font-medium">
                      {location.percentage}%
                    </span>
                  </div>
                  <Progress value={location.percentage} className="h-1" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* 상위 제품 & 마케팅 캠페인 */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* 상위 제품 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                TOP PRODUCTS BY UNITS SOLD
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {topProducts.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-muted/30 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{product.image}</span>
                    <div>
                      <p className="font-medium text-sm">{product.name}</p>
                      <p className="text-lg font-bold text-primary">
                        {product.price}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">{product.sold}</p>
                    <p className="text-xs text-muted-foreground">sold</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* 마케팅 캠페인 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">MARKETING CAMPAIGN</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {campaigns.map((campaign, index) => (
                <div key={index} className="space-y-3">
                  <div className="space-y-1">
                    <p className="font-medium">{campaign.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {campaign.period}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Performance
                      </span>
                      <span className="text-sm font-medium">
                        {campaign.performance}%
                      </span>
                    </div>
                    <Progress value={campaign.performance} className="h-2" />
                    <p className="text-xs text-muted-foreground">
                      📧 {campaign.description}
                    </p>
                  </div>

                  <Button variant="outline" size="sm" className="w-full">
                    View campaign
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* 시스템 구성 요약 카드 */}
        <Card>
          <CardHeader>
            <CardTitle>시스템 구성</CardTitle>
            <CardDescription>
              현재 {AppConfig.app.name} 설정 요약
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <span className="text-sm font-medium">템플릿</span>
                <Badge variant="outline" className="capitalize">
                  {AppConfig.menu.template}
                </Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <span className="text-sm font-medium">환경</span>
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

              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <span className="text-sm font-medium">다크모드</span>
                <Badge
                  variant={
                    AppConfig.features.ui.darkMode ? "default" : "secondary"
                  }
                >
                  {AppConfig.features.ui.darkMode ? "ON" : "OFF"}
                </Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <span className="text-sm font-medium">버전</span>
                <Badge variant="outline">v{AppConfig.app.version}</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
