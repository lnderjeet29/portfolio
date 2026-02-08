import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import lottie from 'lottie-web'
import type { AnimationItem } from 'lottie-web'

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
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<AnimationItem | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Load Lottie animation
    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: loop,
      autoplay: autoplay,
      path: animationPath,
    })

    animationRef.current = anim

    return () => {
      if (animationRef.current) {
        animationRef.current.destroy()
      }
    }
  }, [animationPath, loop, autoplay])

  return (
    <motion.div
      ref={containerRef}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
      onHoverStart={() => {
        if (animationRef.current) {
          animationRef.current.setSpeed(1.5)
        }
      }}
      onHoverEnd={() => {
        if (animationRef.current) {
          animationRef.current.setSpeed(1)
        }
      }}
    />
  )
}

export default LottieAnimation

