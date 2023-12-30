
import Trash from '@/components/icons/trash'
import Plus from '@/components/icons/Plus'
import ChevronDown from '../icons/ChevronDown'
import { useState } from 'react'
import ChevronUp from '../icons/ChevronUp'

export default function MenuItemPriceProps({ name, addLabel, props, setProps }) {

    const [isOpen, setIsOpen] = useState(false)
    function addSize() {
        setProps(oldSizes => {
            return [...oldSizes, { name: '', price: 0 }]
        })
    }

    function editSize(ev, index, prop) {
        const newValue = ev.target.value
        setProps(prevSizes => {
            const newSizes = [...prevSizes]
            newSizes[index][prop] = newValue
            return newSizes
        })
    }

    function removeSize(indexToRemove) {
        setProps(prev => prev.filter((v, index) => index !== indexToRemove))
    }

    return (
        <div className="bg-gray-200 p-2 rounded-md mb-2">
            <button className='inline-flex p-1 border-0 justify-start' type='button' onClick={() => setIsOpen(prev => !prev)}>
                {isOpen && (
                    <ChevronUp />
                )}
                {!isOpen && (
                    <ChevronDown />
                )}
                <span className='text-gray-700'>{name}</span>
                <span>({props?.length})</span>
            </button>
            <div className={isOpen ? 'block' : 'hidden'}>
            {props?.length > 0 && props.map((size, index) => (
                <div className="flex items-end gap-2">
                    <div>
                        <label>Name</label>
                        <input type="text" placeholder="Size name" value={size.name} onChange={ev => editSize(ev, index, 'name')} />
                    </div>
                    <div>
                        <label>Extra price</label>
                        <input type="text" placeholder="Extra price" value={size.price} onChange={ev => editSize(ev, index, 'price')} />
                    </div>
                    <div>
                        <button className="bg-white mb-2 px-2" type="button" onClick={() => removeSize(index)}>
                            <Trash />
                        </button>
                    </div>
                </div>
            ))}
            <button type="button" onClick={addSize} className="items-center bg-white">
                <Plus className="w-4 h-4" />
                {addLabel}
            </button>
            </div>
            
        </div>
    )
}