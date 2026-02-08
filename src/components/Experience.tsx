import { motion } from 'framer-motion'
import { FaCode, FaCog } from 'react-icons/fa'
import { experiences } from '../data/portfolioData'

const Experience = () => {
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
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-accent-primary mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent-primary/30 hidden md:block" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative mb-12 md:mb-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-8 top-6 w-4 h-4 bg-accent-primary rounded-full border-4 border-dark-bg z-10 hidden md:block" />

                <div className="ml-0 md:ml-16">
                  <motion.div
                    className="bg-dark-card p-6 rounded-lg border border-gray-800 hover:border-accent-primary/50 transition-all duration-300"
                    whileHover={{ scale: 1.02, x: 10 }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div
                        className="p-3 bg-accent-primary/10 rounded-lg"
                        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        {index === 0 ? (
                          <FaCog className="text-accent-primary text-xl" />
                        ) : (
                          <FaCode className="text-accent-primary text-xl" />
                        )}
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-accent-primary mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-xl text-gray-300 mb-2">
                          {exp.company}
                          {exp.location && (
                            <span className="text-gray-500 text-base"> • {exp.location}</span>
                          )}
                        </p>
                        <p className="text-sm text-gray-400 mb-4">{exp.period}</p>
                      </div>
                    </div>

                    <ul className="space-y-2 ml-12">
                      {exp.description.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-gray-300 flex items-start gap-2"
                        >
                          <span className="text-accent-primary mt-2">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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

export default Experience

