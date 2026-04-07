import { Route, Routes } from "react-router-dom"
import { Home } from "./routes/Home"
import { About } from "./routes/About"
import { Navlink } from "./routes/Navlink"
import { OrderSummary } from "./routes/OrderSummary"
import { Products } from "./routes/Products"
import { Now } from "./routes/Now"
import { Featured } from "./routes/Featured"
import { Users } from "./routes/Users"
import { ProductDetails } from "./routes/ProductDetails"

export const NavBar = () => {
    
  return (
    <>
    <Navlink/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="order-summary" element={<OrderSummary/>}/>
        <Route path="products" element={<Products/>}>
          <Route index element={<Featured/>}/>
          <Route path="fetured" element={<Featured/>}/>
          <Route path="now" element={<Now/>}/>
        </Route>
        <Route path="users" element={<Users/>}>
            <Route path=":userId" element={<ProductDetails/>}/>
        </Route>
    </Routes>
    </>
  )
}
