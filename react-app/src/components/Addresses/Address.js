import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkDeleteAddress, thunkGetAllAddresses } from '../../store/address';
import CreateAddressFormModal from '../CreateAddressFormModal';
import UpdateAddressFormModal from '../UpdateAddressFormModal';


export default function Addresses() {

    const dispatch = useDispatch()
    const allUserAddressObj = useSelector(state => state.addresses)
    // console.log("==============", allUserAddressObj)
    const [ loaded, setLoaded ] = useState(false)

    useEffect(async ()=> {
        dispatch(thunkGetAllAddresses())
            .then(()=>setLoaded(true))
    },[dispatch])

    if(!allUserAddressObj) return null
    const allUserAddressArr = Object.values(allUserAddressObj)
    // console.log("array is here",allUserAddressArr)

    return (
        loaded && (
            <div>
                address component
                <CreateAddressFormModal />
                {allUserAddressArr.map(address => (
                    <div key={address.Address.id}>
                        {address.Address.street}
                        {address.Address.city}
                        {address.Address.state}
                        {address.Address.zip_code}
                        {address.is_primary && (
                            <div>primary address</div>
                        )}
                        <div>
                            <UpdateAddressFormModal
                                addressId={address.id}
                                street={address.street}
                                city={address.city}
                                state={address.state}
                                zipCode={address.zip_code}
                                primary={address.is_primary}
                                address={address}
                            />
                        </div>
                        <div>
                            <button onClick={()=> dispatch(thunkDeleteAddress(address.id))}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
        )
    )
}
