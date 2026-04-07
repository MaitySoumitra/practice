import { useState } from "react"


export const SearchProducts = () => {
    const [search, setSearch]=useState("")
    const productList=[
        {name: "Apple", price: 199},
        {name: "Mango", price: 100},
        {name: "Orange", price: 150}
    ]
    const filterProducts=productList.filter(product=>
        product.name.toLowerCase().includes(search.toLocaleLowerCase())
    )
  return (
    <div className="space-y-6 max-w-4xl mx-auto mt-10">
        <div className="space-x-4">
 <input className="p-2 border rounded-md" type="text" onChange={(e)=>setSearch(e.target.value)}/>
        <select className="p-2 border rounded-md">
            <option>Select an Option</option>
            <option value="All">All</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="PRICE_HIGH_TO_LOW">PRICE_HIGH_TO_LOW</option>
            <option value="PRICE_LOW_TO_HIGH">PRICE_LOW_TO_HIGH</option>
        </select>
        </div>
       
        <div className="flex flex-row gap-6">
        {filterProducts.map((product)=>(
            <div className="p-4 border rounded shadow-md">
                <p>Name: {product.name}</p>
                <p>Price: {product.price} </p>
            </div>
        ))}
        </div>
    </div>
  )
}
