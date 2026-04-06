import { useNavigate } from "react-router-dom"


export const Home = () => {
    const navigate=useNavigate()
  return (
    <>
    <div>This is Home Page</div>
           <button className="p-2 border rounded"
    onClick={()=> navigate('/order-summary', {replace: true})}
    >place order</button>
    </>
  )
}
