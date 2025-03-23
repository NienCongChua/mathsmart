
import React from 'react';
import { cn } from '@/lib/utils';

interface MathKeyboardProps {
  onKeyPress: (key: string) => void;
  subject: string;
}

const MathKeyboard: React.FC<MathKeyboardProps> = ({ onKeyPress, subject }) => {
  // Define keys based on selected subject
  const getKeysBySubject = (): string[] => {
    const commonKeys = ['7', '8', '9', '(', ')', '4', '5', '6', '+', '-', '1', '2', '3', '*', '/', '0', '.', '=', '^', ','];
    
    switch (subject) {
      case 'algebra':
        return [...commonKeys, 'x', 'y', 'z', '√', 'π', 'a', 'b', 'c', '|', '√(', ')²', '≠'];
      case 'calculus':
        return [...commonKeys, 'x', 'd/dx', '∫', 'lim', '∞', '∂', 'dx', '→', 'f(x)', 'e^x', 'ln', 'log'];
      case 'trigonometry':
        return [...commonKeys, 'sin', 'cos', 'tan', 'π', '°', 'sec', 'csc', 'cot', 'sin⁻¹', 'cos⁻¹', 'tan⁻¹', 'rad'];
      case 'statistics':
        return [...commonKeys, 'μ', 'σ', 'Σ', '!', 'P(', 'C(', ')', 'n', 'p', 'x̄', 's', 'z'];
      case 'graphing':
        return [...commonKeys, 'x', 'y', 'f(x)', 'sin', 'cos', 'tan', 'x²', 'x³', '√', 'e^x', 'ln', 'log'];
      default:
        return commonKeys;
    }
  };

  const keys = getKeysBySubject();

  // Create a grid layout based on keys length
  const getGridClass = () => {
    const keysLength = keys.length;
    // 5 columns for phone, more for larger screens
    return `grid-cols-5 sm:grid-cols-10 ${keysLength > 30 ? 'md:grid-cols-12' : ''}`;
  };

  return (
    <div className={`math-keyboard ${getGridClass()} animate-slide-up`}>
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
