import React from 'react'
import { Code, Palette, Zap, Users } from 'lucide-react'

export const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code following best practices'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user experiences'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in team environments'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A passionate Computer Science undergraduate with a strong interest in full-stack web development and building impactful, user-friendly applications
            </p>
            <div className="mt-6 space-y-4">
              <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/20 rounded-full px-6 py-3 border border-blue-200 dark:border-blue-800">
                <span className="text-blue-600 dark:text-blue-400 font-semibold">🎓 B.Tech Computer Science</span>
                <span className="text-blue-500 dark:text-blue-300">•</span>
                <span className="text-blue-600 dark:text-blue-400 font-semibold">7.58 CGPA</span>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  JSS Academy Of Technical Education, Sector 62, Noida • 2022-2026
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I am a passionate Computer Science undergraduate (2022–2026) at JSS Academy of Technical Education, Noida, 
                  with a strong interest in full-stack web development and building impactful, user-friendly applications. 
                  I specialize in modern technologies like React.js, Node.js, Express.js, and MongoDB, and I enjoy 
                  transforming real-world problems into scalable digital solutions.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  My projects, including a traffic tracking app (Raasta Sathi) and a content-driven blogging platform, 
                  reflect my ability to integrate clean UI, efficient backend systems, and real-time features. Beyond academics, 
                  I have participated in hackathons and virtual job simulations (JP Morgan, Adobe), which helped me sharpen 
                  my problem-solving, collaboration, and clean code practices in real-world scenarios.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I am constantly learning, exploring new tools, and striving to grow as a developer who can deliver 
                  innovative solutions with measurable impact.
                </p>
              </div>


            </div>

            {/* Right Column - Highlights */}
            <div className="space-y-4">
              {highlights.map(({ icon: Icon, title, description }, index) => (
                <div
                  key={title}
                  className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-md flex items-center justify-center">
                    <Icon size={16} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
                      {title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Education</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* B.Tech */}
              <div className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-2xl border border-blue-200 dark:border-blue-800 hover:shadow-xl transition-all duration-300">
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">🎓</span>
                </div>
                <div className="pr-16">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Bachelors of Technology</h4>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">Computer Science</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">JSS Academy Of Technical Education</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">Sector 62, Noida</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">7.58 CGPA</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">2022-2026</span>
                  </div>
                </div>
              </div>

              {/* Intermediate */}
              <div className="group relative bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-8 rounded-2xl border border-emerald-200 dark:border-emerald-800 hover:shadow-xl transition-all duration-300">
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">📚</span>
                </div>
                <div className="pr-16">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Intermediate</h4>
                  <p className="text-emerald-600 dark:text-emerald-400 font-semibold mb-2">Senior Secondary</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">Bhartiya Bal Vidya Mandir Sr.Sec.School</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">Agra</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">89.8%</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">2021</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}