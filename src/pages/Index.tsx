import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Index = () => {
  const [currentView, setCurrentView] = useState("landing");
  const [userRole, setUserRole] = useState("employee");
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const employees = [
    {
      id: 1,
      name: "Иванов А.П.",
      department: "IT",
      position: "Разработчик",
      email: "ivanov@company.com",
      score: 4.2,
      status: "green",
      tests: 12,
      avgScore: 87,
    },
    {
      id: 2,
      name: "Петрова М.В.",
      department: "HR",
      position: "Менеджер",
      email: "petrova@company.com",
      score: 3.8,
      status: "yellow",
      tests: 8,
      avgScore: 76,
    },
    {
      id: 3,
      name: "Сидоров К.И.",
      department: "Продажи",
      position: "Менеджер",
      email: "sidorov@company.com",
      score: 2.1,
      status: "red",
      tests: 5,
      avgScore: 42,
    },
    {
      id: 4,
      name: "Козлова Е.А.",
      department: "Маркетинг",
      position: "Специалист",
      email: "kozlova@company.com",
      score: 4.7,
      status: "green",
      tests: 15,
      avgScore: 94,
    },
  ];

  const courses = [
    {
      id: 1,
      title: "Основы кибербезопасности",
      description: "Изучите основные принципы защиты информации",
      duration: "2 часа",
      progress: 0,
      status: "available",
    },
    {
      id: 2,
      title: "Управление проектами",
      description: "Методологии Agile и Scrum в практике",
      duration: "4 часа",
      progress: 65,
      status: "in_progress",
    },
    {
      id: 3,
      title: "Клиентский сервис",
      description: "Эффективное взаимодействие с клиентами",
      duration: "3 часа",
      progress: 100,
      status: "completed",
    },
    {
      id: 4,
      title: "Цифровые технологии",
      description: "Современные инструменты для работы",
      duration: "5 часов",
      progress: 0,
      status: "available",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "green":
        return "bg-green-500";
      case "yellow":
        return "bg-yellow-500";
      case "red":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "green":
        return "Высокий уровень";
      case "yellow":
        return "Средний уровень";
      case "red":
        return "Требует внимания";
      default:
        return "Не определен";
    }
  };

  const LoginForm = () => (
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
              onChange={(e) => setUserRole(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="employee">Сотрудник</option>
              <option value="manager">Руководитель</option>
              <option value="hr">HR</option>
              <option value="admin">Администратор</option>
            </select>
          </div>
          <Button
            onClick={() => setCurrentView("dashboard")}
            className="w-full bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Войти в систему
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  const Dashboard = () => (
    <div className="min-h-screen bg-gray-50">
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
                {userRole === "employee"
                  ? "Сотрудник"
                  : userRole === "manager"
                    ? "Руководитель"
                    : userRole === "hr"
                      ? "HR"
                      : "Администратор"}
              </Badge>
              <Avatar className="hover-scale cursor-pointer">
                <AvatarImage src="/api/placeholder/40/40" />
                <AvatarFallback>ИИ</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {(userRole === "admin" || userRole === "hr") && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="hover-scale transition-transform">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Всего сотрудников
                    </p>
                    <p className="text-3xl font-bold text-gray-900">324</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Icon name="Users" className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale transition-transform">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Активных курсов
                    </p>
                    <p className="text-3xl font-bold text-gray-900">28</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon name="BookOpen" className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale transition-transform">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Пройдено тестов
                    </p>
                    <p className="text-3xl font-bold text-gray-900">1,247</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Icon
                      name="ClipboardCheck"
                      className="w-6 h-6 text-purple-600"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale transition-transform">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Средний балл
                    </p>
                    <p className="text-3xl font-bold text-gray-900">4.2</p>
                  </div>
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Icon
                      name="TrendingUp"
                      className="w-6 h-6 text-yellow-600"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        <Tabs defaultValue="courses" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="courses">Курсы</TabsTrigger>
            <TabsTrigger value="tests">Тесты</TabsTrigger>
            <TabsTrigger value="knowledge">База знаний</TabsTrigger>
            {(userRole === "admin" || userRole === "hr") && (
              <TabsTrigger value="employees">Сотрудники</TabsTrigger>
            )}
          </TabsList>

          <TabsContent value="courses" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <Card
                  key={course.id}
                  className="hover-scale transition-transform animate-fade-in"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{course.title}</CardTitle>
                      <Badge
                        variant={
                          course.status === "completed"
                            ? "default"
                            : course.status === "in_progress"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {course.status === "completed"
                          ? "Завершен"
                          : course.status === "in_progress"
                            ? "В процессе"
                            : "Доступен"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-500">
                        {course.duration}
                      </span>
                      {course.progress > 0 && (
                        <span className="text-sm font-medium">
                          {course.progress}%
                        </span>
                      )}
                    </div>
                    {course.progress > 0 && (
                      <Progress value={course.progress} className="mb-4" />
                    )}
                    <Button
                      className="w-full"
                      variant={
                        course.status === "completed" ? "outline" : "default"
                      }
                    >
                      {course.status === "completed"
                        ? "Повторить"
                        : course.status === "in_progress"
                          ? "Продолжить"
                          : "Начать"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tests" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <Card
                  key={i}
                  className="hover-scale transition-transform animate-fade-in"
                >
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Тест {i + 1}: Основы работы
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Вопросов:</span>
                        <span className="font-medium">{15 + i * 5}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Время:</span>
                        <span className="font-medium">{20 + i * 10} мин</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">
                          Последний результат:
                        </span>
                        <span className="font-medium">
                          {Math.floor(Math.random() * 40) + 60}%
                        </span>
                      </div>
                    </div>
                    <Separator className="my-4" />
                    <Button className="w-full">Пройти тест</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="knowledge" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Безопасность",
                "Процедуры",
                "Инструкции",
                "Политики",
                "Регламенты",
                "FAQ",
              ].map((topic, i) => (
                <Card
                  key={i}
                  className="hover-scale transition-transform animate-fade-in"
                >
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Icon
                          name="FileText"
                          className="w-5 h-5 text-blue-600"
                        />
                      </div>
                      <CardTitle className="text-lg">{topic}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Изучите материалы по теме "{topic}"
                    </p>
                    <div className="text-sm text-gray-500 mb-4">
                      {Math.floor(Math.random() * 50) + 10} материалов
                    </div>
                    <Button variant="outline" className="w-full">
                      Открыть раздел
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {(userRole === "admin" || userRole === "hr") && (
            <TabsContent value="employees" className="mt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">
                    Управление сотрудниками
                  </h3>
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
                  {employees.map((employee) => (
                    <Card
                      key={employee.id}
                      className="hover-scale transition-transform animate-fade-in"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <Avatar>
                              <AvatarImage src={`/api/placeholder/40/40`} />
                              <AvatarFallback>
                                {employee.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="flex items-center space-x-2">
                                <h4 className="font-semibold">
                                  {employee.name}
                                </h4>
                                <div
                                  className={`w-3 h-3 rounded-full ${getStatusColor(employee.status)}`}
                                ></div>
                              </div>
                              <p className="text-sm text-gray-600">
                                {employee.position} • {employee.department}
                              </p>
                              <p className="text-sm text-gray-500">
                                {employee.email}
                              </p>
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
                              {employee.tests} тестов • {employee.avgScore}%
                              среднее
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          )}
        </Tabs>
      </main>
    </div>
  );

  return currentView === "landing" ? <LoginForm /> : <Dashboard />;
};

export default Index;
