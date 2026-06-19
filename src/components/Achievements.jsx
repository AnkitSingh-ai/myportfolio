import React from 'react'
import { Award, Trophy, FileText, Star, Sparkles, Zap, Eye } from 'lucide-react'

export const Achievements = () => {
  const achievements = [
    {
      type: 'achievement',
      title: 'Paranox 2.0 Hackathon - Top 25 Finalist',
      issuer: 'Paranox',
      date: '2024',
      description: 'Secured top 25 finalist ranking in Paranox 2.0 Hackathon, demonstrating innovation and problem-solving skills in a competitive environment',
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500',
      featured: true
    },
    {
      type: 'certification',
      title: 'Cybersecurity Analyst Certificate',
      issuer: 'Tata/Forage',
      date: '2024',
      description: 'Professional certification in cybersecurity analysis, threat detection, and security best practices',
      icon: FileText,
      color: 'from-red-500 to-orange-500',
      featured: false,
      certificateUrl: '/cybersecurity.png'
    },
    {
      type: 'achievement',
      title: 'Google Developer Student Council Member',
      issuer: 'Google',
      date: '2024',
      description: 'Selected as a member of the Google Developer Student Council, promoting developer community and technical learning',
      icon: Trophy,
      color: 'from-blue-500 to-cyan-500',
      featured: false
    },
    {
      type: 'achievement',
      title: 'Adobe All India Hackathon Participant',
      issuer: 'Adobe',
      date: '2024',
      description: 'Certificate of participation in Adobe All India Hackathon, showcasing creativity and technical skills',
      icon: Award,
      color: 'from-purple-500 to-pink-500',
      featured: false,
      certificateUrl: '/adobe certificate.jpg'
    }
  ]

  const openCertificate = (certificateUrl) => {
    if (certificateUrl) {
      window.open(certificateUrl, '_blank', 'width=800,height=600,scrollbars=yes,resizable=yes')
    }
  }

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-slate-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 mb-6">
              <Award className="w-4 h-4 text-yellow-500" />
              <span className="text-sm text-slate-600 dark:text-slate-300">Achievements & Certifications</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Recognition for <span className="font-semibold text-yellow-600 dark:text-yellow-400">excellence</span> and <span className="font-semibold text-orange-600 dark:text-orange-400">professional growth</span>
            </p>
          </div>

          {/* All Achievements in Single Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                onClick={() => openCertificate(achievement.certificateUrl)}
                className={`group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:border-white/40 overflow-hidden ${
                  achievement.certificateUrl ? 'cursor-pointer hover:scale-105' : 'hover:scale-105'
                } ${achievement.featured ? 'md:col-span-1 lg:row-span-1' : ''}`}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Featured badge */}
                {achievement.featured && (
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center space-x-1 bg-gradient-to-r from-yellow-500 to-orange-500 px-3 py-1 rounded-full">
                      <Zap className="w-3 h-3 text-white" />
                      <span className="text-xs font-semibold text-white">Featured</span>
                    </div>
                  </div>
                )}

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-xl mb-4 shadow-md`}>
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <div className="mb-3">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {achievement.title}
                    </h4>
                    <p className="text-sm font-semibold text-slate-600 dark:text-slate-300 mb-2">
                      {achievement.issuer}
                    </p>
                    <span className="inline-block px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full text-xs font-medium">
                      {achievement.date}
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {achievement.description}
                  </p>
                  
                  {/* Certificate indicator */}
                  {achievement.certificateUrl && (
                    <div className="mt-3 flex items-center space-x-2 text-blue-600 dark:text-blue-400">
                      <Eye className="w-3 h-3" />
                      <span className="text-xs font-medium">Click to view certificate</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-3 px-8 py-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-white/20 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold">
              <Award className="w-5 h-5 text-yellow-500" />
              <span>More achievements coming soon!</span>
              <Sparkles className="w-4 h-4 text-yellow-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
