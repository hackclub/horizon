import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import sparkleImage from '../public/images/sparkle.svg'

const DEFAULT_COLOR = '#FFC700'

const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
const useRandomInterval = (callback, minDelay, maxDelay) => {
  const timeoutId = useRef(null)
  const savedCallback = useRef(callback)

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    const handleTick = () => {
      const nextTickAt = random(minDelay, maxDelay)
      timeoutId.current = window.setTimeout(() => {
        savedCallback.current()
        handleTick()
      }, nextTickAt)
    }

    handleTick()

    return () => window.clearTimeout(timeoutId.current)
  }, [minDelay, maxDelay])

  const cancel = useCallback(() => {
    window.clearTimeout(timeoutId.current)
  }, [])
  return cancel
}

const generateSparkle = color => {
  const sparkle = {
    id: String(random(10000, 99999)),
    createdAt: Date.now(),
    color,
    size: random(10, 20),
    style: {
      top: random(0, 100) + '%',
      left: random(0, 100) + '%'
    }
  }

  return sparkle
}

const Sparkle = ({ size, color, style }) => {
  const path =
    'M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z'

  return (
    <div
      style={{
        position: 'absolute',
        display: 'block',
        animation: 'come-in-out 700ms forwards',
        ...style
      }}>
      <Image
        src={sparkleImage}
        width={size}
        height={size}
        alt="Cookie"
        style={{ display: 'block', animation: 'spin 1000ms linear' }}
      />
    </div>
  )
}

const Sparkles = ({ color = DEFAULT_COLOR, children, style }) => {
  const [sparkles, setSparkles] = useState(() =>
    [1, 2, 3].map(() => generateSparkle(color))
  )

  useRandomInterval(
    () => {
      const sparkle = generateSparkle(color)
      const now = Date.now()
      const nextSparkles = sparkles.filter(sp => {
        const delta = now - sp.createdAt
        return delta < 750
      })
      nextSparkles.push(sparkle)
      setSparkles(nextSparkles)
    },
    50,
    450
  )

  return (
    <div style={{ display: 'flex', position: 'relative', ...style }}>
      <style jsx global>{`
        @keyframes come-in-out {
          0% {
            transform: scale(0);
          }
          50% {
            transform: scale(1);
          }
          100% {
            transform: scale(0);
          }
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(180deg);
          }
        }
      `}</style>
      {sparkles.map(sparkle => (
        <Sparkle key={sparkle.id} {...sparkle} />
      ))}
      <div style={{ position: 'relative', zIndex: 1, fontWeight: 'bold' }}>
        {children}
      </div>
    </div>
  )
}

export default Sparkles
