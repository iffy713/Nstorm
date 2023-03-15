import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { thunkSearchProducts } from '../../../store/product'
import './index.css'

export default function SearchBar() {

    const dispatch = useDispatch()
    const [ keyword, setKeyword ] = useState("")
    const searchResults = useSelector(state => state.product.filtedProducts)
    // console.log("search results here",searchResults)
    const searchResultsArr = searchResults ? Object.values(searchResults) : []

    console.log("search results array here", searchResultsArr)

    // const handleSearch = (e) => {
    //     e.preventDefault()
    //     dispatch(thunkSearchProducts(keyword))
    // }

    useEffect(()=>{
        dispatch(thunkSearchProducts(keyword))
    }, [dispatch, keyword])

    return (
        <div id='search-bar-outer'>
            <form
                // onSubmit={handleSearch}
                id='keyword-search-form'
            >
                <input id='search-bar-hidden-input'/>
                <div id='search-bar-ctn'>
                    <div id='search-icon-ctn'>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <input id='keyword-input'
                        value={keyword}
                        onChange={(e)=> setKeyword(e.target.value)}
                        maxLength='80'
                        placeholder="Search for products or brands" />
                    <button id='search-bar-hidden-btn'/>
                </div>
            </form>
            { searchResultsArr.length >0  && (
                <div>
                    {searchResultsArr.map(product => (
                        <div key={product.id}>
                            { product.name }
                        </div>
                    ))}
                </div>
            ) }
        </div>
    )
}
