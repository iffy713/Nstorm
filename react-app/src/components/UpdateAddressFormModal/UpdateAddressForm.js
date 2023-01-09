import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetAllAddresses, thunkUpdateAddress } from "../../store/address";

export default function UpdateAddressForm({ addressId, street, city, state, zipCode, primary, setShowModal}){
// export default function UpdateAddressForm({ address, setShowModal}){

    // console.log("addressId here",addressId)
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
        const newAddress = {
            "street": editstreet,
            "city": editcity,
            "state": editstate,
            "zip_code": editzipCode,
            "is_primary": editprimary
        }

        console.log("this is updated address",newAddress)
        const data = await dispatch(thunkUpdateAddress(addressId, newAddress))
        if (data) {
            setErrors(data)
        } else {
            setShowModal(false)
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
        <div className='auth-form-ctn'>
           <div>
                <h2>
                    Edit Address
                </h2>
            </div>
            <div className='required-ctn'>
                <span className='red-star-span'>*</span>Required
            </div>
            <form onSubmit={handleSubmit} className='auth-form'>
                <div className='error-list-ctn'>
                    {errors.map(error => (
                        <div key={error}>{error}</div>
                    ))}
                </div>
                <div className='form-label-ctn'>
                    <label>
                        <h5>Street<span className='red-star-span'>*</span></h5>
                    </label>
                </div>
                <div>
                    <input value={editstreet} type='text' onChange={updateStreet}/>
                </div>
                <div className='form-label-ctn'>
                    <label>
                        <h5>City<span className='red-star-span'>*</span></h5>
                    </label>
                </div>
                <div>
                    <input value={editcity} type='text' onChange={updateCity}/>
                </div>
                <div className='form-label-ctn'>
                    <label>
                        <h5>State<span className='red-star-span'>*</span></h5>
                    </label>
                </div>
                <div>
                    <select value={editstate} onChange={updateState} className="address-state-selected-box">
                        <option value="">-- Please select a state --</option>
                        {states.map(ele => (
                            <option value={ele} key={ele}>{ele}</option>
                        ))}
                    </select>
                </div>
                <div className='form-label-ctn'>
                    <label>
                        <h5>Zip Code<span className='red-star-span'>*</span></h5>
                    </label>
                </div>
                <div>
                    <input value={editzipCode} type='text' onChange={updateZipCode} placeholder="Zip Code" />
                </div>
                {/* <div id="edit-primary-ctn">
                    <small>Set as primary</small>
                    <input value={editprimary} type="checkbox" onChange={updatePrimary} id='edit-primary-address-checkbox'></input>
                </div> */}
                <div className="form-label-ctn">
                    <button type="submit">Update Address</button>
                </div>
            </form>
        </div>
    )
}
