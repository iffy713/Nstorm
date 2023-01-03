import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkDeleteAddress, thunkGetAllAddresses } from '../../store/address';
import CreateAddressFormModal from '../CreateAddressFormModal';
import UpdateAddressFormModal from '../UpdateAddressFormModal';
import './Address.css'
import EmptyAddress from './EmptyAddress';


export default function Addresses() {

    const dispatch = useDispatch()
    const allUserAddressObj = useSelector(state => state.addresses)
    const [ loaded, setLoaded ] = useState(false)

    useEffect(()=> {
        dispatch(thunkGetAllAddresses())
            .then(()=>setLoaded(true))
    },[dispatch])

    if(!allUserAddressObj) return null
    const allUserAddressArr = Object.values(allUserAddressObj)

    return (
        loaded && (
            <div>
                <div>
                    <h4>Shipping Addresses</h4>
                </div>
                <CreateAddressFormModal />
                { allUserAddressArr.length === 0?(
                        <div><EmptyAddress /></div>
                    ): (
                        <div id="address-cards-ctn">
                            {allUserAddressArr.map(address => {
                                if(!address) return null
                                return (
                                    <div key={address.id} id="single-address-card">
                                        <div>
                                            {address.street}
                                        </div>
                                        <div>
                                            {address.city}, {address.state}, {address.zip_code}
                                        </div>
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
                                            <button className='address-edit-delete-btn' onClick={()=> dispatch(thunkDeleteAddress(address.id))}>Remove</button>
                                        </div>
                                </div>
                                )
                            })}
                        </div>
                    )
                }
            </div>
        )
    )
}
