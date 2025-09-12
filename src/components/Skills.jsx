import React from 'react'
import { Code, Database, Palette, Zap, Sparkles } from 'lucide-react'

export const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'JavaScript', level: 95 },
        { name: 'C', level: 85 },
        { name: 'C++', level: 80 },
        { name: 'SQL', level: 90 },
      ]
    },
    {
      title: 'Frontend Technologies',
      icon: Palette,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
      ]
    },
    {
      title: 'Backend & Tools',
      icon: Database,
      color: 'from-emerald-500 to-teal-500',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'MySQL', level: 80 },
        { name: 'RESTful APIs', level: 85 },
      ]
    },
    {
      title: 'Development Tools',
      icon: Zap,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'VS Code', level: 95 },
        { name: 'Git & GitHub', level: 90 },
        { name: 'Postman', level: 80 },
        { name: 'Agile Basics', level: 75 },
      ]
    },
    {
      title: 'Soft Skills',
      icon: Sparkles,
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'Problem Solving', level: 95 },
        { name: 'Clean Code Practices', level: 90 },
        { name: 'Collaboration', level: 85 },
        { name: 'Communication', level: 90 },
      ]
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-l from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-subtle-float"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-subtle-float animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-emerald-400/5 to-teal-400/5 rounded-full blur-3xl animate-subtle-float animation-delay-4000"></div>

      {/* Floating Particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-gentle-pulse"></div>
      <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-purple-400/30 rounded-full animate-gentle-pulse animation-delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-emerald-400/30 rounded-full animate-gentle-pulse animation-delay-2000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 mb-4 shadow-lg">
              <Code className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Technical Expertise</span>
              <Sparkles className="w-3 h-3 text-purple-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              A comprehensive skill set spanning <span className="font-semibold text-blue-600 dark:text-blue-400">programming languages</span>, <span className="font-semibold text-purple-600 dark:text-purple-400">full-stack technologies</span>, and <span className="font-semibold text-emerald-600 dark:text-emerald-400">professional development practices</span>
            </p>
          </div>

          {/* Skills Grid - Optimized Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:border-white/40 overflow-hidden"
              >
                {/* Animated gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Header with icon */}
                <div className="relative z-10 text-center mb-4">
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${category.color} rounded-2xl mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                {/* Skills list - compact but elegant */}
                <div className="relative z-10">
                  <div className="grid grid-cols-2 gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="group/skill">
                        <div className="flex items-center justify-center p-2 rounded-lg bg-slate-50 dark:bg-slate-700/50 group-hover/skill:bg-blue-50 dark:group-hover/skill:bg-blue-900/20 transition-colors duration-300">
                          <span className="text-slate-700 dark:text-slate-300 font-medium text-sm group-hover/skill:text-blue-600 dark:group-hover/skill:text-blue-400 transition-colors duration-300 text-center">
                            {skill.name}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl px-6 py-3 border border-white/20 shadow-lg">
              <Sparkles className="w-4 h-4 text-purple-500" />
              <span className="text-slate-700 dark:text-slate-300 font-semibold text-sm">Continuously learning and expanding my skill set</span>
              <Zap className="w-4 h-4 text-blue-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}