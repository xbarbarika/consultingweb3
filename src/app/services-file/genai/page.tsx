'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import MenuModal from '@/components/MenuModal';
import Footer from '@/components/Footer';
import Link from 'next/link';

const aiSolutions = [
  {
    id: 'model-validation',
    title: 'Model Validation & Fact Checking',
    description: 'Our data experts review your model\'s responses for accuracy, identify errors, and rewrite responses to improve performance, combining workflow automation with human-in-the-loop approach.',
    icon: '🔍',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    features: [
      'Response accuracy validation',
      'Error identification and correction',
      'Automated workflow integration',
      'Human-in-the-loop quality assurance'
    ]
  },
  {
    id: 'instruction-following',
    title: 'Instruction Following',
    description: 'Assess how well your Gen AI model understands, interprets, and executes instructions. We help identify compliance issues and provide detailed analysis for model improvement.',
    icon: '📋',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    features: [
      'Instruction compliance assessment',
      'Response analysis and feedback',
      'Model behavior optimization',
      'Detailed compliance reporting'
    ]
  },
  {
    id: 'preference-ranking',
    title: 'Preference Ranking',
    description: 'Improve model output quality through feedback loops and RLHF. Our experts analyze and rank model responses with domain expertise across multiple industries.',
    icon: '⭐',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    features: [
      'Response quality ranking',
      'RLHF implementation',
      'Domain-specific expertise',
      'Feedback loop optimization'
    ]
  },
  {
    id: 'content-generation',
    title: 'Content Generation & Captioning',
    description: 'Scale captioning for various modalities. Our experts describe visual content, verify accuracy, and rewrite captions to reduce errors and hallucinations.',
    icon: '📝',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    features: [
      'Multi-modal captioning',
      'Content verification',
      'Error reduction strategies',
      'Hallucination prevention'
    ]
  },
  {
    id: 'creative-writing',
    title: 'Creative Writing & Prompt Engineering',
    description: 'Create new prompts and responses based on your model goals. Our team employs chain-of-thought reasoning to provide clear rationale for chosen outputs.',
    icon: '✍️',
    gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    features: [
      'Custom prompt creation',
      'Response optimization',
      'Chain-of-thought reasoning',
      'Domain-specific content'
    ]
  },
  {
    id: 'synthetic-data',
    title: 'Synthetic Data Creation',
    description: 'Create synthetic datasets when real training data is difficult to obtain. Our human-in-the-loop approach ensures the highest quality and accuracy.',
    icon: '🎲',
    gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    features: [
      'Custom synthetic datasets',
      'Quality validation',
      'Domain-specific generation',
      'Human oversight integration'
    ]
  }
];

const caseStudies = [
  {
    title: 'Fortune 100 E-commerce Optimization',
    description: 'A leading retail company improved their product search algorithm by 40% using our AI-powered content generation and validation services.',
    metrics: ['40% improvement', '2M+ products', '99.2% accuracy'],
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    title: 'Financial Services AI Assistant',
    description: 'Developed an intelligent customer service chatbot that handles 80% of customer inquiries automatically while maintaining high satisfaction rates.',
    metrics: ['80% automation', '95% satisfaction', '24/7 availability'],
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    title: 'Healthcare Data Analysis Platform',
    description: 'Built a predictive analytics system that improved patient outcome predictions by 35% using advanced AI models and synthetic data generation.',
    metrics: ['35% improvement', '10K+ patients', 'Real-time insights'],
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  }
];

export default function GenAIService() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('solutions');

  // Add smooth scrolling behavior
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="text-white min-h-screen flex flex-col">
      {/* Premium Background with Gradient Overlay */}
      <div 
        className="fixed inset-0 z-0"
        style={{ 
          backgroundImage: 'url(/bg-pages/D3-4.svg)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat' 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-blue-900/40"></div>
      </div>

      <div className="relative z-10 flex-1">
        <Navbar onMenuClick={() => setMenuOpen(true)} />
        
        <main className="w-full flex flex-col items-center justify-start pt-24 pb-16 px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Hero Section */}
          <div className="w-full max-w-6xl mx-auto text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 animate-slide-up">
              <span className="text-sm font-semibold text-blue-400 tracking-wide uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
                AI & Machine Learning
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent leading-tight animate-slide-up-delay" style={{ fontFamily: 'Epilogue, sans-serif' }}>
              Build AI Models
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Faster & Smarter
              </span>
        </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed animate-slide-up-delay-2" style={{ fontFamily: 'Inter, sans-serif' }}>
              The AI race is on, and you need to push boundaries to win. Boost ROI, mitigate risk, and launch high-performing models faster with our comprehensive AI solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 animate-slide-up-delay-2">
          <Link href="/book-demo">
                <button className="px-8 py-4 rounded-2xl font-bold text-white transition-all duration-500 hover:scale-105 text-base md:text-lg" style={{ 
                  background: 'linear-gradient(135deg, #5d8bff 0%, #5bafff 50%, #3f7ffd 100%)',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  Talk to AI Expert
                </button>
              </Link>
              <Link href="#solutions">
                <button className="px-8 py-4 rounded-2xl font-bold text-white/90 border-2 border-white/20 backdrop-blur-md transition-all duration-500 hover:scale-105 hover:border-white/40 text-base md:text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Explore Solutions
              </button>
          </Link>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="w-full max-w-4xl mx-auto mb-16">
            <div className="flex flex-wrap justify-center gap-2 bg-white/5 backdrop-blur-md rounded-2xl p-2 border border-white/10">
              {[
                { id: 'solutions', label: 'AI Solutions' },
                { id: 'case-studies', label: 'Case Studies' },
                { id: 'features', label: 'Why Choose Us' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSection(tab.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeSection === tab.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* AI Solutions Section */}
          {activeSection === 'solutions' && (
            <div id="solutions" className="w-full max-w-7xl mx-auto space-y-12 mb-20">
              <div className="text-center mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Epilogue, sans-serif' }}>
                  Comprehensive AI & LLM Solutions
                </h2>
                <p className="text-lg text-white/70 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
                  With over 15 years of industry experience, our AI solutions help you build more accurate GenAI and LLMs—faster.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {aiSolutions.map((solution, index) => (
                  <div
                    key={solution.id}
                    className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-700 hover:bg-white/10 hover:border-white/20 hover:shadow-3xl hover:scale-[1.02] animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Background Gradient */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                      style={{ background: solution.gradient }}
                    ></div>
                    
                    <div className="relative p-8">
                      {/* Icon */}
                      <div className="text-4xl mb-6 animate-bounce-slow">{solution.icon}</div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Epilogue, sans-serif' }}>
                        {solution.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-white/70 mb-6 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {solution.description}
                      </p>
                      
                      {/* Features */}
                      <ul className="space-y-2">
                        {solution.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm text-white/80" style={{ fontFamily: 'Inter, sans-serif' }}>
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Case Studies Section */}
          {activeSection === 'case-studies' && (
            <div id="case-studies" className="w-full max-w-7xl mx-auto space-y-12 mb-20">
              <div className="text-center mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Epilogue, sans-serif' }}>
                  Success Stories
                </h2>
                <p className="text-lg text-white/70 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
                  See how leading companies are transforming their businesses with our AI solutions.
                </p>
              </div>

              <div className="space-y-8">
                {caseStudies.map((study, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-700 hover:bg-white/10 hover:border-white/20 hover:shadow-3xl hover:scale-[1.01] animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Background Gradient */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700"
                      style={{ background: study.gradient }}
                    ></div>
                    
                    <div className="relative p-8 lg:p-12">
                      <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div>
                          <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Epilogue, sans-serif' }}>
                            {study.title}
                          </h3>
                          <p className="text-white/70 leading-relaxed mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                            {study.description}
                          </p>
                          
                          {/* Metrics */}
                          <div className="flex flex-wrap gap-4">
                            {study.metrics.map((metric, i) => (
                              <div key={i} className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                                {metric}
                              </div>
                            ))}
                          </div>
        </div>
        
                        <div className="relative h-48 lg:h-64 rounded-2xl overflow-hidden">
                          <div 
                            className="absolute inset-0 rounded-2xl transition-all duration-700"
                            style={{ background: study.gradient }}
                          >
                            <div className="absolute inset-0 bg-black/30"></div>
                          </div>
                          <div className="relative h-full flex items-center justify-center">
                            <div className="text-6xl opacity-50">📊</div>
                          </div>
                        </div>
              </div>
            </div>
          </div>
                ))}
              </div>
            </div>
          )}

          {/* Features Section */}
          {activeSection === 'features' && (
            <div id="features" className="w-full max-w-7xl mx-auto space-y-12 mb-20">
              <div className="text-center mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Epilogue, sans-serif' }}>
                  Why Choose Our AI Solutions
                </h2>
                <p className="text-lg text-white/70 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
                  We deliver not only accurate AI solutions, but insights and recommendations via our vertically integrated platform combined with human-in-the-loop experts.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: 'Enterprise-Grade',
                    description: 'Consistently deliver 99% client acceptance rate as you scale, even with complex models and edge cases.',
                    icon: '🏢'
                  },
                  {
                    title: 'Industry Expertise',
                    description: 'Over 15 years of experience with domain experts across multiple industries and functions.',
                    icon: '🎯'
                  },
                  {
                    title: 'Ethical AI',
                    description: 'Committed to responsible AI development with transparent processes and ethical guidelines.',
                    icon: '🤝'
                  },
                  {
                    title: 'Data Security',
                    description: 'ISO certified security with biometric protection and full-time in-house workforce.',
                    icon: '🔒'
                  }
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-700 hover:bg-white/10 hover:border-white/20 hover:shadow-3xl hover:scale-[1.02] animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative p-8 text-center">
                      <div className="text-4xl mb-4 animate-bounce-slow">{feature.icon}</div>
                      <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Epilogue, sans-serif' }}>
                        {feature.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Buttons Section with Proper Mobile Spacing */}
              <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                  <Link href="/services">
                    <button className="px-8 py-4 rounded-2xl font-bold text-white/90 border-2 border-white/20 backdrop-blur-md transition-all duration-500 hover:scale-105 hover:border-white/40 text-base md:text-lg w-full sm:w-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Learn More
                    </button>
                  </Link>
                  <Link href="/book-demo">
                    <button className="px-8 py-4 rounded-2xl font-bold text-white transition-all duration-500 hover:scale-105 text-base md:text-lg w-full sm:w-auto" style={{ 
                      background: 'linear-gradient(135deg, #5d8bff 0%, #5bafff 50%, #3f7ffd 100%)',
                      fontFamily: 'Inter, sans-serif'
                    }}>
                      Book Demo
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className="w-full max-w-4xl mx-auto text-center mb-20">
            <div className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Epilogue, sans-serif' }}>
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
                Let&apos;s discuss how our AI solutions can drive growth, reduce costs, and give you a competitive edge.
              </p>
              <Link href="/book-demo">
                <button className="px-10 py-5 rounded-2xl font-bold text-white transition-all duration-500 hover:scale-105 text-lg" style={{ 
                  background: 'linear-gradient(135deg, #5d8bff 0%, #5bafff 50%, #3f7ffd 100%)',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  Start Your AI Journey
                </button>
              </Link>
            </div>
        </div>
        </main>
      </div>
      
      {/* Footer */}
      <div className="relative z-10">
      <Footer />
      </div>
      
      <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes slide-up-delay {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes slide-up-delay-2 {
          from { 
            opacity: 0; 
            transform: translateY(40px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        
        .animate-slide-up-delay {
          animation: slide-up-delay 0.8s ease-out 0.2s both;
        }
        
        .animate-slide-up-delay-2 {
          animation: slide-up-delay-2 0.8s ease-out 0.4s both;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out both;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
} 