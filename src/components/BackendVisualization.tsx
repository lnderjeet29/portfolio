import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaServer, FaDatabase, FaCloud, FaCode, FaNetworkWired } from 'react-icons/fa'

const BackendVisualization = () => {
  const [activeNode, setActiveNode] = useState<number | null>(null)

  const nodes = [
    { id: 1, icon: FaServer, label: 'API Server', x: 20, y: 30, color: 'from-blue-500 to-cyan-500' },
    { id: 2, icon: FaDatabase, label: 'Database', x: 80, y: 30, color: 'from-green-500 to-emerald-500' },
    { id: 3, icon: FaCloud, label: 'Cloud', x: 50, y: 10, color: 'from-purple-500 to-pink-500' },
    { id: 4, icon: FaCode, label: 'Services', x: 20, y: 70, color: 'from-orange-500 to-red-500' },
    { id: 5, icon: FaNetworkWired, label: 'Network', x: 80, y: 70, color: 'from-indigo-500 to-blue-500' },
  ]

  const connections = [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 3, to: 2 },
    { from: 1, to: 4 },
    { from: 2, to: 5 },
    { from: 4, to: 5 },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      const randomNode = Math.floor(Math.random() * nodes.length) + 1
      setActiveNode(randomNode)
      setTimeout(() => setActiveNode(null), 1000)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-full">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        {/* Connection Lines */}
        {connections.map((conn, idx) => {
          const fromNode = nodes.find(n => n.id === conn.from)
          const toNode = nodes.find(n => n.id === conn.to)
          if (!fromNode || !toNode) return null

          const isActive = activeNode === conn.from || activeNode === conn.to

          return (
            <motion.line
              key={idx}
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              stroke={isActive ? '#00d9ff' : 'rgba(0, 217, 255, 0.2)'}
              strokeWidth={isActive ? '0.8' : '0.3'}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: isActive ? 1 : 0.3,
                opacity: isActive ? 1 : 0.2,
              }}
              transition={{
                duration: 0.5,
                repeat: isActive ? Infinity : 0,
                repeatType: 'reverse',
              }}
            />
          )
        })}

        {/* Nodes */}
        {nodes.map((node) => {
          const Icon = node.icon
          const isActive = activeNode === node.id

          return (
            <g key={node.id}>
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={isActive ? 6 : 4}
                fill={`url(#gradient-${node.id})`}
                initial={{ scale: 0 }}
                animate={{
                  scale: isActive ? [1, 1.3, 1] : 1,
                  opacity: isActive ? [0.8, 1, 0.8] : 0.8,
                }}
                transition={{
                  duration: 1,
                  repeat: isActive ? Infinity : 0,
                }}
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
              />
              <defs>
                <linearGradient id={`gradient-${node.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={isActive ? '#00d9ff' : '#3b82f6'} />
                  <stop offset="100%" stopColor={isActive ? '#3b82f6' : '#00d9ff'} />
                </linearGradient>
              </defs>
              <motion.foreignObject
                x={node.x - 8}
                y={node.y - 12}
                width="16"
                height="16"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: isActive ? 1.2 : 1,
                }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center justify-center w-full h-full">
                  <Icon className="text-white text-xs" />
                </div>
              </motion.foreignObject>
            </g>
          )
        })}
      </svg>

      {/* Labels */}
      <div className="absolute inset-0 pointer-events-none">
        {nodes.map((node) => (
          <motion.div
            key={node.id}
            className="absolute text-xs text-gray-400 font-mono"
            style={{
              left: `${node.x}%`,
              top: `${node.y + 8}%`,
              transform: 'translateX(-50%)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: activeNode === node.id ? 1 : 0.5 }}
          >
            {node.label}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default BackendVisualization

