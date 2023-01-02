import { useEffect, useState } from 'react'
import LoginInDropDown from './Drop-down-menus/LogInDropDown';
import './UserButton.css'

export default function UserButton({sessionUser}) {


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
            <div id='nav-user-ctn'>
                <button id="nav-user-button" onClick={openMenu}>
                    Hi, {sessionUser.first_name}
                </button>
            {showMenu && (<LoginInDropDown />)}
            </div>
        </>
    )
}
