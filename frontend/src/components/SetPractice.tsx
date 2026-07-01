import { useState } from "react"

interface productType {
    id: number,
    name: string,
    price: number
}

export const ProductList = ({ sortBy }: { sortBy: string }) => {
    const allProduct: productType[] = [
        { id: 1, name: "Apple", price: 15 },
        { id: 2, name: "Mango", price: 20 },
        { id: 3, name: "Banna", price: 8 },
        { id: 4, name: "Pineapple", price: 40 },
        { id: 5, name: "watermellon", price: 50 },
        { id: 6, name: "Cherry", price: 5 },
        { id: 7, name: "Orange", price: 15 }
    ]
    const sortedProduct: Record<string, (a: productType, b: productType) => number> = {
        "A-Z": (a, b) => a.name.localeCompare(b.name),
        "Z-A": (a, b) => b.name.localeCompare(a.name),
        Price_high_to_low: (a, b) => a.price - b.price,
        Price_low_to_high: (a, b) => b.price - a.price
    }
    const sorted = [...allProduct].sort(sortedProduct[sortBy])
    return (
        <div className="grid grid-cols-3 gap-2 ">
            {
                sorted.map((product) => (
                    <div key={product.id} className="p-4 border border-gray-200 rounded-lg">
                        <p>{product.name}</p>
                        <br />
                        <p>{product.price}</p>
                    </div>
                ))
            }
        </div>
    )
}

export const Dropdown = ({ setSortby }: { setSortby: (value: string) => void }) => {
    return (
        <>
            <select onChange={(e: any) => setSortby(e.target.value)}>
                <option>Select a option</option>
                <option value="A-Z">A_Z</option>
                <option value="Z-A">Z_A</option>
                <option value="Price_high_to_low">Price_high_to_low</option>
                <option value="Price_low_to_high">Price_low_to_high</option>
            </select>
        </>
    )
}

export const SetPractice = () => {
    const [sortBy, setSortby] = useState("")
    return (
        <div className="p-5">
            <Dropdown setSortby={setSortby} />
            <ProductList sortBy={sortBy} />
        </div>

    )
}
