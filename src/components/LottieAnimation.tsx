import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import type { LottieRefCurrentProps } from 'lottie-react'

interface LottieAnimationProps {
  animationPath: string
  className?: string
  loop?: boolean
  autoplay?: boolean
}

const LottieAnimation = ({ 
  animationPath, 
  className = '', 
  loop = true, 
  autoplay = true 
}: LottieAnimationProps) => {
  const [animationData, setAnimationData] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const lottieRef = useRef<LottieRefCurrentProps>(null)

  useEffect(() => {
    // Try to load the animation file
    const loadAnimation = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // Try loading the file - .lottie files might actually be JSON
        const response = await fetch(animationPath)
        
        if (!response.ok) {
          throw new Error(`Failed to load: ${response.status} ${response.statusText}`)
        }
        
        // Check content type
        const contentType = response.headers.get('content-type') || ''
        
        // Try to parse as JSON (even if it's .lottie extension)
        if (contentType.includes('json') || contentType.includes('text') || animationPath.includes('.lottie')) {
          try {
            const text = await response.text()
            const data = JSON.parse(text)
            setAnimationData(data)
            setLoading(false)
            return
          } catch (parseError) {
            console.warn('Failed to parse as JSON, trying alternative method...', parseError)
          }
        }
        
        // If JSON parsing failed, the file might be binary .lottie format
        // In that case, we need to convert it or use a different approach
        setError('Lottie file format issue. Please ensure the file is in JSON format (.json extension).')
        setLoading(false)
        
      } catch (err: any) {
        console.error('Error loading Lottie animation:', err)
        setError(err.message || 'Failed to load animation. Please check the file path.')
        setLoading(false)
      }
    }

    loadAnimation()
  }, [animationPath])

  if (loading) {
    return (
      <div className={`${className} flex items-center justify-center bg-dark-surface rounded-lg min-h-[200px]`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent-primary mx-auto mb-2"></div>
          <p className="text-gray-400 text-sm">Loading animation...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={`${className} flex items-center justify-center bg-dark-surface rounded-lg min-h-[200px] p-4`}>
        <div className="text-center">
          <p className="text-red-400 text-sm mb-2">{error}</p>
          <p className="text-gray-500 text-xs">
            Tip: Convert your .lottie file to .json format or check the file path.
          </p>
        </div>
      </div>
    )
  }

  if (!animationData) {
    return null
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      whileHover={{ scale: 1.1 }}
      onHoverStart={() => {
        if (lottieRef.current) {
          lottieRef.current.setSpeed(1.5)
        }
      }}
      onHoverEnd={() => {
        if (lottieRef.current) {
          lottieRef.current.setSpeed(1)
        }
      }}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
        className="w-full h-full"
      />
    </motion.div>
  )
}

export default LottieAnimation

