import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { personalInfo } from '../data/portfolioData'
import TypingEffect from './TypingEffect'
import CodeParticles from './CodeParticles'

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const socialLinks = [
    { icon: FaLinkedin, url: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: FaGithub, url: personalInfo.github, label: 'GitHub' },
    { icon: FaEnvelope, url: `mailto:${personalInfo.email}`, label: 'Email' },
  ]

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const techStack = [
    'Java Backend Developer',
    'Spring Boot Expert',
    'AWS Cloud Architect',
    'REST API Specialist',
    'Microservices Developer',
  ]

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center section-padding pt-32 relative overflow-hidden">
      <CodeParticles />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-custom text-center relative z-10"
      >
        <motion.div variants={itemVariants}>
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gradient">Inderjeet Yadav</span>
          </motion.h1>
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.h2
            className="text-2xl md:text-4xl text-gray-300 mb-6 min-h-[3rem] md:min-h-[4rem]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TypingEffect texts={techStack} speed={80} className="text-accent-primary" />
          </motion.h2>
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.p
            className="text-lg text-gray-400 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Building scalable backend systems with Java, Spring Boot, and cloud technologies.
            Passionate about creating efficient, reliable, and high-performance services.
          </motion.p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <motion.button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-accent-primary text-dark-bg font-semibold rounded-lg hover:bg-accent-secondary transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.button>
          <motion.button
            onClick={() => scrollToSection('experience')}
            className="px-8 py-3 border-2 border-accent-primary text-accent-primary font-semibold rounded-lg hover:bg-accent-primary hover:text-dark-bg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            My Experience
          </motion.button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center items-center gap-6"
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon
            return (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent-primary transition-colors"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                aria-label={social.label}
              >
                <Icon size={28} />
              </motion.a>
            )
          })}
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-400 hover:text-accent-primary transition-colors"
            aria-label="Scroll down"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

