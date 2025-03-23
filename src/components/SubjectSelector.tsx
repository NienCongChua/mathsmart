
import React from 'react';
import { cn } from '@/lib/utils';

type Subject = 'algebra' | 'calculus' | 'trigonometry' | 'statistics';

interface SubjectSelectorProps {
  selectedSubject: Subject;
  onSelectSubject: (subject: Subject) => void;
}

const SubjectSelector: React.FC<SubjectSelectorProps> = ({
  selectedSubject,
  onSelectSubject,
}) => {
  const subjects: { id: Subject; label: string }[] = [
    { id: 'algebra', label: 'Algebra' },
    { id: 'calculus', label: 'Calculus' },
    { id: 'trigonometry', label: 'Trigonometry' },
    { id: 'statistics', label: 'Statistics' },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mb-6 animate-slide-down">
      {subjects.map((subject, index) => (
        <button
          key={subject.id}
          className={cn(
            "subject-button",
            selectedSubject === subject.id && "active",
            `delay-${index * 100}`
          )}
          onClick={() => onSelectSubject(subject.id)}
          aria-pressed={selectedSubject === subject.id}
        >
          {subject.label}
        </button>
      ))}
    </div>
  );
};

export default SubjectSelector;
