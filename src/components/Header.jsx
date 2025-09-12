import React, { useState, useEffect } from 'react'
import { Menu, X, Download } from 'lucide-react'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isOnHomepage, setIsOnHomepage] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Check if we're on the homepage (hero section)
      const heroSection = document.getElementById('home')
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect()
        setIsOnHomepage(heroRect.top <= 100 && heroRect.bottom >= 100)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial state
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#contact', label: 'Contact' },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = '/Ankit%20Singh%20Resume%20latest.pdf'
    link.download = 'Ankit_Singh_Resume.pdf'
    link.click()
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg border-b border-white/20 dark:border-slate-700/50' 
        : isOnHomepage 
          ? 'bg-slate-900/80 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className={`text-2xl font-bold transition-colors duration-300 ${
            isOnHomepage && !scrolled 
              ? 'text-white' 
              : 'text-indigo-600 dark:text-indigo-400'
          }`}>
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`transition-colors duration-200 font-medium relative group ${
                  isOnHomepage && !scrolled
                    ? 'text-white/90 hover:text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                }`}
              >
                {item.label}
                {isOnHomepage && !scrolled && (
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
                )}
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center">
            <button
              onClick={downloadResume}
              className="group flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            >
              <Download size={16} className="group-hover:scale-110 transition-transform duration-300" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 transition-colors duration-200 ${
              isOnHomepage && !scrolled
                ? 'text-white/90 hover:text-white'
                : 'text-gray-600 dark:text-gray-400'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden mt-4 pb-4 border-t transition-colors duration-300 ${
            isOnHomepage && !scrolled
              ? 'border-white/20'
              : 'border-gray-200 dark:border-gray-700'
          }`}>
            <div className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-left transition-colors duration-200 font-medium relative group ${
                    isOnHomepage && !scrolled
                      ? 'text-white/90 hover:text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                  }`}
                >
                  {item.label}
                  {isOnHomepage && !scrolled && (
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
                  )}
                </button>
              ))}
              <div className="pt-4">
                <button
                  onClick={downloadResume}
                  className="group flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  <Download size={16} className="group-hover:scale-110 transition-transform duration-300" />
                  <span>Resume</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}