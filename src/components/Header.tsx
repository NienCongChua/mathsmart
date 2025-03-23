
import React from 'react';
import { Calculator, Github } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full py-6 px-8 flex items-center justify-between animate-fade-in">
      <div className="flex items-center space-x-3">
        <Calculator className="h-8 w-8 text-primary animate-float" />
        <h1 className="text-2xl font-medium tracking-tight">SmartMath</h1>
      </div>
      
      <nav className="hidden md:flex items-center space-x-8">
        <a 
          href="#features" 
          className="text-slate-600 hover:text-primary transition-colors duration-200"
        >
          Features
        </a>
        <a 
          href="#about" 
          className="text-slate-600 hover:text-primary transition-colors duration-200"
        >
          About
        </a>
        <a 
          href="https://github.com" 
          className="flex items-center space-x-1.5 text-slate-600 hover:text-primary transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="h-4 w-4" />
          <span>GitHub</span>
        </a>
      </nav>
    </header>
  );
};

export default Header;
