import { useEffect, useState } from 'react'

const Count = (target: number) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let count1: number = 0
    const timer = setTimeout(() => {
      const userCount = setInterval(() => {
        if (count === 0) {
          count1++
          setCount(count1)

          if (count1 === target) {
            clearInterval(userCount)
          }
        }
      }, 0)
      clearTimeout(timer)
    }, 2000)
  })

  return count
}

export default Count
