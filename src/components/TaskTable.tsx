
import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Task } from '@/types';
import { formatDate } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface TaskTableProps {
  tasks: Task[];
  onTaskSelect: (task: Task) => void;
}

export const TaskTable = ({ tasks, onTaskSelect }: TaskTableProps) => {
  return (
    <div className="w-full overflow-auto animate-fadeIn">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Tarefa</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Responsáveis</TableHead>
            <TableHead>Última Atualização</TableHead>
            <TableHead>Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map((task) => (
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
                  <Button onClick={() => onTaskSelect(task)} size="sm">
                    Revisar
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
