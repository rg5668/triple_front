import { useEffect, useState } from 'react'
import Slow from './Slow'

const Count = (props: number) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let total: number = 0
    let slowTime: number = 60
    let duration = 2000 / slowTime
    const totalFrames = Math.round(2000 / duration)

    const userCount = setInterval(() => {
      total++
      const progress = total / totalFrames
      const currentCount = Math.round(props * progress)

      if (props >= 0) {
        setCount(currentCount)
      }

      if (total === totalFrames) {
        clearInterval(userCount)
      }
    }, duration)
  }, [props])

  return count
}

export default Count
