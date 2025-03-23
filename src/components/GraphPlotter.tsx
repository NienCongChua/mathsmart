
import React, { useState, useEffect } from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, ReferenceLine 
} from 'recharts';

interface GraphPlotterProps {
  equation: string;
  visible: boolean;
}

const GraphPlotter: React.FC<GraphPlotterProps> = ({ equation, visible }) => {
  const [plotData, setPlotData] = useState<Array<{x: number, y: number}>>([]);
  
  useEffect(() => {
    if (!visible || !equation) return;
    
    try {
      // Generate data points for the graph
      const data = generatePlotData(equation);
      setPlotData(data);
    } catch (error) {
      console.error("Error plotting graph:", error);
      setPlotData([]);
    }
  }, [equation, visible]);

  const generatePlotData = (eq: string): Array<{x: number, y: number}> => {
    const data: Array<{x: number, y: number}> = [];
    
    // Simple function parser for demo purposes
    // In a real app, you'd use a proper math expression evaluator like math.js
    const cleanEq = eq.replace(/y\s*=\s*/, '').replace(/f\(x\)\s*=\s*/, '');
    
    // Generate points from -10 to 10 with 0.5 steps
    for (let x = -10; x <= 10; x += 0.5) {
      try {
        // Very basic evaluation for simple expressions like x^2, 2*x, etc.
        // Replace with a proper math parser in production
        let expression = cleanEq
          .replace(/x\^2/g, `(${x}*${x})`)
          .replace(/x\^3/g, `(${x}*${x}*${x})`)
          .replace(/x/g, x.toString());
        
        // Use Function constructor to evaluate the expression
        // Note: This is not safe for user input in production!
        const y = new Function(`return ${expression}`)();
        
        if (!isNaN(y) && isFinite(y)) {
          data.push({ x, y });
        }
      } catch (e) {
        console.error("Error evaluating point:", e);
        // Skip this point if there's an evaluation error
      }
    }
    
    return data;
  };

  if (!visible) return null;

  return (
    <div className="w-full bg-white/80 backdrop-blur-lg rounded-xl border border-slate-200 p-4 shadow-lg animate-fade-in">
      <h3 className="text-lg font-medium mb-2 text-slate-700">Graph Plot</h3>
      {plotData.length > 0 ? (
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={plotData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="x" 
                domain={[-10, 10]} 
                type="number" 
                tick={{ fontSize: 12 }} 
                tickCount={11}
                label={{ value: 'x', position: 'insideBottomRight', offset: -5 }}
              />
              <YAxis 
                domain={[-10, 10]} 
                tick={{ fontSize: 12 }} 
                tickCount={11} 
                label={{ value: 'y', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip 
                formatter={(value: number) => [value.toFixed(2), 'y']}
                labelFormatter={(label: number) => `x: ${label.toFixed(2)}`}
              />
              <ReferenceLine x={0} stroke="#666" strokeWidth={1} />
              <ReferenceLine y={0} stroke="#666" strokeWidth={1} />
              <Line 
                type="monotone" 
                dataKey="y" 
                stroke="#3b82f6" 
                strokeWidth={2}
                dot={false} 
                activeDot={{ r: 4 }} 
                isAnimationActive={true} 
                animationDuration={500}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <div className="h-64 w-full flex items-center justify-center text-slate-400">
          Invalid equation or no data to plot
        </div>
      )}
      <div className="mt-2 text-xs text-slate-500">
        Tip: Enter equations like "x^2", "2*x+1", or "sin(x)"
      </div>
    </div>
  );
};

export default GraphPlotter;
