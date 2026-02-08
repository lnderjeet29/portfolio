import { useState, useEffect } from 'react'

interface TypingEffectProps {
  texts: string[]
  speed?: number
  className?: string
}

const TypingEffect = ({ texts, speed = 100, className = '' }: TypingEffectProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = texts[currentTextIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && currentText.length < current.length) {
      timeout = setTimeout(() => {
        setCurrentText(current.substring(0, currentText.length + 1))
      }, speed)
    } else if (!isDeleting && currentText.length === current.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, 2000)
    } else if (isDeleting && currentText.length > 0) {
      timeout = setTimeout(() => {
        setCurrentText(current.substring(0, currentText.length - 1))
      }, speed / 2)
    } else if (isDeleting && currentText.length === 0) {
      setIsDeleting(false)
      setCurrentTextIndex((prev) => (prev + 1) % texts.length)
    }

    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, isDeleting, texts, speed])

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

export default TypingEffect

