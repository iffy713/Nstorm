import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetAllAddresses, thunkUpdateAddress } from "../../store/address";

export default function UpdateAddressForm({ addressId, street, city, state, zipCode, primary, setShowModal}){

    console.log("addressId here",addressId)
    const dispatch = useDispatch()
    const [ editstreet, setStreet ] = useState(street)
    const [ editcity, setCity ] = useState(city)
    const [ editstate, setState ] = useState(state)
    const [ editzipCode, setZipCode ] = useState(zipCode)
    const [ editprimary, setPrimary ] = useState(primary)
    const [ errors, setErrors ] = useState([])
    const states = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "DE", "FL", "GA",
    "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
    "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
    "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
    "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]


    const handleSubmit = async e => {
        e.preventDefault()
        const newAddres = {
            street,
            city,
            state,
            "zip_code": zipCode,
            "is_primary": primary,
        }
        const data = await dispatch(thunkUpdateAddress(addressId, newAddres))
        if (data) {
            setErrors(data)
        } else {
            setShowModal(false)
        }
    }

    // useEffect(() => {
    //     dispatch(thunkGetAllAddresses())
    // }, [dispatch, editstreet, editcity, editstate, editzipCode, editprimary])


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
                    <input value={editstreet} type='text' onChange={updateStreet} placeholder="Street"/>
                </div>
                <div>
                    <input value={editcity} type='text' onChange={updateCity} placeholder="City" />
                </div>
                <div>
                    <select value={editstate} onChange={updateState}>
                        <option value="">-- Please select a state --</option>
                        {states.map(ele => (
                            <option value={ele} key={ele}>{ele}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <input value={editzipCode} type='text' onChange={updateZipCode} placeholder="Zip Code" />
                </div>
                <div>
                    <input value={editprimary} type="checkbox" onChange={updatePrimary}></input>
                    <small>Set as primary</small>
                </div>
                <div>
                    <button type="submit">Update Address</button>
                </div>
            </form>
        </div>
    )
}
