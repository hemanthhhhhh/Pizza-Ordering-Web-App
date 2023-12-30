import { useEffect, useState } from "react"
import MenuItemPriceProps from "./MenuItemPriceProps"
import EditableImage from "./EditableImage"

export default function MenuItemForm({onSubmit, menuItem}) {
    const [image, setImage] = useState('')
    const [name,setName] = useState(menuItem?.name || '')
    const [description, setDesrciption] = useState(menuItem?.description || '')
    const [basePrice, setBasePrice] = useState(menuItem?.basePrice || '')
    const [sizes, setSizes] = useState(menuItem?.sizes || [])
    const [extraIngredientPrices, setextraIngredientPrices] = useState(menuItem?.extraIngredientPrices || [])
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState(menuItem?.category || '')

    useEffect(() => {
        fetch('/api/categories').then(res => {
            res.json().then(categories => {
                setCategories(categories)
            })
        })
    }, [])
    return (

        <form onSubmit={ev => onSubmit(ev, {name, description, basePrice, sizes, extraIngredientPrices, category})} className="mx-auto max-w-2xl mt-8">
                <div className="items-start gap-4 grid" style={{gridTemplateColumns: '.3fr .7fr'}}>
                    <div>
                        {/* <EditableImage link={image} setLink={setImage} /> */}
                    </div>
                    <div className="grow">
                        <label>Item name</label>
                        <input value={name} onChange={ev => setName(ev.target.value)} type="text"/>
                        <label>Description</label>
                        <input value={description} onChange={ev => setDesrciption(ev.target.value)} type="text"/>
                        <label>Category</label>
                        <select value={category} onChange={ev => setCategory(ev.target.value)}>
                            {categories?.length > 0 && categories.map(c => (
                                <option key={c._id} value={c._id}>{c.name}</option>
                            ))}
                        </select>
                        <label>Base price</label>
                        <input value={basePrice} onChange={ev => setBasePrice(ev.target.value)} type="text"/>
                        
                        <MenuItemPriceProps name={'Sizes'} addLabel={'Add item size'} props={sizes} setProps={setSizes}/>
                        <MenuItemPriceProps name={'Extra ingredients'} addLabel={'Add ingredient prices'} props={extraIngredientPrices} setProps={setextraIngredientPrices}/>

                        <button type="submit">Save</button>
                    </div>
                </div>
            </form>
    )
}