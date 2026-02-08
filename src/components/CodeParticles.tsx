import { useEffect, useRef } from 'react'

const CodeParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const codeChars = ['{', '}', '(', ')', '[', ']', '<', '>', ';', '=', '+', '-', '*', '/', '&', '|', '!', '?', ':', '~', '^', '%', '#', '@']
    const particles: Array<{
      x: number
      y: number
      char: string
      speed: number
      opacity: number
    }> = []

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        char: codeChars[Math.floor(Math.random() * codeChars.length)],
        speed: 0.5 + Math.random() * 1.5,
        opacity: 0.1 + Math.random() * 0.3,
      })
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 10, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.y += particle.speed
        if (particle.y > canvas.height) {
          particle.y = 0
          particle.x = Math.random() * canvas.width
        }

        ctx.fillStyle = `rgba(0, 217, 255, ${particle.opacity})`
        ctx.font = '14px monospace'
        ctx.fillText(particle.char, particle.x, particle.y)
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}

export default CodeParticles

