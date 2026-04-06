import { NavLink } from "react-router";
export const Navlink = () => {
  return (
    <div className="px-5 py-4 bg-gray-200 space-x-4">
        
        <NavLink to='/' className={({isActive})=>isActive?"font-bold text-none":""}>Home</NavLink>
        <NavLink to='about' className={({isActive})=>isActive?"font-bold text-none":""}>About</NavLink>
    </div>
  )
}
