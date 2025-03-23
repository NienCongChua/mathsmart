
// Enhanced math utility module with more formulas and graphing support

const sampleSteps = {
  "algebra": {
    "2x + 3 = 7": [
      { explanation: "Subtract 3 from both sides", result: "2x + 3 - 3 = 7 - 3" },
      { explanation: "Simplify", result: "2x = 4" },
      { explanation: "Divide both sides by 2", result: "2x/2 = 4/2" },
      { explanation: "Simplify to get the value of x", result: "x = 2" },
    ],
    "x^2 - 4 = 0": [
      { explanation: "This is a quadratic equation in the form x² - 4 = 0", result: "x² = 4" },
      { explanation: "Take the square root of both sides", result: "x = ±√4" },
      { explanation: "Simplify", result: "x = ±2" },
      { explanation: "Therefore, x = 2 or x = -2", result: "x = 2 or x = -2" },
    ],
    "x^2 - 5x + 6 = 0": [
      { explanation: "This is a quadratic equation in standard form ax² + bx + c = 0", result: "x² - 5x + 6 = 0" },
      { explanation: "We can factor this equation", result: "(x - 2)(x - 3) = 0" },
      { explanation: "Using the zero product property, either factor can be zero", result: "x - 2 = 0 or x - 3 = 0" },
      { explanation: "Solve each equation", result: "x = 2 or x = 3" },
    ],
    "sqrt(x) = 3": [
      { explanation: "Square both sides to eliminate the square root", result: "x = 3²" },
      { explanation: "Simplify", result: "x = 9" },
    ],
  },
  "calculus": {
    "d/dx(x^2)": [
      { explanation: "Apply the power rule: d/dx(x^n) = n·x^(n-1)", result: "d/dx(x²) = 2·x^(2-1)" },
      { explanation: "Simplify the exponent", result: "2·x^1" },
      { explanation: "Final result", result: "2x" },
    ],
    "∫x^2 dx": [
      { explanation: "Apply the power rule for integration: ∫x^n dx = x^(n+1)/(n+1) + C", result: "∫x² dx = x^(2+1)/(2+1) + C" },
      { explanation: "Simplify", result: "x³/3 + C" },
      { explanation: "Where C is the constant of integration", result: "x³/3 + C" },
    ],
    "d/dx(sin(x))": [
      { explanation: "Apply the derivative rule for sine", result: "d/dx(sin(x)) = cos(x)" },
    ],
    "∫cos(x) dx": [
      { explanation: "Apply the integration rule for cosine", result: "∫cos(x) dx = sin(x) + C" },
      { explanation: "Where C is the constant of integration", result: "sin(x) + C" },
    ],
    "d/dx(e^x)": [
      { explanation: "The derivative of e^x is itself", result: "d/dx(e^x) = e^x" },
    ],
    "∫e^x dx": [
      { explanation: "The integral of e^x is itself plus a constant", result: "∫e^x dx = e^x + C" },
    ],
    "d/dx(ln(x))": [
      { explanation: "Apply the derivative rule for natural logarithm", result: "d/dx(ln(x)) = 1/x" },
    ],
  },
  "trigonometry": {
    "sin(π/2)": [
      { explanation: "The sine of π/2 radians (90 degrees) is 1", result: "sin(π/2) = 1" },
    ],
    "cos(0)": [
      { explanation: "The cosine of 0 radians (0 degrees) is 1", result: "cos(0) = 1" },
    ],
    "tan(π/4)": [
      { explanation: "The tangent of π/4 radians (45 degrees) is 1", result: "tan(π/4) = 1" },
    ],
    "sin^2(x) + cos^2(x)": [
      { explanation: "This is a fundamental trigonometric identity", result: "sin²(x) + cos²(x) = 1" },
    ],
    "sin(A+B)": [
      { explanation: "Using the angle addition formula for sine", result: "sin(A+B) = sin(A)cos(B) + cos(A)sin(B)" },
    ],
    "cos(A+B)": [
      { explanation: "Using the angle addition formula for cosine", result: "cos(A+B) = cos(A)cos(B) - sin(A)sin(B)" },
    ],
  },
  "statistics": {
    "μ = Σx/n": [
      { explanation: "This is the formula for the population mean (μ)", result: "μ = Σx/n" },
      { explanation: "Where Σx is the sum of all values and n is the number of values", result: "Sum all values and divide by the count" },
    ],
    "σ = √(Σ(x-μ)²/n)": [
      { explanation: "This is the formula for population standard deviation", result: "σ = √(Σ(x-μ)²/n)" },
      { explanation: "1. Find the mean (μ)", result: "μ = Σx/n" },
      { explanation: "2. Subtract the mean from each value and square the result", result: "(x-μ)²" },
      { explanation: "3. Sum up all squared differences", result: "Σ(x-μ)²" },
      { explanation: "4. Divide by the number of values", result: "Σ(x-μ)²/n" },
      { explanation: "5. Take the square root", result: "σ = √(Σ(x-μ)²/n)" },
    ],
    "P(A and B) = P(A) × P(B|A)": [
      { explanation: "This is the multiplication rule of probability", result: "P(A and B) = P(A) × P(B|A)" },
      { explanation: "Where P(B|A) is the probability of B given A has occurred", result: "Multiply the probability of A by the conditional probability of B given A" },
    ],
  },
  "graphing": {
    "y = x^2": [
      { explanation: "This is a parabola with vertex at the origin", result: "Parabola opens upward, passing through (0,0), (1,1), (-1,1), etc." },
      { explanation: "The graph shows a U-shaped curve with its lowest point at (0,0)", result: "For every value of x, y equals the square of x" },
    ],
    "y = sin(x)": [
      { explanation: "This is a sine wave with amplitude 1", result: "Periodic function with period 2π" },
      { explanation: "The graph oscillates between y = -1 and y = 1", result: "Crosses the x-axis at x = 0, x = π, x = 2π, etc." },
    ],
    "y = mx + b": [
      { explanation: "This is a linear function with slope m and y-intercept b", result: "For each unit increase in x, y increases by m units" },
      { explanation: "The graph crosses the y-axis at the point (0,b)", result: "A straight line with constant rate of change" },
    ],
  },
};

export function solveEquation(equation: string, subject: string): { 
  result: string;
  steps: Array<{ explanation: string; result: string }>;
} {
  // Clean the input
  const cleanEquation = equation.trim();
  
  // Check if we have a pre-defined solution for this equation
  const subjectSteps = sampleSteps[subject as keyof typeof sampleSteps];
  if (subjectSteps && subjectSteps[cleanEquation]) {
    const steps = subjectSteps[cleanEquation];
    const finalResult = steps[steps.length - 1].result;
    return { result: finalResult, steps: steps };
  }
  
  // If we don't have a pre-defined solution, return a generic response
  // Customize the response based on the subject
  let genericResponses = {
    "algebra": {
      result: "Solution not found in our database",
      steps: [
        { explanation: "Try with expressions like 'x^2 - 4 = 0' or '2x + 3 = 7'", result: "These are examples we can solve step by step" }
      ]
    },
    "calculus": {
      result: "No step-by-step solution available",
      steps: [
        { explanation: "Try with expressions like 'd/dx(x^2)' or '∫x^2 dx'", result: "These are examples we can solve with steps" }
      ]
    },
    "trigonometry": {
      result: "No trigonometric solution found",
      steps: [
        { explanation: "Try with expressions like 'sin(π/2)' or 'cos(0)'", result: "These are examples we can solve with steps" }
      ]
    },
    "statistics": {
      result: "Statistical solution not available",
      steps: [
        { explanation: "Try with formulas like 'μ = Σx/n'", result: "We can explain common statistical concepts" }
      ]
    },
    "graphing": {
      result: "Use the graph plotter to visualize this function",
      steps: [
        { explanation: "Enter equations like 'y = x^2' or 'y = sin(x)' and click 'Show Graph'", result: "Try our interactive graph plotter above" }
      ]
    }
  };
  
  return genericResponses[subject as keyof typeof genericResponses] || {
    result: "Couldn't solve this equation yet",
    steps: [
      { explanation: "This expression isn't in our database yet", result: "Try a different format or a simpler expression" }
    ]
  };
}

// Improved function to validate math expressions
export function isValidMathExpression(input: string): boolean {
  if (!input.trim()) return false;
  
  // Check for basic syntax errors
  const openParens = (input.match(/\(/g) || []).length;
  const closeParens = (input.match(/\)/g) || []).length;
  
  if (openParens !== closeParens) return false;
  
  // Make sure there's something to solve
  const hasMathContent = /[0-9x-z\+\-\*\/\^\=]/.test(input);
  
  return hasMathContent;
}

// Function to check if an expression is plottable
export function isPlottableExpression(input: string): boolean {
  // Check if the input resembles a function of x
  return /y\s*=|f\(x\)\s*=|=\s*f\(x\)|x\^[0-9]|sin\(|cos\(|tan\(/.test(input);
}
