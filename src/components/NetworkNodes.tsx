import { motion } from 'framer-motion'
import { useRef } from 'react'

const NetworkNodes = () => {
  const svgRef = useRef<SVGSVGElement>(null)

  const nodes = [
    { id: 1, x: 20, y: 20, label: 'API' },
    { id: 2, x: 50, y: 50, label: 'DB' },
    { id: 3, x: 80, y: 30, label: 'Cache' },
    { id: 4, x: 30, y: 70, label: 'Queue' },
    { id: 5, x: 70, y: 60, label: 'Auth' },
  ]

  const connections = [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 1, to: 4 },
    { from: 2, to: 5 },
    { from: 3, to: 4 },
  ]

  return (
    <div className="relative w-full h-full">
      <svg
        ref={svgRef}
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Connections */}
        {connections.map((conn, index) => {
          const fromNode = nodes.find((n) => n.id === conn.from)
          const toNode = nodes.find((n) => n.id === conn.to)
          if (!fromNode || !toNode) return null

          return (
            <motion.line
              key={index}
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              stroke="rgba(0, 217, 255, 0.3)"
              strokeWidth="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 1,
                delay: index * 0.2,
                repeat: Infinity,
                repeatType: 'reverse',
                repeatDelay: 2,
              }}
            />
          )
        })}

        {/* Nodes */}
        {nodes.map((node) => (
          <g key={node.id}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="3"
              fill="rgba(0, 217, 255, 0.8)"
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: node.id * 0.3,
              }}
            />
            <text
              x={node.x}
              y={node.y - 5}
              fontSize="3"
              fill="rgba(0, 217, 255, 0.6)"
              textAnchor="middle"
              className="font-mono"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}

export default NetworkNodes

