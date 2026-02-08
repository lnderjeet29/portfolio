import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaCode, FaServer, FaDatabase, FaCloud } from 'react-icons/fa'

const RoboticCharacter = () => {
  const [hoveredPart, setHoveredPart] = useState<string | null>(null)

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: [0.42, 0, 0.58, 1] as const
    }
  }

  const pulseAnimation = {
    scale: [1, 1.1, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: [0.42, 0, 0.58, 1] as const
    }
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Main Robotic Character Container */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
        whileHover={{ scale: 1.1 }}
      >
        {/* Head */}
        <motion.div
          className="relative mb-4"
          animate={floatingAnimation}
          onHoverStart={() => setHoveredPart('head')}
          onHoverEnd={() => setHoveredPart(null)}
        >
          <motion.div
            className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-full relative overflow-hidden shadow-2xl"
            whileHover={{ rotate: [0, -5, 5, -5, 0] }}
            transition={{ duration: 0.5 }}
          >
            {/* Visor/Glasses */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-1/2 h-1/3 bg-gradient-to-br from-cyan-400 via-teal-500 to-green-400 rounded-lg opacity-80"
              animate={pulseAnimation}
            />
            {/* Graffiti Pattern */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-2 left-2 w-4 h-4 border-2 border-black rounded"></div>
              <div className="absolute bottom-2 right-2 w-3 h-3 bg-purple-500 rounded-full"></div>
              <div className="absolute top-1/2 right-2 w-2 h-6 bg-pink-500"></div>
            </div>
            {/* Tech Icons floating around head */}
            <motion.div
              className="absolute -top-4 -right-4"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <FaCode className="text-accent-primary text-xl" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Torso/Body */}
        <motion.div
          className="relative"
          animate={floatingAnimation}
          transition={{ delay: 0.2 }}
        >
          <div className="flex gap-2">
            {/* Left Side - Green with SK8 style */}
            <motion.div
              className="w-24 h-32 md:w-32 md:h-40 bg-gradient-to-br from-green-400 to-green-600 rounded-lg relative overflow-hidden shadow-xl"
              whileHover={{ scale: 1.1, x: -5 }}
              onHoverStart={() => setHoveredPart('left')}
              onHoverEnd={() => setHoveredPart(null)}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-black font-bold text-2xl md:text-3xl opacity-80">API</span>
              </div>
              <motion.div
                className="absolute -bottom-2 -left-2"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaServer className="text-accent-primary text-2xl" />
              </motion.div>
            </motion.div>

            {/* Right Side - Red */}
            <motion.div
              className="w-24 h-32 md:w-32 md:h-40 bg-gradient-to-br from-red-400 to-red-600 rounded-lg relative overflow-hidden shadow-xl"
              whileHover={{ scale: 1.1, x: 5 }}
              onHoverStart={() => setHoveredPart('right')}
              onHoverEnd={() => setHoveredPart(null)}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-2xl md:text-3xl opacity-80">DB</span>
              </div>
              <motion.div
                className="absolute -bottom-2 -right-2"
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                <FaDatabase className="text-accent-primary text-2xl" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Chains/Connections */}
        <motion.div
          className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex gap-2"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="w-1 h-8 bg-accent-primary rounded-full"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </motion.div>

        {/* Floating Tech Icons */}
        <motion.div
          className="absolute -left-8 top-1/2"
          animate={{ 
            x: [0, 10, 0],
            y: [0, -10, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <FaCloud className="text-accent-primary text-2xl" />
        </motion.div>

        <motion.div
          className="absolute -right-8 top-1/4"
          animate={{ 
            x: [0, -10, 0],
            y: [0, 10, 0],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <FaServer className="text-accent-secondary text-2xl" />
        </motion.div>

        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-accent-primary/20 rounded-full blur-3xl -z-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>

      {/* Hover Tooltip */}
      {hoveredPart && (
        <motion.div
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-dark-card px-4 py-2 rounded-lg border border-accent-primary text-accent-primary text-sm whitespace-nowrap"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
        >
          {hoveredPart === 'head' && 'Backend Developer'}
          {hoveredPart === 'left' && 'REST APIs'}
          {hoveredPart === 'right' && 'Database'}
        </motion.div>
      )}
    </div>
  )
}

export default RoboticCharacter

