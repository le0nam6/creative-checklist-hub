
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Task, ReviewType } from '@/types';
import { ExternalLink } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { ReviewChecklist } from './ReviewChecklist';
import { Button } from '@/components/ui/button';

interface TaskReviewCardProps {
  task: Task;
  onClose: () => void;
}

export const TaskReviewCard = ({ task, onClose }: TaskReviewCardProps) => {
  const [reviewType, setReviewType] = useState<ReviewType | null>(null);

  return (
    <Card className="w-full max-w-4xl mx-auto animate-slideIn">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>{task.title}</CardTitle>
            <CardDescription>Revisão de Conteúdo</CardDescription>
          </div>
          <Button variant="outline" size="sm" asChild>
            <a href={task.externalLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-1" />
              Abrir Link
            </a>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {task.copyContent && (
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Entrega de Copy</h3>
            <div className="p-4 rounded-md bg-muted">
              <p className="text-sm">{task.copyContent}</p>
            </div>
            <p className="text-sm text-muted-foreground">
              Copywriter: {task.copywriter}
            </p>
          </div>
        )}

        {task.designContent && (
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Entrega de Design</h3>
            <div className="p-4 rounded-md bg-muted">
              <img
                src={task.designContent}
                alt="Design Preview"
                className="max-w-full h-auto rounded"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Designer: {task.designer}
            </p>
          </div>
        )}

        <div className="space-y-4">
          <h3 className="text-sm font-medium">Tipo de Revisão</h3>
          <RadioGroup
            value={reviewType ?? undefined}
            onValueChange={(value: ReviewType) => setReviewType(value)}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="copy" id="copy" />
              <Label htmlFor="copy">Copy</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="design" id="design" />
              <Label htmlFor="design">Design</Label>
            </div>
          </RadioGroup>
        </div>

        {reviewType && <ReviewChecklist type={reviewType} taskId={task.id} />}

        <div className="flex justify-end">
          <Button variant="outline" onClick={onClose}>
            Fechar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
