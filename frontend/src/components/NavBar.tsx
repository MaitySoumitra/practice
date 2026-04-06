import { Route, Routes } from "react-router-dom"
import { Home } from "./routes/Home"
import { About } from "./routes/About"
import { Navlink } from "./routes/Navlink"
import { OrderSummary } from "./routes/OrderSummary"

export const NavBar = () => {
    
  return (
    <>
    <Navlink/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="order-summary" element={<OrderSummary/>}/>
    </Routes>
    </>
  )
}
