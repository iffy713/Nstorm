import UserOrders from '../Orders/UserOrders';
import UserReviews from '../Reviews/UserReviews';
import './MyAccount.css'
import { useState } from 'react';
import { sidebarData } from './SidebarData';
import Addresses from '../Addresses/Address';
import { useSelector } from 'react-redux';

export default function MyAccount() {

    const [ selected, setSelected ] = useState("order")
    const user = useSelector(state => state.session.user)

    return (
        <div id='my-account-container'>
            <div id="sidebar-ctn">
                {/* <div id='sidebar-header' className='sidebar-row-child'>{user.first_name}'s Account</div> */}
                <ul>
                    {sidebarData.map((ele, key)=> (
                        <li key={key} id="sidebar-li">
                            <div onClick={()=>setSelected(ele.selected)}
                                className={selected === ele.selected?"selected-sidebar-row":"sidebar-row"}
                                >

                                    <div className='sidebar-row-child'>
                                        {ele.icon}
                                    </div>
                                    <div className='sidebar-row-child'>
                                        <div className="sidebar-row-title">
                                            {ele.title}
                                        </div>
                                        <div className='sidebar-row-about'>
                                            {ele.about}
                                        </div>
                                    </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div id='content-ctn'>
                <div id="account-main-content">
                    { selected === "order" && <UserOrders /> }
                    { selected === "address" && <Addresses /> }
                    { selected === "review" && <UserReviews /> }
                </div>
            </div>
        </div>
    )
}
