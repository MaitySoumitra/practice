import { useNavigate } from "react-router-dom"


export const OrderSummary = () => {
    const navigate=useNavigate()
    return (
        <div>
            <p>This is OrderSummary Page</p>
            <button onClick={()=>navigate(-1)} className="p-2 border rounded">back</button>
        </div>
    )
}
