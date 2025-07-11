import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserRole } from "@/types";
import { Header } from "./Header";
import { StatsCards } from "./StatsCards";
import { CoursesTab } from "./tabs/CoursesTab";
import { TestsTab } from "./tabs/TestsTab";
import { KnowledgeTab } from "./tabs/KnowledgeTab";
import { EmployeesTab } from "./tabs/EmployeesTab";

interface DashboardProps {
  userRole: UserRole;
}

export const Dashboard = ({ userRole }: DashboardProps) => {
  const isAdminOrHR = userRole === "admin" || userRole === "hr";

  return (
    <div className="min-h-screen bg-gray-50">
      <Header userRole={userRole} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isAdminOrHR && <StatsCards />}

        <Tabs defaultValue="courses" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="courses">Курсы</TabsTrigger>
            <TabsTrigger value="tests">Тесты</TabsTrigger>
            <TabsTrigger value="knowledge">База знаний</TabsTrigger>
            {isAdminOrHR && (
              <TabsTrigger value="employees">Сотрудники</TabsTrigger>
            )}
          </TabsList>

          <TabsContent value="courses" className="mt-6">
            <CoursesTab />
          </TabsContent>

          <TabsContent value="tests" className="mt-6">
            <TestsTab />
          </TabsContent>

          <TabsContent value="knowledge" className="mt-6">
            <KnowledgeTab />
          </TabsContent>

          {isAdminOrHR && (
            <TabsContent value="employees" className="mt-6">
              <EmployeesTab />
            </TabsContent>
          )}
        </Tabs>
      </main>
    </div>
  );
};
