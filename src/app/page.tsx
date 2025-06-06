import { AppConfig } from "@/config/app-config";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Zap, Shield, Palette } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Next.js 14 + React 18로 최적화된 성능",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Production Ready",
      description: "보안, 인증, 데이터베이스까지 완벽 지원",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Customizable",
      description: "설정 파일로 쉽게 브랜딩 & 메뉴 변경",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Modern UI",
      description: "shadcn/ui + Tailwind CSS 완벽 다크모드",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center space-y-8 mb-16">
          <div className="space-y-4">
            <div className="text-6xl mb-4">{AppConfig.branding.logo.icon}</div>
            <Badge variant="secondary" className="mb-4">
              v{AppConfig.app.version} • Next.js 14
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                {AppConfig.app.name}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {AppConfig.app.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/dashboard">
                시작하기 <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="text-lg px-8"
            >
              <Link href="/docs">문서 보기</Link>
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Template Showcase */}
        <div className="text-center space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">다양한 템플릿 지원</h2>
            <p className="text-muted-foreground">
              설정 파일 하나로 다양한 형태의 웹 애플리케이션으로 변신
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { name: "Admin", desc: "관리자 패널", icon: "🛠️" },
              { name: "CRM", desc: "고객 관리", icon: "👥" },
              { name: "E-commerce", desc: "온라인 쇼핑몰", icon: "🛒" },
              { name: "Blog", desc: "블로그 플랫폼", icon: "📝" },
              { name: "SaaS", desc: "서비스 플랫폼", icon: "🚀" },
            ].map((template, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3">{template.icon}</div>
                  <h3 className="font-semibold mb-1">{template.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {template.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-16 text-center">
          <h3 className="text-lg font-semibold text-muted-foreground mb-6">
            최신 기술 스택으로 구축됨
          </h3>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              "Next.js 14",
              "React 18",
              "TypeScript",
              "Tailwind CSS",
              "shadcn/ui",
              "Prisma",
              "NextAuth.js",
            ].map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
