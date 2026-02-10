import { motion } from 'framer-motion'
import { skills } from '../data/portfolioData'
import {
  SiKotlin,
  SiPython,
  SiSpring,
  SiPostgresql,
  SiMysql,
  SiAmazon,
  SiDocker,
  SiJenkins,
  SiGithubactions,
  SiPostman,
  SiGit,
} from 'react-icons/si'
import { FaCode, FaDatabase, FaRobot } from 'react-icons/fa'

const Skills = () => {
  const iconMap: { [key: string]: any } = {
    Java: FaCode,
    Kotlin: SiKotlin,
    'Python (basic)': SiPython,
    'Spring Boot': SiSpring,
    PostgreSQL: SiPostgresql,
    MySQL: SiMysql,
    'AWS (EC2, S3, RDS, Lambda, ECS Fargate, CodeBuild)': SiAmazon,
    Docker: SiDocker,
    Jenkins: SiJenkins,
    'GitHub Actions': SiGithubactions,
    JUnit: FaCode,
    'Rest Assured': SiPostman,
    Postman: SiPostman,
    Git: SiGit,
    Redis: FaDatabase,
    'ELK Stack (Elasticsearch, Logstash, Kibana)': FaDatabase,
    'Cursor (AI-assisted IDE)': FaCode,
    ChatGPT: FaRobot,
    Claude: FaRobot,
    Timefold: FaRobot,
    ElevenLabs: FaRobot,
    Knowlarity: FaRobot,
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-accent-primary mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="bg-dark-card p-6 rounded-lg border border-gray-800 hover:border-accent-primary/50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <h3 className="text-xl font-bold text-accent-primary mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = iconMap[skill]
                  return (
                    <motion.div
                      key={skillIndex}
                      className="flex items-center gap-2 px-3 py-2 bg-dark-surface rounded-lg border border-gray-700 hover:border-accent-primary/50 transition-all duration-300 group relative overflow-hidden"
                      whileHover={{ scale: 1.1, x: 5 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.05 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-accent-primary/10"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                      {Icon && (
                        <motion.div
                          className="relative z-10"
                          whileHover={{ rotate: [0, -10, 10, 0] }}
                          transition={{ duration: 0.3 }}
                        >
                          <Icon
                            className="text-accent-primary group-hover:text-accent-secondary transition-colors"
                            size={20}
                          />
                        </motion.div>
                      )}
                      <span className="text-sm text-gray-300 group-hover:text-accent-primary transition-colors relative z-10">
                        {skill.length > 20 ? skill.substring(0, 20) + '...' : skill}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

