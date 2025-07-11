import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { KnowledgeBase } from "@/types";
import { mockKnowledgeBase } from "@/data/mockData";

interface KnowledgeCardProps {
  knowledge: KnowledgeBase;
}

const KnowledgeCard = ({ knowledge }: KnowledgeCardProps) => {
  return (
    <Card className="hover-scale transition-transform animate-fade-in">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <Icon name="FileText" className="w-5 h-5 text-blue-600" />
          </div>
          <CardTitle className="text-lg">{knowledge.topic}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">
          Изучите материалы по теме "{knowledge.topic}"
        </p>
        <div className="text-sm text-gray-500 mb-4">
          {knowledge.materialsCount} материалов
        </div>
        <Button variant="outline" className="w-full">
          Открыть раздел
        </Button>
      </CardContent>
    </Card>
  );
};

export const KnowledgeTab = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockKnowledgeBase.map((knowledge) => (
        <KnowledgeCard key={knowledge.id} knowledge={knowledge} />
      ))}
    </div>
  );
};
