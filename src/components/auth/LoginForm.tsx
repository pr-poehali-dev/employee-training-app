import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { UserRole } from "@/types";
import { getUserRoleLabel } from "@/utils/helpers";

interface LoginFormProps {
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
  onLogin: () => void;
}

export const LoginForm = ({
  userRole,
  setUserRole,
  onLogin,
}: LoginFormProps) => {
  const roleOptions: { value: UserRole; label: string }[] = [
    { value: "employee", label: getUserRoleLabel("employee") },
    { value: "manager", label: getUserRoleLabel("manager") },
    { value: "hr", label: getUserRoleLabel("hr") },
    { value: "admin", label: getUserRoleLabel("admin") },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md animate-scale-in">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
            <Icon name="GraduationCap" className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            Корпоративное обучение
          </CardTitle>
          <p className="text-gray-600 mt-2">
            Система управления знаниями сотрудников
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@company.com"
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Пароль</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="role">Роль</Label>
            <select
              id="role"
              value={userRole}
              onChange={(e) => setUserRole(e.target.value as UserRole)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {roleOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <Button
            onClick={onLogin}
            className="w-full bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Войти в систему
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
