import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetAllAddresses } from '../store/address';

export default function Addresses() {

    const dispatch = useDispatch()
    const allUserAddressObj = useSelector(state => state.addresses.Addresses)
    const allUserAddressArr = Object.values(allUserAddressObj)
    console.log("222222",allUserAddressArr)

    useEffect(()=> {
        dispatch(thunkGetAllAddresses(allUserAddressArr))
    },[dispatch])

    if(!allUserAddressArr.length) return null

    return (
        <div>
            {allUserAddressArr.map(address => (
                <div>
                    {address}
                </div>
            ) )}
        </div>
    )
}
