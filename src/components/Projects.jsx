import React from 'react'
import { ExternalLink, Github, Smartphone, Globe, Sparkles, Zap } from 'lucide-react'

export const Projects = () => {
  const projects = [
    {
      title: 'BlogGen',
      description: 'A full-stack blogging platform supporting 20+ blog uploads with real-time search, detailed blog viewing, and an integrated AI-powered blog description generator. Built with responsive React.js frontend achieving 95+ Lighthouse score and 40% faster page loads.',
      image: '/bloggen-img.png',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'JWT Auth', 'Tailwind CSS', 'AI Integration'],
      liveUrl: 'https://github.com/AnkitSingh-ai/BlogGen',
      githubUrl: 'https://github.com/AnkitSingh-ai/BlogGen',
      featured: true,
      period: '02/2025 - 03/2025'
    },
    {
      title: 'Raasta Saathi',
      description: 'A real-time traffic reporting platform empowering users to report, view, and track road incidents. Built with MERN stack, integrated Google Maps API, image uploads, and JWT authentication. Optimized UX with Framer Motion reducing form submission time by 45%.',
      image: '/raasta-sathi.png',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Google Maps API', 'Multer', 'Framer Motion'],
      liveUrl: 'https://github.com/AnkitSingh-ai/raasta-sathi',
      githubUrl: 'https://github.com/AnkitSingh-ai/raasta-sathi',
      featured: true,
      period: '04/2025 - Present'
    },
    {
      title: 'WanderLust',
      description: 'A tourism booking platform using MERN stack enabling seamless trip bookings with real-time availability and secure payment integration. Optimized backend performance resulting in 40% reduction in booking processing time and supporting 10,000+ monthly active users.',
      image: '/wanderlust.png',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Payment Integration', 'RESTful APIs'],
      liveUrl: 'https://github.com/AnkitSingh-ai/Wanderlust',
      githubUrl: 'https://github.com/AnkitSingh-ai/Wanderlust',
      featured: false,
      period: '10/2024 - 11/2024'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-pink-400/10 to-red-400/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 mb-6">
              <Sparkles className="w-4 h-4 text-blue-500" />
              <span className="text-sm text-slate-600 dark:text-slate-300">Featured Work</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              A showcase of my recent work demonstrating <span className="font-semibold text-blue-600 dark:text-blue-400">technical skills</span> and <span className="font-semibold text-purple-600 dark:text-purple-400">creative problem-solving</span>
            </p>
          </div>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 hover:border-white/40 ${
                  project.featured ? 'lg:grid lg:grid-cols-2' : ''
                }`}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Project Image */}
                <div className={`relative overflow-hidden ${
                  project.featured 
                    ? 'h-80 lg:h-full' 
                    : project.title === 'WanderLust' 
                    ? 'h-80' 
                    : 'h-64'
                }`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full transition-transform duration-700 ${
                      project.title === 'WanderLust' 
                        ? 'object-cover object-top object-left bg-gray-100 dark:bg-gray-800' 
                        : project.title === 'Raasta Saathi'
                        ? 'object-contain bg-gray-100 dark:bg-gray-800'
                        : 'object-cover group-hover:scale-110'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <a
                      href={project.liveUrl}
                      className="group/link p-3 bg-white/20 backdrop-blur-md rounded-xl text-white hover:bg-white/30 transition-all duration-300 border border-white/20 hover:border-white/40"
                    >
                      <ExternalLink size={18} className="group-hover/link:scale-110 transition-transform duration-300" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="group/link p-3 bg-white/20 backdrop-blur-md rounded-xl text-white hover:bg-white/30 transition-all duration-300 border border-white/20 hover:border-white/40"
                    >
                      <Github size={18} className="group-hover/link:scale-110 transition-transform duration-300" />
                    </a>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-1 rounded-full">
                        <Zap className="w-3 h-3 text-white" />
                        <span className="text-xs font-semibold text-white">Featured</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className={`relative z-10 ${project.title === 'WanderLust' ? 'p-5' : 'p-8'}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      {project.period && (
                        <div className="mt-2 inline-flex items-center space-x-1 bg-blue-50 dark:bg-blue-900/20 rounded-full px-3 py-1">
                          <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">{project.period}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200/50 dark:border-blue-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="group/btn flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                    >
                      <Globe size={16} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="group/btn flex items-center space-x-2 px-6 py-3 bg-white/80 dark:bg-slate-700/80 backdrop-blur-md border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-xl hover:bg-white dark:hover:bg-slate-600 transition-all duration-300 transform hover:scale-105"
                    >
                      <Github size={16} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href="https://github.com/AnkitSingh-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-3 px-8 py-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-white/20 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 rounded-2xl hover:bg-white dark:hover:bg-slate-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Github size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              <span>View More on GitHub</span>
              <Sparkles size={16} className="group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}