import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { personalInfo } from '../data/portfolioData'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaLinkedin, url: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: FaGithub, url: personalInfo.github, label: 'GitHub' },
    { icon: FaEnvelope, url: `mailto:${personalInfo.email}`, label: 'Email' },
  ]

  return (
    <footer className="bg-dark-surface border-t border-gray-800 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-accent-primary mb-4">Contact</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-accent-primary" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-accent-primary" />
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="hover:text-accent-primary transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-accent-primary" />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-accent-primary transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-accent-primary mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['About', 'Experience', 'Projects', 'Skills', 'Education'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-300 hover:text-accent-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.getElementById(link.toLowerCase())
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold text-accent-primary mb-4">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
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
                    aria-label={social.label}
                  >
                    <Icon size={24} />
                  </motion.a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="mt-2 text-sm">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

