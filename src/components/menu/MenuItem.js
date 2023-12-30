import { useContext, useState } from "react"
import { CartContext } from "../AppContext"
import toast from "react-hot-toast"
import MenuItemTile from "./MenuItemTile"
import Image from "next/image"

export default function MenuItem(menuItem) {
    const { name, description, basePrice, sizes, extraIngredientPrices} = menuItem
    const {addToCart} = useContext(CartContext)
    const [showPopUp, setShowPopUp] = useState(false)
    const [selectedSize, setSelectedSize] = useState(sizes?.[0] || null)
    const [selectedExtras, setSelectedExtras] = useState([])

    function handleAddToCartButtonClick() {
        const hasOptions = sizes.length > 0 || extraIngredientPrices.length > 0
        if(hasOptions && !showPopUp) {
            setShowPopUp(true)
            return
        }
        addToCart(menuItem, selectedSize, selectedExtras)
        setShowPopUp(false)
        toast.success('Added to cart!')
    }
    function handleExtraThingClick(ev, extraThing) {
        const checked = ev.target.checked
        if(checked) {
            setSelectedExtras(prev => [...prev, extraThing])
        }
        else {
            setSelectedExtras(prev => {
                return prev.filter(e => e.name !== extraThing.name)
            })
        }
    }
    let selectedPrice = basePrice
    if(selectedPrice) {
        selectedPrice += selectedSize?.price
    }
    
    if(selectedExtras?.length > 0) {
        for(const extra of selectedExtras) {
            selectedPrice += extra.price
        }
    }
    return (
       <>
       {showPopUp && (
        <div 
        onClick={() => setShowPopUp(false)}
        className="fixed inset-0 bg-black/80 flex items-center justify-center">
            <div onClick={ev => ev.stopPropagation()} className="bg-white p-2 rounded-lg max-w-md my-8 ">

                <div className="overflow-y-scroll p-2" style={{maxHeight: 'calc(100vh - 100px)'}}>
                {/* <Image src = {image} alt={name} height={200} width={300} className="mx-auto"/> */}
                <h2 className="text-lg text-center font-bold mb-2">{name}</h2>
                <p className="text-center text-sm text-gray-500 mb-2">{description}</p>
                {sizes.length > 0 && (
                    <div className="py-2">
                        <h3 className="text-center text-gray-700">Pick your size</h3>
                        {sizes.map(size => (
                            <label key={size._id} className="flex items-center gap-2 p-2 rounded-md mb-1 border">
                                <input onChange={() => setSelectedSize(size)} checked={selectedSize?.name == size.name} name="size" type="radio"/> {size.name} ${basePrice + size.price}
                            </label>
                        ))}
                    </div>
                )}
                {extraIngredientPrices?.length > 0 && (
                    <div className="py-2">
                        <h3 className="text-center text-gray-700">Any extras?</h3>
                        {extraIngredientPrices.map(extraThing => (
                            <label key={extraThing._id} className="flex items-center gap-2 p-2 rounded-md mb-1 border">
                                <input type="checkbox" onChange={ev => handleExtraThingClick(ev, extraThing)} checked={selectedExtras.map(e => e._id).includes(extraThing._id)} name={extraThing.name}/> {extraThing.name} +${extraThing.price}
                            </label>
                        ))}
                    </div>
                )}
                <button type="button" className="primary sticky bottom-2" onClick={handleAddToCartButtonClick}>
                    Add to cart ${selectedPrice}
                </button>
                <button className="mt-2" onClick={() => setShowPopUp(false)}>
                    Cancel
                </button>
                </div>
                
            </div>
        </div>
       )}
       <MenuItemTile onAddToCart={handleAddToCartButtonClick} {...menuItem}/>
       </>
    )
}