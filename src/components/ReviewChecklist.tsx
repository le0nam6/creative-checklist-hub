
import { useState } from 'react';
import { ChecklistItem, ReviewType } from '@/types';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { ReviewSummary } from './ReviewSummary';

interface ReviewChecklistProps {
  type: ReviewType;
  taskId: string;
}

const CHECKLIST_ITEMS: Record<ReviewType, string[]> = {
  copy: [
    'O texto está gramaticalmente correto?',
    'A mensagem está clara e objetiva?',
    'O tom de voz está adequado ao público-alvo?',
    'As keywords foram utilizadas corretamente?',
  ],
  design: [
    'O design segue as diretrizes da marca?',
    'As cores estão conforme o guia de estilo?',
    'A hierarquia visual está clara?',
    'O layout está responsivo?',
  ],
};

export const ReviewChecklist = ({ type, taskId }: ReviewChecklistProps) => {
  const [items, setItems] = useState<ChecklistItem[]>(
    CHECKLIST_ITEMS[type].map((question, index) => ({
      id: `${type}-${index}`,
      question,
      type,
      status: 'pending',
    }))
  );

  const [submitting, setSubmitting] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  const handleStatusChange = (itemId: string, status: ChecklistItem['status']) => {
    setItems(items.map(item => 
      item.id === itemId ? { ...item, status } : item
    ));
  };

  const handleFeedbackChange = (itemId: string, feedback: string) => {
    setItems(items.map(item =>
      item.id === itemId ? { ...item, feedback } : item
    ));
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      // Here you would typically send the review data to your backend
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      toast.success('Revisão salva com sucesso!');
      setShowSummary(true);
    } catch (error) {
      toast.error('Erro ao salvar a revisão');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {items.map((item) => (
        <div key={item.id} className="space-y-4 p-4 rounded-lg border">
          <p className="font-medium">{item.question}</p>
          
          <RadioGroup
            value={item.status}
            onValueChange={(value: ChecklistItem['status']) => 
              handleStatusChange(item.id, value)
            }
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="atende" id={`${item.id}-atende`} />
                <Label htmlFor={`${item.id}-atende`}>Atende</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="atende_parcialmente"
                  id={`${item.id}-parcial`}
                />
                <Label htmlFor={`${item.id}-parcial`}>Atende Parcialmente</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="nao_atende"
                  id={`${item.id}-nao-atende`}
                />
                <Label htmlFor={`${item.id}-nao-atende`}>Não Atende</Label>
              </div>
            </div>
          </RadioGroup>

          {(item.status === 'atende_parcialmente' || item.status === 'nao_atende') && (
            <Textarea
              placeholder="Adicione um feedback detalhado..."
              value={item.feedback}
              onChange={(e) => handleFeedbackChange(item.id, e.target.value)}
              className="mt-2"
            />
          )}
        </div>
      ))}

      <div className="flex justify-end">
        <Button onClick={handleSubmit} disabled={submitting}>
          {submitting ? 'Salvando...' : 'Salvar Revisão'}
        </Button>
      </div>

      <ReviewSummary
        items={items}
        isOpen={showSummary}
        onClose={() => setShowSummary(false)}
      />
    </div>
  );
};
