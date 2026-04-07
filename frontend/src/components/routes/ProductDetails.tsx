import { useParams } from "react-router-dom"

export const ProductDetails = () => {
    const {userId}=useParams()
  return (
    <div>ProductDetails of User {userId}</div>
  )
}
