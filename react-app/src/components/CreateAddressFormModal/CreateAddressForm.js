import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkCreateAddress } from "../../store/address";

export default function CreateAddressForm(){

    const dispatch = useDispatch()
    const [ street, setStreet ] = useState("")
    const [ city, setCity ] = useState("")
    const [ state, setState ] = useState("")
    const [ zipCode, setZipCode ] = useState("")
    const [ primary, setPrimary ] = useState(false)
    const [ errors, setErrors ] = useState([])

    const handleSubmit = async e => {
        e.preventDefault()
        const data = await dispatch(thunkCreateAddress(street, city, state, zipCode, primary))
        if(data) {
            setErrors(data)
        }
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
        setPrimary(e.target.value)
    }




    return (
        <div>
            <form onSubmit={handleSubmit}>
                <ul>
                    {errors.map(error => (
                        <li key={error}>{error}</li>
                    ))}
                </ul>
                <div>
                    <input value={street} type='text' onChange={updateStreet} placeholder="Street"/>
                </div>
                <div>
                    <input value={city} type='text' onChange={updateCity} placeholder="City" />
                </div>
                <div>
                    <input value={state} type='text' onChange={updateState} placeholder="State" />
                </div>
                <div>
                    <input value={zipCode} type='text' onChange={updateZipCode} placeholder="Zip Code" />
                </div>
                <div>
                    <input value={primary} type="checkbox" onChange={updatePrimary}>Set as primary</input>
                </div>
                <div>
                    <button type="submit">Create Address</button>
                </div>
            </form>
        </div>
    )
}
