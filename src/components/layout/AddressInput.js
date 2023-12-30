export default function AddressInputs({addressProps, setAddressProp, disabled=false}) {
    const {phone, streetAddress, postalCode, city,country} = addressProps;
    return (
        <>
              <label>
                    Phone
                </label>
                <input disabled={disabled} type="tel" placeholder="Phone number" value={phone || ''} onChange={ev => setAddressProp('phone', ev.target.value)} />
                <label>
                    Street address
                </label>
                <input disabled={disabled} type="text" placeholder="Street address" value={streetAddress || ''} onChange={ev => setAddressProp('streetAddress', ev.target.value)} />
                <div className="grid grid-cols-2 gap-2">
                    <div>
                        <label>
                            Postal code
                        </label>
                        <input disabled={disabled} type="text" value={postalCode || ''} onChange={ev => setAddressProp('postalCode', ev.target.value)} placeholder="Postal Code" />
                    </div>

                    <div>
                        <label>
                            City
                        </label>
                        <input disabled={disabled} className="my-0" type="text" value={city || ''} onChange={ev => setAddressProp('city', ev.target.value)} placeholder="City" />
                    </div>
                </div>
                <label>
                    Country
                </label>
                <input disabled={disabled} type="text" value={country || ''} onChange={ev => setAddressProp('country', ev.target.value)} placeholder="Country" />
        </>
    )
}