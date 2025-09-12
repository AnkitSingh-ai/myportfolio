import React from 'react'
import { Github, Linkedin, Mail, ArrowDown, Sparkles, Code, Palette, Zap, Database, Globe, Smartphone } from 'lucide-react'

export const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
            <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          {/* Dark Background */}
          <div className="absolute inset-0 bg-slate-900"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-800/30 via-transparent to-slate-700/30"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-slate-700/20 via-transparent to-slate-800/20"></div>
      
      {/* Animated Mesh Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.2) 0%, transparent 50%)
          `,
          backgroundSize: '800px 800px, 600px 600px, 1000px 1000px',
          animation: 'mesh-move 20s ease-in-out infinite'
        }}></div>
      </div>
      
                {/* Floating Geometric Shapes */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-subtle-float"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-subtle-float animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-subtle-float animation-delay-4000"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-orange-500/15 to-red-500/15 rounded-full blur-3xl animate-subtle-float animation-delay-1000"></div>
      
                {/* Animated Particles */}
          <div className="absolute top-1/5 left-1/5 w-3 h-3 bg-blue-400/30 rounded-full animate-gentle-pulse animation-delay-1000"></div>
          <div className="absolute top-2/5 right-1/5 w-2 h-2 bg-purple-400/35 rounded-full animate-gentle-pulse animation-delay-3000"></div>
          <div className="absolute bottom-1/5 left-2/5 w-2.5 h-2.5 bg-cyan-400/30 rounded-full animate-gentle-pulse animation-delay-2000"></div>
          <div className="absolute bottom-2/5 right-2/5 w-2 h-2 bg-pink-400/35 rounded-full animate-gentle-pulse animation-delay-4000"></div>
          <div className="absolute top-3/5 left-1/3 w-1.5 h-1.5 bg-orange-400/30 rounded-full animate-gentle-pulse animation-delay-5000"></div>
          <div className="absolute bottom-3/5 right-1/3 w-2 h-2 bg-emerald-400/30 rounded-full animate-gentle-pulse animation-delay-1500"></div>
      
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

              <div className="container mx-auto px-6 text-center relative z-10 pt-32">
        <div className="max-w-5xl mx-auto">
          {/* Modern Profile Image with Glassmorphism */}
          <div className="w-40 h-40 mx-auto mb-8 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative w-full h-full bg-white/10 backdrop-blur-md rounded-full p-1 border border-white/20">
              <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20"></div>
                <img 
                  src="/my%20photo.jpeg" 
                  alt="Ankit Singh" 
                  className="w-full h-full object-cover rounded-full relative z-10"
                  onError={(e) => {
                    // Fallback to initials if image fails to load
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent relative z-10 hidden items-center justify-center w-full h-full">AS</span>
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-4 border-slate-900 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>


          </div>

          {/* Modern Typography */}
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-md rounded-full px-4 py-2 border border-emerald-400/30 mb-6 shadow-lg shadow-emerald-500/20">
              <Code className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-white font-medium">Available for work</span>
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
            </div>
            
                        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              <span className="text-white">Hi, I'm</span>{' '}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                Ankit Singh
              </span>
            </h1>

                                    <div className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed font-['Inter',_'SF_Pro_Display',_'system-ui',_'sans-serif']">
                          <span className="font-light text-white">Crafting</span>{' '}
                          <span className="font-bold text-white">digital experiences</span>{' '}
                          <span className="font-light text-white">with</span>{' '}
                          <span className="font-bold text-white">React, Node.js & modern technologies</span>
                        </div>

            {/* Dynamic Role Display */}
            <div className="mb-8">
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-md rounded-2xl px-6 py-3 border border-slate-600/30 shadow-lg">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
                <span className="text-slate-200 font-medium">Currently:</span>
                <span className="font-semibold text-white">
                  Full-Stack Developer
                </span>
              </div>
            </div>


          </div>

          {/* Modern CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-semibold shadow-2xl hover:shadow-blue-500/25 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center space-x-2">
                <span>Let's Work Together</span>
                <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              </span>
            </button>
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl hover:bg-white/20 transition-all duration-300 font-semibold relative overflow-hidden shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="relative z-10">View My Work</span>
            </button>
          </div>

          {/* Modern Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            {[
              { icon: Github, href: 'https://github.com/AnkitSingh-ai', label: 'GitHub', color: 'from-gray-600 to-gray-800' },
              { icon: Linkedin, href: 'https://linkedin.com/in/ankit-singh-b6056324b', label: 'LinkedIn', color: 'from-blue-600 to-blue-800' },
              { icon: Mail, href: 'mailto:devathaku33@gmail.com', label: 'Email', color: 'from-red-500 to-pink-600' },
            ].map(({ icon: Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                className="group relative p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg"
                aria-label={label}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300`}></div>
                <Icon className="relative z-10 w-6 h-6 text-white/80 group-hover:text-white transition-colors duration-300" />
              </a>
            ))}
          </div>

          

          {/* Modern Scroll Indicator */}
          <button
            onClick={scrollToAbout}
            className="group absolute bottom-8 left-1/2 transform -translate-x-1/2 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 animate-bounce shadow-lg"
          >
            <ArrowDown className="w-6 h-6 text-white/80 group-hover:text-white transition-colors duration-300" />
          </button>
        </div>
      </div>
    </section>
  )
}