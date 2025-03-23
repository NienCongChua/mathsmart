
import React from 'react';
import { 
  Calculator, ChevronDown, FunctionSquare, Sigma, 
  Triangle, LineChart
} from 'lucide-react';

interface SubjectSelectorProps {
  selectedSubject: string;
  onSelectSubject: (subject: string) => void;
}

const SubjectSelector: React.FC<SubjectSelectorProps> = ({
  selectedSubject,
  onSelectSubject
}) => {
  const subjects = [
    { id: 'algebra', label: 'Algebra', icon: <Calculator size={18} /> },
    { id: 'calculus', label: 'Calculus', icon: <FunctionSquare size={18} /> },
    { id: 'trigonometry', label: 'Trigonometry', icon: <Triangle size={18} /> },
    { id: 'statistics', label: 'Statistics', icon: <Sigma size={18} /> },
    { id: 'graphing', label: 'Graphing', icon: <LineChart size={18} /> },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8 animate-fade-in">
      {subjects.map((subject) => (
        <button
          key={subject.id}
          className={`subject-button flex items-center gap-2 ${
            selectedSubject === subject.id ? 'active' : ''
          }`}
          onClick={() => onSelectSubject(subject.id)}
        >
          {subject.icon}
          <span>{subject.label}</span>
          {selectedSubject === subject.id && <ChevronDown size={14} />}
        </button>
      ))}
    </div>
  );
};

export default SubjectSelector;
