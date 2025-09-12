import React from 'react'
import { Calendar, MapPin, Award, Code } from 'lucide-react'

export const Experience = () => {
  const experiences = [
    {
      type: 'education',
      title: 'Bachelors of Technology',
      organization: 'JSS Academy Of Technical Education',
      duration: '2022 - 2026',
      location: 'Sector 62, Noida',
      description: 'Pursuing Computer Science with focus on software engineering, web development, and modern programming practices. Building strong foundation in algorithms, data structures, and system design.',
      achievements: ['7.58 CGPA', 'Active in coding competitions', 'Multiple project implementations', 'Strong academic performance']
    },
    {
      type: 'project',
      title: 'Personal Project Development',
      organization: 'Self-Directed Learning',
      duration: '2024 - Present',
      location: 'Remote',
      description: 'Developing full-stack web applications using MERN stack, implementing modern development practices and building real-world solutions.',
      achievements: ['BlogGen - Full-stack blogging platform', 'Raasta Saathi - Traffic reporting app', 'WanderLust - Tourism booking platform', '15+ completed projects']
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Academic Excellence & Development Journey
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Building a strong foundation through <span className="font-semibold text-blue-600 dark:text-blue-400">academic excellence</span> and <span className="font-semibold text-purple-600 dark:text-purple-400">hands-on project development</span>
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-indigo-200 dark:bg-indigo-800"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start space-x-8">
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center relative z-10">
                    {exp.type === 'education' ? (
                      <Award className="text-white" size={24} />
                    ) : exp.type === 'project' ? (
                      <Code className="text-white" size={24} />
                    ) : (
                      <Calendar className="text-white" size={24} />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-grow bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-0">
                        {exp.title}
                      </h3>
                      <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium">
                        {exp.duration}
                      </span>
                    </div>

                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                      <span className="font-medium text-indigo-600 dark:text-indigo-400 mr-4">
                        {exp.organization}
                      </span>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li
                            key={achievementIndex}
                            className="flex items-center text-gray-600 dark:text-gray-300"
                          >
                            <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}