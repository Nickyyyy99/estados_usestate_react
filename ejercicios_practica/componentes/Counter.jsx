import React, {useState} from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)
   const incrementCount = () => {
    setCount(count + 1)
   }
   const decrementCount = () => {
    setCount(count - 1)
   }

  return (
    <>
    <h1>Count {count}</h1>
    <button onClick={incrementCount}>+</button>
    <button onClick={decrementCount} disabled={count < 1}>-</button>
    </>
  )
}
