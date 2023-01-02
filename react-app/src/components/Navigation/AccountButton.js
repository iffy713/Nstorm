import { useEffect, useState } from 'react'
import LogOutDropDown from "./Drop-down-menus/LogOutDropDown";
import './AccountButton.css'

export default function AccoutButton() {

    const [ showMenu, setShowMenu ] = useState(false)
    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true)
    }
    useEffect(()=> {
        if (!showMenu) return;
        const closeMenu = () => {
            setShowMenu(false)
        }
        document.addEventListener('click', closeMenu)
        return () => document.removeEventListener('click', closeMenu)
    }, [showMenu])

    return (
        <>
            <div id='nav-account-ctn'>
                <button id="nav-account-button" onClick={openMenu}>
                    Account
                </button>
            {showMenu && (<LogOutDropDown />)}
            </div>
        </>
    )
}
