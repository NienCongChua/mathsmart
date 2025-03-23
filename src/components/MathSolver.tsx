
import React, { useState } from 'react';
import SubjectSelector from './SubjectSelector';
import MathInput from './MathInput';
import StepByStepSolution from './StepByStepSolution';
import { solveEquation, isValidMathExpression } from '@/lib/mathUtils';

type Subject = 'algebra' | 'calculus' | 'trigonometry' | 'statistics' | 'graphing';

const MathSolver: React.FC = () => {
  const [mathExpression, setMathExpression] = useState('');
  const [selectedSubject, setSelectedSubject] = useState<Subject>('algebra');
  const [solution, setSolution] = useState<{
    result: string;
    steps: Array<{ explanation: string; result: string }>;
  } | null>(null);

  const isValid = isValidMathExpression(mathExpression);

  const handleSolve = () => {
    if (!isValid) return;
    
    const result = solveEquation(mathExpression, selectedSubject);
    setSolution(result);
    
    // Scroll to solution with a small delay to allow for animation
    setTimeout(() => {
      document.getElementById('solution-container')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 300);
  };

  const handleSubjectChange = (subject: string) => {
    setSelectedSubject(subject as Subject);
    // Clear current solution when changing subjects
    setSolution(null);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <SubjectSelector
        selectedSubject={selectedSubject}
        onSelectSubject={handleSubjectChange}
      />
      
      <MathInput
        value={mathExpression}
        onChange={setMathExpression}
        onSolve={handleSolve}
        subject={selectedSubject}
        isValid={isValid}
      />
      
      {solution && selectedSubject !== 'graphing' && (
        <div id="solution-container" className="mt-12">
          <StepByStepSolution 
            steps={solution.steps} 
            result={solution.result} 
          />
        </div>
      )}
    </div>
  );
};

export default MathSolver;
