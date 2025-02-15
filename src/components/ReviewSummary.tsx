
import { ChecklistItem } from '@/types';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

interface ReviewSummaryProps {
  items: ChecklistItem[];
  isOpen: boolean;
  onClose: () => void;
}

export const ReviewSummary = ({ items, isOpen, onClose }: ReviewSummaryProps) => {
  const feedbackItems = items.filter(
    item => item.status === 'nao_atende' || item.status === 'atende_parcialmente'
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Resumo da Revisão</DialogTitle>
          <DialogDescription>
            Pontos que precisam de atenção
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="h-[500px] pr-4">
          <div className="space-y-6">
            {feedbackItems.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-lg border space-y-2"
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-medium">{item.question}</h3>
                  <span className={`px-2 py-1 rounded text-sm ${
                    item.status === 'nao_atende' 
                      ? 'bg-red-100 text-red-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {item.status === 'nao_atende' ? 'Não Atende' : 'Atende Parcialmente'}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{item.feedback}</p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
