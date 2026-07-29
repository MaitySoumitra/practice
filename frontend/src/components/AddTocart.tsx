import { useState } from "react"


export const AddTocart = () => {

    const [quantity, setQuantity]=useState<number>(1)
    const incrementCart=()=>{
        setQuantity((prev)=>prev+1)
    }
    const decrementCart=()=>{
        setQuantity((prev)=>Math.max(1, prev-1))
    }
  return (
    <div>
        <h2>{quantity}</h2>
        <button onClick={incrementCart}>+</button>
        <button onClick={decrementCart}>-</button>
    </div>
  )
}
