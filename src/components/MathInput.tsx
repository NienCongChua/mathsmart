
import React, { useState } from 'react';
import MathKeyboard from './MathKeyboard';

interface MathInputProps {
  value: string;
  onChange: (value: string) => void;
  onSolve: () => void;
  subject: string;
  isValid: boolean;
}

const MathInput: React.FC<MathInputProps> = ({
  value,
  onChange,
  onSolve,
  subject,
  isValid,
}) => {
  const [showKeyboard, setShowKeyboard] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleKeyPress = (key: string) => {
    if (key === 'CLEAR') {
      onChange('');
    } else if (key === 'BACKSPACE') {
      onChange(value.slice(0, -1));
    } else {
      onChange(value + key);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && isValid) {
      e.preventDefault();
      onSolve();
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="math-input-container mb-4 animate-slide-down">
        <input
          type="text"
          value={value}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="math-input text-center"
          placeholder="Enter your math problem here..."
          aria-label="Math expression input"
          autoFocus
        />
      </div>
      
      <div className="flex items-center justify-center mb-6">
        <button
          className="solve-button animate-scale-in"
          disabled={!isValid}
          onClick={onSolve}
        >
          Solve
        </button>
      </div>
      
      <div className="flex items-center justify-center mb-4">
        <button
          className="text-slate-500 text-sm flex items-center space-x-1 hover:text-primary transition-colors"
          onClick={() => setShowKeyboard(!showKeyboard)}
        >
          <span>{showKeyboard ? 'Hide' : 'Show'} math keyboard</span>
          <span className="text-xs">{showKeyboard ? '▲' : '▼'}</span>
        </button>
      </div>
      
      {showKeyboard && (
        <MathKeyboard onKeyPress={handleKeyPress} subject={subject} />
      )}
    </div>
  );
};

export default MathInput;
