import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface StatCardProps {
  title: string;
  value: string;
  icon: string;
  color: string;
}

const StatCard = ({ title, value, icon, color }: StatCardProps) => {
  return (
    <Card className="hover-scale transition-transform">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-3xl font-bold text-gray-900">{value}</p>
          </div>
          <div
            className={`w-12 h-12 ${color} rounded-full flex items-center justify-center`}
          >
            <Icon name={icon} className="w-6 h-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const StatsCards = () => {
  const stats = [
    {
      title: "Всего сотрудников",
      value: "324",
      icon: "Users",
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Активных курсов",
      value: "28",
      icon: "BookOpen",
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Пройдено тестов",
      value: "1,247",
      icon: "ClipboardCheck",
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Средний балл",
      value: "4.2",
      icon: "TrendingUp",
      color: "bg-yellow-100 text-yellow-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};
