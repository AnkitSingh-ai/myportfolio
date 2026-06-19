import React, { useState } from 'react'
import { Calendar, MapPin, Award, Code, X } from 'lucide-react'

export const Experience = () => {
  const [selectedPdf, setSelectedPdf] = useState(null)

  const experiences = [
    {
      type: 'internship',
      title: 'Software Developer Intern',
      organization: 'Achyls Solution',
      duration: '22 Sep 2025 - 21 Jan 2026',
      location: 'Onsite',
      description: 'Developed custom JIRA plugins to enhance project management workflows and team collaboration. Implemented robust backend solutions and integrated third-party APIs for improved functionality.',
      achievements: ['Custom JIRA plugin development', 'RESTful API integration', 'Backend optimization', 'Cross-functional collaboration'],
      certificateUrl: '/internship certificate.png',
      experienceLetterUrl: '/experince letter.png'
    }
  ]

  const openPdfPreview = (pdfUrl, title) => {
    setSelectedPdf({ url: pdfUrl, title })
  }

  const closePdfPreview = () => {
    setSelectedPdf(null)
  }

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Professional Experience
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Building expertise through <span className="font-semibold text-blue-600 dark:text-blue-400">hands-on internship experience</span> and <span className="font-semibold text-purple-600 dark:text-purple-400">professional development</span>
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
                    ) : exp.type === 'internship' ? (
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

                    {exp.type === 'internship' && (
                      <div className="mt-6 flex flex-wrap gap-3">
                        {exp.certificateUrl && (
                          <button
                            onClick={() => openPdfPreview(exp.certificateUrl, 'Internship Certificate')}
                            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors duration-300"
                          >
                            View Certificate
                          </button>
                        )}
                        {exp.experienceLetterUrl && (
                          <button
                            onClick={() => openPdfPreview(exp.experienceLetterUrl, 'Experience Letter')}
                            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-colors duration-300"
                          >
                            View Experience Letter
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* PDF Preview Modal */}
      {selectedPdf && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {selectedPdf.title}
              </h3>
              <button
                onClick={closePdfPreview}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300"
              >
                <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              </button>
            </div>

            {/* Modal Content - Image Viewer */}
            <div className="flex-1 min-h-0 overflow-auto flex items-center justify-center p-4">
              <img
                src={selectedPdf.url}
                alt={selectedPdf.title}
                className="block max-w-full max-h-[calc(90vh-10rem)] w-auto h-auto object-contain"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex justify-end gap-3">
              <button
                onClick={closePdfPreview}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
              >
                Close
              </button>
              <a
                href={selectedPdf.url}
                download={selectedPdf.title}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-300"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}