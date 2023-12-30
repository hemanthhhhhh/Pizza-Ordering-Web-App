"use client"
import { useState } from "react"
import {useProfile} from "@/components/UseProfile";
import EditableImage from "./EditableImage";
import AddressInputs from "./AddressInput";


export default function UserForm({user, onSave}) {
    const [userName, setUserName] = useState(user?.name || '')
    const [phone, setPhone] = useState(user?.phone || '')
    // const [image, setImage] = useState(user?.image || '');
    const [postalCode, setPostalCode] = useState(user?.postalCode || '')
    const [streetAddress, setStreetAddress] = useState(user?.streetAddress || '')
    const [city, setCity] = useState(user?.city || '')
    const [country, setCountry] = useState(user?.country || '')
    const [admin, setAdmin] = useState(user?.admin || false)
    const {data:loggedInUserData} = useProfile()


    function handleAddressChange(propName, value) {
        if (propName === 'phone') setPhone(value);
        if (propName === 'streetAddress') setStreetAddress(value);
        if (propName === 'postalCode') setPostalCode(value);
        if (propName === 'city') setCity(value);
        if (propName === 'country') setCountry(value);
    }
    return (
        <div className="md:flex gap-4 ">
            <div>
                <div className=" p-2 rounded-lg relative max-w-{120px}">
                    {/* <EditableImage link={image} setLink={setImage} /> */}
                </div>
            </div>
            <form className="grow" onSubmit={ev => onSave(ev, {name:userName, phone, streetAddress, postalCode, city, country}, admin)}>
                <label>
                    First and last name
                </label>
                <input value={userName} onChange={ev => setUserName(ev.target.value)} type="text" placeholder="First and last name" />
                <label>
                    Email
                </label>
                <input type="email" placeholder={'email'} disabled={true} value={user?.email} />
                <AddressInputs 
                addressProps={{phone, streetAddress, postalCode, city, country}}
                setAddressProp={handleAddressChange}
                />
                {loggedInUserData.admin && (
                        <div>
                            <label className="p-2 inline-flex items-center gap-2 mb-2" htmlFor="adminCb">
                                <input 
                                id = "adminCb" type="checkbox" className="" value={'1'}
                                checked={admin} onChange={ev => setAdmin(ev.target.checked)}/>
                                <span>Admin</span>
                            </label>
                        </div>
                 )}
                <button type="submit">Save</button>
            </form>
        </div>
    )
}