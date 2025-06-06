import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DashboardLayout } from "@/components/dashboard-layout";
import { UserPlus, MoreHorizontal, Mail, Phone } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function UsersPage() {
  const users = [
    {
      id: 1,
      name: "김철수",
      email: "kim@example.com",
      phone: "010-1234-5678",
      role: "관리자",
      status: "활성",
      lastLogin: "2024-01-15 09:30",
    },
    {
      id: 2,
      name: "이영희",
      email: "lee@example.com",
      phone: "010-9876-5432",
      role: "사용자",
      status: "활성",
      lastLogin: "2024-01-14 16:45",
    },
    {
      id: 3,
      name: "박민수",
      email: "park@example.com",
      phone: "010-5555-1234",
      role: "에디터",
      status: "비활성",
      lastLogin: "2024-01-10 11:20",
    },
  ];

  const getRoleColor = (role: string) => {
    switch (role) {
      case "관리자":
        return "destructive";
      case "에디터":
        return "default";
      case "사용자":
        return "secondary";
      default:
        return "outline";
    }
  };

  const getStatusColor = (status: string) => {
    return status === "활성" ? "default" : "secondary";
  };

  return (
    <DashboardLayout
      title="사용자 관리"
      subtitle="등록된 사용자들을 확인하고 관리하세요"
    >
      <div className="space-y-6">
        {/* Header Actions */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold">사용자 목록</h2>
            <p className="text-sm text-muted-foreground">
              총 {users.length}명의 사용자가 등록되어 있습니다
            </p>
          </div>
          <Button>
            <UserPlus className="w-4 h-4 mr-2" />
            사용자 추가
          </Button>
        </div>

        {/* Users Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <Card key={user.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{user.name}</CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-1">
                      <Mail className="w-3 h-3" />
                      {user.email}
                    </CardDescription>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>프로필 보기</DropdownMenuItem>
                      <DropdownMenuItem>권한 수정</DropdownMenuItem>
                      <DropdownMenuItem>비밀번호 재설정</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        사용자 삭제
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-3 h-3 text-muted-foreground" />
                  {user.phone}
                </div>

                <div className="flex items-center justify-between">
                  <Badge variant={getRoleColor(user.role) as any}>
                    {user.role}
                  </Badge>
                  <Badge variant={getStatusColor(user.status) as any}>
                    {user.status}
                  </Badge>
                </div>

                <div className="text-xs text-muted-foreground">
                  마지막 로그인: {user.lastLogin}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">총 사용자</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{users.length}</div>
              <p className="text-xs text-muted-foreground">
                +2 from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">활성 사용자</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {users.filter((u) => u.status === "활성").length}
              </div>
              <p className="text-xs text-muted-foreground">
                {Math.round(
                  (users.filter((u) => u.status === "활성").length /
                    users.length) *
                    100
                )}
                % of total
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">관리자</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {users.filter((u) => u.role === "관리자").length}
              </div>
              <p className="text-xs text-muted-foreground">
                With admin privileges
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
