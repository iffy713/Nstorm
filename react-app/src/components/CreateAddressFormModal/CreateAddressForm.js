import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkCreateAddress } from "../../store/address";

export default function CreateAddressForm(){

    const dispatch = useDispatch()
    const [ line1, setLine1 ] = useState("")
    const [ line2, setLine2 ] = useState("")
    const [ unitNumber, setNumber ] = useState("")
    const [ city, setCity ] = useState("")
    const [ state, setState ] = useState("")
    const [ zipCode, setZipCode ] = useState("")


    const handleSubmit = async e => {
        e.preventDefault()

        
        await dispatch(thunkCreateAddress())
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input placeholder="Address Line 1"/>
                </div>
                <div>
                    <input placeholder="Address Line 2"/>
                </div>
                <div>
                    <input placeholder="Unit Number"/>
                </div>
                <div>
                    <input placeholder="City" />
                </div>
                <div>
                    <input placeholder="State" />
                </div>
                <div>
                    <input placeholder="Zip Code" />
                </div>
                <div>
                    <button type="submit">Create Address</button>
                </div>
            </form>
        </div>
    )
}
