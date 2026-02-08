import { motion } from 'framer-motion'
import { summary } from '../data/portfolioData'
import CodeSnippet from './CodeSnippet'
import NetworkNodes from './NetworkNodes'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="about" className="section-padding bg-dark-surface">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4 text-gradient"
          >
            About Me
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-accent-primary mb-12"
          />

          <motion.div
            variants={itemVariants}
            className="max-w-3xl"
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              {summary}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <motion.div
                variants={itemVariants}
                className="p-6 bg-dark-card rounded-lg border border-gray-800 hover:border-accent-primary/50 transition-all duration-300 group"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <h3 className="text-xl font-semibold text-accent-primary mb-3 flex items-center gap-2">
                  <span className="group-hover:animate-pulse">⚙️</span>
                  Backend Development
                </h3>
                <p className="text-gray-400 mb-4">
                  Specialized in building robust REST APIs using Spring Boot, with expertise in
                  database design, query optimization, and microservices architecture.
                </p>
                <CodeSnippet
                  code={`@RestController\n@RequestMapping("/api")\npublic class UserController {\n  // REST API endpoints\n}`}
                  language="java"
                />
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="p-6 bg-dark-card rounded-lg border border-gray-800 hover:border-accent-primary/50 transition-all duration-300 group"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <h3 className="text-xl font-semibold text-accent-primary mb-3 flex items-center gap-2">
                  <span className="group-hover:animate-pulse">☁️</span>
                  Cloud & DevOps
                </h3>
                <p className="text-gray-400 mb-4">
                  Experienced in deploying and managing applications on AWS, containerization with
                  Docker, and implementing CI/CD pipelines for automated deployments.
                </p>
                <div className="h-32 bg-dark-surface rounded overflow-hidden">
                  <NetworkNodes />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

