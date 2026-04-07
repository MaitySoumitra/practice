import { Link, Outlet } from "react-router-dom"

export const Products = () => {
  return (
    <div>
        <input type="text" className="p-2 border rounded"/>
        <div className="space-x-4">
            <Link to="fetured"> Featured</Link>
            <Link to="now">Now</Link>
        </div>
        <Outlet/>
    </div>
  )
}
