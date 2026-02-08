import { motion } from 'framer-motion'
import { FaCode } from 'react-icons/fa'

interface CodeSnippetProps {
  code: string
  language?: string
}

const CodeSnippet = ({ code, language = 'java' }: CodeSnippetProps) => {
  const lines = code.split('\n')

  return (
    <motion.div
      className="bg-dark-card p-4 rounded-lg border border-gray-800 font-mono text-sm overflow-x-auto"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ borderColor: 'rgba(0, 217, 255, 0.5)' }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-2 mb-3 text-gray-400 text-xs">
        <FaCode className="text-accent-primary" />
        <span>{language}</span>
      </div>
      <div className="space-y-1">
        {lines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-gray-300"
          >
            <span className="text-gray-500 mr-2">{index + 1}</span>
            <span className={line.trim().startsWith('//') ? 'text-green-400' : ''}>
              {line || '\u00A0'}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default CodeSnippet

