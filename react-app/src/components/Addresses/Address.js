import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetAllAddresses } from '../../store/address';
import { NavLink } from "react-router-dom"


export default function Addresses() {

    const dispatch = useDispatch()
    const allUserAddressObj = useSelector(state => state.addresses)
    const allUserAddressArr = Object.values(allUserAddressObj)


    useEffect(()=> {
        dispatch(thunkGetAllAddresses())
    },[dispatch])

    if(!allUserAddressArr.length) return null

    return (
        <div>
            address component
            <button>Add New Address</button>
            {allUserAddressArr.map(address => (
                <div key={address.id}>
                    {address.address_line1}{address.address_line2}
                    {address.city}
                </div>
            ))}
        </div>
    )
}
