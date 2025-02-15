
import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Task } from '@/types';
import { formatDate } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, FileText } from 'lucide-react';
import { ReviewSummary } from './ReviewSummary';

interface TaskTableProps {
  tasks: Task[];
  onTaskSelect: (task: Task) => void;
}

export const TaskTable = ({ tasks, onTaskSelect }: TaskTableProps) => {
  const [selectedTaskForSummary, setSelectedTaskForSummary] = useState<Task | null>(null);

  const getReviewStatus = (task: Task) => {
    const hasCopyReview = task.copyReviewStatus === 'completed';
    const hasDesignReview = task.designReviewStatus === 'completed';

    if (hasCopyReview && hasDesignReview) {
      return { label: 'Todas revisões completas', className: 'bg-green-100 text-green-700' };
    } else if (hasCopyReview) {
      return { label: 'Copy revisado', className: 'bg-blue-100 text-blue-700' };
    } else if (hasDesignReview) {
      return { label: 'Design revisado', className: 'bg-purple-100 text-purple-700' };
    }
    return { label: 'Revisões pendentes', className: 'bg-gray-100 text-gray-700' };
  };

  return (
    <div className="w-full overflow-auto animate-fadeIn">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Tarefa</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Status da Revisão</TableHead>
            <TableHead>Responsáveis</TableHead>
            <TableHead>Última Atualização</TableHead>
            <TableHead>Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map((task) => {
            const reviewStatus = getReviewStatus(task);
            
            return (
              <TableRow key={task.id} className="hover:bg-muted/50 transition-colors">
                <TableCell className="font-medium">{task.title}</TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className={`
                      ${task.status === 'pending' ? 'bg-status-pending text-white' : ''}
                      ${task.status === 'complete' ? 'bg-status-complete text-white' : ''}
                      ${task.status === 'review' ? 'bg-status-review text-white' : ''}
                    `}
                  >
                    {task.status === 'pending' ? 'Pendente' : ''}
                    {task.status === 'complete' ? 'Completo' : ''}
                    {task.status === 'review' ? 'Em Revisão' : ''}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge className={reviewStatus.className} variant="secondary">
                    {reviewStatus.label}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1 text-sm">
                    {task.copywriter && <span>Copy: {task.copywriter}</span>}
                    {task.designer && <span>Design: {task.designer}</span>}
                  </div>
                </TableCell>
                <TableCell>{formatDate(task.updatedAt)}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={task.externalLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Link
                      </a>
                    </Button>
                    {task.hasReviews && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setSelectedTaskForSummary(task)}
                      >
                        <FileText className="w-4 h-4 mr-1" />
                        Ver Feedback
                      </Button>
                    )}
                    <Button onClick={() => onTaskSelect(task)} size="sm">
                      Revisar
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      <ReviewSummary
        items={selectedTaskForSummary?.reviews || []}
        isOpen={!!selectedTaskForSummary}
        onClose={() => setSelectedTaskForSummary(null)}
      />
    </div>
  );
};
