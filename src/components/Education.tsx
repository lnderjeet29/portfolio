import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'
import { education } from '../data/portfolioData'

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

            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative mb-12 md:mb-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-8 top-6 w-4 h-4 bg-accent-primary rounded-full border-4 border-dark-surface z-10 hidden md:block" />

                <div className="ml-0 md:ml-16">
                  <motion.div
                    className="bg-dark-card p-6 rounded-lg border border-gray-800 hover:border-accent-primary/50 transition-all duration-300"
                    whileHover={{ scale: 1.02, x: 10 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-accent-primary/10 rounded-lg">
                        <FaGraduationCap className="text-accent-primary text-xl" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-accent-primary mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-xl text-gray-300 mb-2">
                          {edu.institution}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm">
                          <span className="text-gray-400">{edu.period}</span>
                          <span className="text-accent-primary font-semibold">{edu.cgpa}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education

