import { useEffect, useState } from 'react'

const Count = (introCount: number) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let increase: number = 0
    const slowTime: number = 60
    //33*60=1980
    //2000/60=33.33333
    let duration = 2000 / slowTime
    const total = Math.round(2000 / duration)
    setTimeout(() => console.log('등장'), 2000)
    const userCount = setInterval(() => {
      increase++
      console.log(increase)
      // 1/60 = 0.01666666
      const progress = increase / total
      //ex) 650 * progress = 10.8 반올림
      const currentCount = Math.round(introCount * progress)

      if (introCount >= 0) {
        setCount(currentCount)
      }
      //60 === 60이 맞으면
      if (increase === total) {
        clearInterval(userCount)
      } else {
      }
    }, duration)

    //console.log(duration)
  }, [])

  return count
}

export default Count
