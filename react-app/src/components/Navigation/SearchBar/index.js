import { useState } from 'react'
import './index.css'

export default function SearchBar() {

    const [ keyword, setKeyword ] = useState("")

    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            handleSearch()
        }
    }

    const handleSearch = (e) => {
        e.preventDefault()

        console.log(keyword)
    }

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input id='search-bar-hidden-input'/>
                <div id='search-bar-ctn'>
                    <div id='search-icon-ctn'>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <input id='key-word-input'
                        value={keyword}
                        onChange={(e)=> setKeyword(e.target.value)}
                        maxLength='80'
                        onKeyPress={handleKeyPress}
                        placeholder="Search for products or brands" />
                </div>
            </form>
        </div>
    )
}
