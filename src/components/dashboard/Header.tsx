import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";
import { UserRole } from "@/types";
import { getUserRoleLabel } from "@/utils/helpers";

interface HeaderProps {
  userRole: UserRole;
}

export const Header = ({ userRole }: HeaderProps) => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Icon name="GraduationCap" className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">
              Корпоративное обучение
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="outline" className="text-sm">
              {getUserRoleLabel(userRole)}
            </Badge>
            <Avatar className="hover-scale cursor-pointer">
              <AvatarImage src="/api/placeholder/40/40" />
              <AvatarFallback>ИИ</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
};
