
import React from 'react';
import { cn } from '@/lib/utils';

interface Step {
  explanation: string;
  result: string;
}

interface StepByStepSolutionProps {
  steps: Step[];
  result: string;
}

const StepByStepSolution: React.FC<StepByStepSolutionProps> = ({ steps, result }) => {
  return (
    <div className="solution-container animate-scale-in">
      <h2 className="text-2xl font-medium mb-2 text-center">Solution</h2>
      <div className="text-xl text-center font-medium text-primary mb-6">
        {result}
      </div>
      
      <h3 className="text-lg font-medium mb-3">Step-by-Step Explanation:</h3>
      
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className={cn("solution-step", `delay-${index * 100}`)}
          >
            <div className="font-medium text-slate-800 mb-1">
              Step {index + 1}: {step.explanation}
            </div>
            <div className="pl-4 text-slate-600 font-mono">
              {step.result}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepByStepSolution;
