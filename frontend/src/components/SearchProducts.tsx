import { useEffect, useState } from "react"


export const SearchProducts = () => {
    const [search, setSearch] = useState("")
    const [products, setProducts]=useState([])
    const filterProducts = products.filter(product =>
        product.title.toLowerCase().includes(search.toLocaleLowerCase())
    )
    useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then(res=>res.json())
        .then(data=>{
            setProducts(data.products)
        })
    }, [])
    return (
        <div className="space-y-6 max-w-4xl mx-auto mt-10">
            <div className="space-x-4 relative">
                <input className="p-2 border rounded-md" type="text" onChange={(e) => setSearch(e.target.value)} />
                <select className="p-2 border rounded-md absolute right-0">
                    <option>Select an Option</option>
                    <option value="All">All</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                    <option value="PRICE_HIGH_TO_LOW">PRICE_HIGH_TO_LOW</option>
                    <option value="PRICE_LOW_TO_HIGH">PRICE_LOW_TO_HIGH</option>
                </select>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg grid-cols-4 gap-4">
                {filterProducts.map((p) => (
                    <div className=" p-4 border rounded shadow-md">
                        <img src={p.images[0]}/>
                        <p className="text-xl font-bold">{p.title}</p>
                        <div className=" flex items-end gap-2">
                        <p className="font-bold text-base">Rs: {p.discountPercentage}/pcs</p>
                        <p className="text-sm line-through"> {p.price}/pcs </p>
                        </div>
                       
                    </div>
                ))}
            </div>
        </div>
    )
}
