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
                    <h4 style={{'color':'rgb(57, 57, 57'}}>
                        Hi<span style={{'textTransform': "capitalize"}}>, {sessionUser.first_name}</span>
                    </h4>
                </button>
            {showMenu && (<LoginInDropDown />)}
            </div>
        </>
    )
}
