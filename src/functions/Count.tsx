import { useEffect, useState } from 'react'

const Count = (introCount: number) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let increase: number = 0
    let slowTime: number = 60
    let duration = 2000 / slowTime
    const total = Math.round(2000 / duration)

    const userCount = setInterval(() => {
      increase++
      const progress = increase / total
      const currentCount = Math.round(introCount * progress)
      if (introCount >= 0) {
        setCount(currentCount)
      }
      if (increase === total) {
        clearInterval(userCount)
      }
    }, duration)
  }, [introCount])

  return count
}

export default Count
