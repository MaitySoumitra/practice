import { useEffect, useState } from "react"


export const Count = () => {
  const [count, setCount] = useState(0)
  const limit = 10

  useEffect(() => {
    if (count < limit) {
      setCount(prev => prev + 1)
      setCount(prev => prev + 1)
      // setCount(count+1)
      // setCount(count+1)
    }
  })


  console.log(count)
  return (
    <div>Count value:{count}</div>
  )
}
