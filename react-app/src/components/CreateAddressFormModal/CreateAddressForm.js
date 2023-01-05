import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { thunkCreateAddress, thunkGetAllAddresses } from "../../store/address";

export default function CreateAddressForm({setShowModal}){

    const dispatch = useDispatch()
    const [ street, setStreet ] = useState("")
    const [ city, setCity ] = useState("")
    const [ state, setState ] = useState("")
    const [ zipCode, setZipCode ] = useState("")
    const [ primary, setPrimary ] = useState(false)
    const [ errors, setErrors ] = useState([])
    const states = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "DE", "FL", "GA",
    "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
    "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
    "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
    "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]

    const handleSubmit = async e => {
        e.preventDefault()
        const data = await dispatch(thunkCreateAddress(street, city, state, zipCode, primary))
        if(data) {
            setErrors(data)
        } else {
            setShowModal(false)
        }
        await dispatch(thunkGetAllAddresses())
    }

    const updateStreet = (e) => {
        setStreet(e.target.value)
    }

    const updateCity = (e) => {
        setCity(e.target.value)
    }

    const updateState = (e) => {
        setState(e.target.value)
    }

    const updateZipCode = (e) => {
        setZipCode(e.target.value)
    }

    const updatePrimary = (e) => {
        setPrimary(!primary)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    {errors.map((error, ind) => (
                        <div key={ind}>{error}</div>
                    ))}
                </div>
                <div>
                    <input value={street} type='text' onChange={updateStreet} placeholder="Street"/>
                </div>
                <div>
                    <input value={city} type='text' onChange={updateCity} placeholder="City" />
                </div>
                <div>
                    {/* <input value={state} type='text' onChange={updateState} placeholder="State" /> */}
                    <select value={state} onChange={updateState}>
                        <option value="">-- Please select a state --</option>
                        {states.map(ele => (
                            <option value={ele} key={ele}>{ele}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <input value={zipCode} type='text' onChange={updateZipCode} placeholder="Zip Code" />
                </div>
                <div>
                    <input value={primary} type="checkbox" onChange={updatePrimary}></input>
                    <small>Set as primary</small>
                </div>
                <div>
                    <button type="submit">Create Address</button>
                </div>
            </form>
        </div>
    )
}
