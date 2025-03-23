
import React, { useState } from 'react';
import MathKeyboard from './MathKeyboard';
import GraphPlotter from './GraphPlotter';

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
  const [showGraph, setShowGraph] = useState(false);

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

  const toggleGraph = () => {
    setShowGraph(prev => !prev);
  };

  // Check if the current expression is likely to be a function for graphing
  const isGraphable = () => {
    return subject === 'graphing' || 
           /y\s*=|f\(x\)\s*=|=\s*f\(x\)|x\^[0-9]|sin\(|cos\(|tan\(/.test(value);
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
          placeholder={subject === 'graphing' ? "Enter function to graph (e.g., y = x^2)" : "Enter your math problem here..."}
          aria-label="Math expression input"
          autoFocus
        />
      </div>
      
      <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
        <button
          className="solve-button animate-scale-in"
          disabled={!isValid}
          onClick={onSolve}
        >
          {subject === 'graphing' ? 'Plot' : 'Solve'}
        </button>
        
        {isGraphable() && (
          <button
            className={`px-4 py-2 rounded-xl border font-medium transition-all duration-300
                      ${showGraph 
                        ? 'bg-blue-100 text-blue-700 border-blue-300'
                        : 'bg-white text-slate-600 border-slate-200'}`}
            onClick={toggleGraph}
          >
            {showGraph ? 'Hide Graph' : 'Show Graph'}
          </button>
        )}
      </div>
      
      {isGraphable() && <GraphPlotter equation={value} visible={showGraph} />}
      
      <div className="flex items-center justify-center mb-4 mt-4">
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
