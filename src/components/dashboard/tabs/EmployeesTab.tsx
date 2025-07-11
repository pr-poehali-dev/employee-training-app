import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";
import { Employee } from "@/types";
import { mockEmployees } from "@/data/mockData";
import { getStatusColor, getStatusText, getInitials } from "@/utils/helpers";

interface EmployeeCardProps {
  employee: Employee;
}

const EmployeeCard = ({ employee }: EmployeeCardProps) => {
  return (
    <Card className="hover-scale transition-transform animate-fade-in">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={`/api/placeholder/40/40`} />
              <AvatarFallback>{getInitials(employee.name)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center space-x-2">
                <h4 className="font-semibold">{employee.name}</h4>
                <div
                  className={`w-3 h-3 rounded-full ${getStatusColor(employee.status)}`}
                ></div>
              </div>
              <p className="text-sm text-gray-600">
                {employee.position} • {employee.department}
              </p>
              <p className="text-sm text-gray-500">{employee.email}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-gray-900">
              {employee.score}
            </div>
            <div className="text-sm text-gray-500">
              {getStatusText(employee.status)}
            </div>
            <div className="text-xs text-gray-400 mt-1">
              {employee.tests} тестов • {employee.avgScore}% среднее
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const EmployeesTab = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Управление сотрудниками</h3>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Icon name="Filter" className="w-4 h-4 mr-2" />
            Фильтры
          </Button>
          <Button variant="outline" size="sm">
            <Icon name="Download" className="w-4 h-4 mr-2" />
            Экспорт
          </Button>
        </div>
      </div>
      <div className="grid gap-4">
        {mockEmployees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>
    </div>
  );
};
