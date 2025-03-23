
import React from 'react';
import Header from '@/components/Header';
import MathSolver from '@/components/MathSolver';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-slate-50">
      <div className="max-w-7xl mx-auto">
        <Header />
        
        <main className="px-4 py-8">
          <section className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-slate-900">
              Solve Math Problems <span className="text-primary">Step by Step</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Advanced math solver with free detailed solutions. Type your problem or use the math keyboard below.
            </p>
          </section>
          
          <MathSolver />
          
          <section id="features" className="mt-32 mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
              SmartMath Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-slate-200 shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Free Step-by-Step Solutions</h3>
                <p className="text-slate-600">
                  Unlike other math solvers, we provide detailed step-by-step solutions completely free.
                </p>
              </div>
              
              <div className="p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-slate-200 shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Multi-Subject Support</h3>
                <p className="text-slate-600">
                  From basic algebra to advanced calculus, we support various math topics with specialized tools.
                </p>
              </div>
              
              <div className="p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-slate-200 shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Intuitive Math Keyboard</h3>
                <p className="text-slate-600">
                  Our specialized keyboard makes it easy to enter complex mathematical expressions.
                </p>
              </div>
            </div>
          </section>
          
          <section id="about" className="mb-16">
            <div className="bg-white/80 backdrop-blur-lg rounded-xl border border-slate-200 p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-center mb-6 text-slate-900">
                About SmartMath
              </h2>
              <p className="text-slate-600 mb-4 max-w-3xl mx-auto">
                SmartMath was developed to provide a free and accessible way for students to solve math problems. We believe that everyone should have access to step-by-step solutions without paywalls.
              </p>
              <p className="text-slate-600 max-w-3xl mx-auto">
                Our mission is to help students not just get answers, but truly understand the mathematical concepts behind each solution.
              </p>
            </div>
          </section>
        </main>
        
        <footer className="px-6 py-8 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} SmartMath. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
