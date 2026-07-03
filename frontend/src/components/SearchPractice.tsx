import { useState } from "react"

interface productType{
    name:string,
    price:number
}
export const SearchPractice = () => {
    const [search, setSearch]=useState('')
        const productList: productType[] = [
        { name: "Apple", price: 140 },
        { name: "Mango", price: 99 },
        { name: "Orange", price: 80 }
    ]
    const filteredProduct=productList.filter((product)=>(
        product.name.toLowerCase().includes(search.toLowerCase())
    ))
  return (
    <div className="">
        <input className="border p-4 rounded-lg shadow-lg" type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        {filteredProduct.map((product)=>(
            <div key={product.name}>
                <p>{product.name}</p>
                <p>{product.price}</p>
                </div>
        ))}
    </div>
  )
}
