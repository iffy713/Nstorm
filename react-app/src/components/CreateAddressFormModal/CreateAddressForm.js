import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { thunkCreateAddress, thunkGetAllAddresses } from "../../store/address";
import './CreateAddress.css'

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
        <div className='auth-form-ctn'>
            <div>
                <h2>
                    Create Address
                </h2>
            </div>
            <div className='required-ctn'>
                <span className='red-star-span'>*</span>Required
            </div>
            <form onSubmit={handleSubmit} className='auth-form'>
                <div className='error-list-ctn'>
                    {errors.map((error, ind) => (
                        <div key={ind}>{error}</div>
                    ))}
                </div>
                <div className='form-label-ctn'>
                    <label>
                        <h5>Street<span className='red-star-span'>*</span></h5>
                    </label>
                </div>
                <div>
                    <input value={street} type='text' onChange={updateStreet}/>
                </div>
                <div className='form-label-ctn'>
                    <label>
                        <h5>City<span className='red-star-span'>*</span></h5>
                    </label>
                </div>
                <div>
                    <input value={city} type='text' onChange={updateCity}/>
                </div>
                <div className='form-label-ctn'>
                    <label>
                        <h5>State<span className='red-star-span'>*</span></h5>
                    </label>
                </div>
                <div >
                    <select value={state} onChange={updateState} className="address-state-selected-box">
                        <option value="" style={{"cursor":"pointer"}}>-- Please select a state --</option>
                        {states.map(ele => (
                            <option value={ele} key={ele} style={{"cursor":"pointer"}}>{ele}</option>
                        ))}
                    </select>
                </div>
                <div className='form-label-ctn'>
                    <label>
                        <h5>Zip Code<span className='red-star-span'>*</span></h5>
                    </label>
                </div>
                <div>
                    <input value={zipCode} type='text' onChange={updateZipCode} />
                </div>
                <div id="set-primary-ctn">
                    <small>Set as primary</small>
                    <input value={primary} type="checkbox" onChange={updatePrimary} id='primary-address-checkbox'></input>
                </div>
                <div>
                    <button type="submit">Create Address</button>
                </div>
            </form>
        </div>
    )
}
