import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { thunkSearchProducts } from '../../../store/product'
import { NavLink } from 'react-router-dom'
import './index.css'
import SingleSearchResult from './SingleSearchResult'

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
            { searchResultsArr.length >0  && keyword && (
                <div id='all-search-results-outer'>
                    {searchResultsArr.map(product => (
                        <div key={product.id}
                            id='single-search-result-outer'
                        >
                            <NavLink to={`/products/${product.id}`}
                                id='search-result-navlink'
                            >
                                <SingleSearchResult
                                    key={product.id}
                                    product={product}
                                />
                            </NavLink>
                        </div>
                    ))}
                </div>
            ) }
        </div>
    )
}
