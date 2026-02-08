import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'
import { education } from '../data/portfolioData'
import { useState } from 'react'

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="education" className="section-padding bg-dark-surface">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Education
          </h2>
          <div className="w-20 h-1 bg-accent-primary mx-auto" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent-primary/30 hidden md:block" />

            {education.map((edu, index) => {
              const [imageLoaded, setImageLoaded] = useState(false)
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative mb-12 md:mb-16"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-8 top-6 w-4 h-4 bg-accent-primary rounded-full border-4 border-dark-surface z-10 hidden md:block" />

                  <div className="ml-0 md:ml-16">
                    <motion.div
                      className="bg-dark-card rounded-lg border border-gray-800 hover:border-accent-primary/50 transition-all duration-300 overflow-hidden group"
                      whileHover={{ scale: 1.02, x: 10 }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                        {/* Image Section */}
                        {edu.image && (
                          <motion.div
                            className="relative h-48 md:h-full overflow-hidden bg-dark-surface group"
                            initial={{ opacity: 0, scale: 1.1 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                          >
                            <motion.img
                              src={edu.image}
                              alt={edu.institution}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              onLoad={() => setImageLoaded(true)}
                              onError={() => setImageLoaded(false)}
                              initial={{ opacity: 0, scale: 1.2 }}
                              animate={{ 
                                opacity: imageLoaded ? 1 : 0,
                                scale: imageLoaded ? 1 : 1.2
                              }}
                              transition={{ duration: 0.6 }}
                            />
                            {/* Fallback if image doesn't load */}
                            {!imageLoaded && (
                              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-dark-surface to-dark-card">
                                <div className="text-center p-4">
                                  <FaGraduationCap className="text-accent-primary/30 text-4xl mx-auto mb-2" />
                                  <p className="text-gray-500 text-sm">{edu.institution}</p>
                                </div>
                              </div>
                            )}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-t from-dark-card/90 via-dark-card/20 to-transparent pointer-events-none"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.3 }}
                            />
                            <motion.div
                              className="absolute top-4 right-4 p-2 bg-accent-primary/20 backdrop-blur-sm rounded-lg border border-accent-primary/30"
                              initial={{ opacity: 0, y: -20, rotate: -180 }}
                              animate={{ opacity: 1, y: 0, rotate: 0 }}
                              transition={{ delay: 0.5, type: "spring" }}
                              whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                              <FaGraduationCap className="text-accent-primary text-xl" />
                            </motion.div>
                            {/* Shine effect on hover */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                            />
                          </motion.div>
                        )}

                        {/* Content Section */}
                        <div className={`p-6 ${edu.image ? 'md:col-span-2' : ''} flex flex-col justify-center`}>
                          <div className="flex items-start gap-4 mb-4">
                            {!edu.image && (
                              <div className="p-3 bg-accent-primary/10 rounded-lg">
                                <FaGraduationCap className="text-accent-primary text-xl" />
                              </div>
                            )}
                            <div className="flex-1">
                              <motion.h3
                                className="text-2xl font-bold text-accent-primary mb-1"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                              >
                                {edu.degree}
                              </motion.h3>
                              <motion.p
                                className="text-xl text-gray-300 mb-3"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                              >
                                {edu.institution}
                              </motion.p>
                              <motion.div
                                className="flex flex-wrap gap-4 text-sm"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                              >
                                <span className="text-gray-400 flex items-center gap-2">
                                  <span className="w-2 h-2 bg-accent-primary rounded-full animate-pulse"></span>
                                  {edu.period}
                                </span>
                                <span className="text-accent-primary font-semibold bg-accent-primary/10 px-3 py-1 rounded-full">
                                  {edu.cgpa}
                                </span>
                              </motion.div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education

