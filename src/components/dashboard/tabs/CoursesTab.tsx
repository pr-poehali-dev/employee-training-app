import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Course } from "@/types";
import { mockCourses } from "@/data/mockData";

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  const getStatusBadge = (status: Course["status"]) => {
    switch (status) {
      case "completed":
        return <Badge variant="default">Завершен</Badge>;
      case "in_progress":
        return <Badge variant="secondary">В процессе</Badge>;
      default:
        return <Badge variant="outline">Доступен</Badge>;
    }
  };

  const getButtonText = (status: Course["status"]) => {
    switch (status) {
      case "completed":
        return "Повторить";
      case "in_progress":
        return "Продолжить";
      default:
        return "Начать";
    }
  };

  return (
    <Card className="hover-scale transition-transform animate-fade-in">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{course.title}</CardTitle>
          {getStatusBadge(course.status)}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{course.description}</p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-gray-500">{course.duration}</span>
          {course.progress > 0 && (
            <span className="text-sm font-medium">{course.progress}%</span>
          )}
        </div>
        {course.progress > 0 && (
          <Progress value={course.progress} className="mb-4" />
        )}
        <Button
          className="w-full"
          variant={course.status === "completed" ? "outline" : "default"}
        >
          {getButtonText(course.status)}
        </Button>
      </CardContent>
    </Card>
  );
};

export const CoursesTab = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockCourses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};
