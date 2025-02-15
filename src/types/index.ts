
export type Status = 'pending' | 'complete' | 'review';

export type Task = {
  id: string;
  title: string;
  status: Status;
  externalLink: string;
  copyContent?: string;
  copywriter?: string;
  designContent?: string;
  designer?: string;
  createdAt: string;
  updatedAt: string;
};

export type ChecklistItem = {
  id: string;
  question: string;
  type: 'copy' | 'design';
  status: 'pending' | 'atende' | 'atende_parcialmente' | 'nao_atende';
  feedback?: string;
};

export type ReviewType = 'copy' | 'design';
