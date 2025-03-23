
import React from 'react';
import { cn } from '@/lib/utils';

interface MathKeyboardProps {
  onKeyPress: (key: string) => void;
  subject: string;
}

const MathKeyboard: React.FC<MathKeyboardProps> = ({ onKeyPress, subject }) => {
  // Define keys based on selected subject
  const getKeysBySubject = (): string[] => {
    const commonKeys = ['(', ')', '+', '-', '*', '/', '=', '^', '.'];
    
    switch (subject) {
      case 'algebra':
        return [...commonKeys, 'x', 'y', 'z', '√', 'π'];
      case 'calculus':
        return [...commonKeys, 'x', 'd/dx', '∫', 'lim', '∞'];
      case 'trigonometry':
        return [...commonKeys, 'sin', 'cos', 'tan', 'π', '°'];
      case 'statistics':
        return [...commonKeys, 'μ', 'σ', 'Σ', '!', 'P('];
      default:
        return commonKeys;
    }
  };

  const keys = getKeysBySubject();

  return (
    <div className="math-keyboard grid-cols-5 sm:grid-cols-10 animate-slide-up">
      {keys.map((key, index) => (
        <button
          key={index}
          className={cn("math-key", `delay-${(index % 5) * 100}`)}
          onClick={() => onKeyPress(key)}
        >
          {key}
        </button>
      ))}
      <button
        className="math-key col-span-2 bg-red-50 hover:bg-red-100 text-red-600"
        onClick={() => onKeyPress('CLEAR')}
      >
        Clear
      </button>
      <button
        className="math-key col-span-3 bg-slate-50 hover:bg-slate-100"
        onClick={() => onKeyPress('BACKSPACE')}
      >
        Backspace
      </button>
    </div>
  );
};

export default MathKeyboard;
