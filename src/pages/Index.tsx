
import { useState } from 'react';
import { TaskTable } from '@/components/TaskTable';
import { TaskReviewCard } from '@/components/TaskReviewCard';
import { Task } from '@/types';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

// Mock data for demonstration
const MOCK_TASKS: Task[] = [
  {
    id: '1',
    title: 'Landing Page - Produto X',
    status: 'pending',
    externalLink: 'https://example.com/task/1',
    copyContent: 'Texto da landing page do Produto X...',
    copywriter: 'João Silva',
    designContent: 'https://placehold.co/600x400',
    designer: 'Maria Oliveira',
    createdAt: '2024-03-15T10:00:00Z',
    updatedAt: '2024-03-15T15:30:00Z',
  },
  {
    id: '2',
    title: 'Email Marketing - Campanha Y',
    status: 'review',
    externalLink: 'https://example.com/task/2',
    copyContent: 'Conteúdo do email marketing...',
    copywriter: 'Ana Santos',
    createdAt: '2024-03-14T09:00:00Z',
    updatedAt: '2024-03-14T16:45:00Z',
  },
  {
    id: '3',
    title: 'Social Media - Postagem Z',
    status: 'complete',
    externalLink: 'https://example.com/task/3',
    designContent: 'https://placehold.co/600x600',
    designer: 'Carlos Mendes',
    createdAt: '2024-03-13T14:00:00Z',
    updatedAt: '2024-03-13T17:20:00Z',
  },
];

const Index = () => {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  return (
    <div className="container py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Creative Review Hub</h1>
        <p className="text-muted-foreground mt-2">
          Gerencie e revise entregas criativas de forma eficiente
        </p>
      </header>

      <main>
        <TaskTable
          tasks={MOCK_TASKS}
          onTaskSelect={(task) => setSelectedTask(task)}
        />

        <Dialog open={!!selectedTask} onOpenChange={() => setSelectedTask(null)}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>Revisão de Tarefa</DialogTitle>
              <DialogDescription>
                Revise os detalhes e forneça feedback para esta entrega
              </DialogDescription>
            </DialogHeader>
            {selectedTask && (
              <TaskReviewCard
                task={selectedTask}
                onClose={() => setSelectedTask(null)}
              />
            )}
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
};

export default Index;
