import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Test } from "@/types";
import { mockTests } from "@/data/mockData";

interface TestCardProps {
  test: Test;
}

const TestCard = ({ test }: TestCardProps) => {
  return (
    <Card className="hover-scale transition-transform animate-fade-in">
      <CardHeader>
        <CardTitle className="text-lg">{test.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Вопросов:</span>
            <span className="font-medium">{test.questions}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Время:</span>
            <span className="font-medium">{test.duration} мин</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Последний результат:</span>
            <span className="font-medium">{test.lastResult}%</span>
          </div>
        </div>
        <Separator className="my-4" />
        <Button className="w-full">Пройти тест</Button>
      </CardContent>
    </Card>
  );
};

export const TestsTab = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockTests.map((test) => (
        <TestCard key={test.id} test={test} />
      ))}
    </div>
  );
};
