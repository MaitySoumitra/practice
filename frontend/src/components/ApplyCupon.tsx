import { useState } from "react"

export const ApplyCupon = () => {
    const [items, setItems] = useState({
        ReactItems: 0, HtmlItmes: 0
    })


    const price: { ReactPrice: number, HtmlPrice: number } = {
        ReactPrice: 2499, HtmlPrice: 1499
    }
    const [selectedCupons, setSelectedCupons] = useState("")
    const totalItems = items.ReactItems + items.HtmlItmes
    const totalPrice = items.ReactItems * price.ReactPrice + items.HtmlItmes * price.HtmlPrice
    const cupons: Record<string, number> = {
        "SAVE20": 20, "SAVE30": 30, "SAVE40": 40
    }
    const discountPercentage = selectedCupons ? cupons[selectedCupons] : 0
    const discountPrice = (totalPrice * discountPercentage) / 100
    const finalAmount = totalPrice - discountPrice
    const AddReactPrice = () => {
        setItems({
            ...items, ReactItems: items.ReactItems + 1
        })
    }

    const AddHtmlPrice = () => {
        setItems({
            ...items, HtmlItmes: items.HtmlItmes + 1
        })
    }
    return (
        <div>
            <div className="p-2 border border-white-400">
                <p>course: "React Course"</p>
                <p>Price:{price.ReactPrice}</p>
                <p>Qty:{items.ReactItems}</p>
                <button className="p-2" onClick={AddReactPrice}>Add</button>
            </div>
            <div className="p-2 border border-white-400">
                <p>course: "Html Course"</p>
                <p>Price:{price.HtmlPrice}</p>
                <p>Qty:{items.HtmlItmes}</p>
                <button className="p-2" onClick={AddHtmlPrice}>Add</button>
            </div>
            <div>
                <p>Cart summary</p>
                <p>Total Product:{totalItems}</p>
                <p>Total Price:{totalPrice} </p>
            </div>
            <div>
                <select value={selectedCupons} onChange={(e) => setSelectedCupons(e.target.value)}>
                    <option>Select Cupon</option>
                    <option value="SAVE20">SAVE20</option>
                    <option value="SAVE30">SAVE30</option>
                    <option value="SAVE40">SAVE40</option>
                </select>
                {selectedCupons && (
                    <div>
                        <p>Apply cupon:{discountPercentage}% discount</p>
                        <p>Final Amount After Discount:{finalAmount}</p>
                    </div>
                )}
            </div>
        </div>
    )
}
