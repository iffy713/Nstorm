import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { thunkCategoryProducts } from "../../../store/category"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import Spinner from "../../Spinner/Spinner"
import SingleProductCard from "../../Products/SingleProductCard"
import NoResultFound from "./NoResultFound"

export default function CategoryDetails() {

    const { categoryId } = useParams()
    const dispatch = useDispatch()
    const products = useSelector(state => state.category.allProducts)
    const productsArr = products? Object.values(products) : []
    console.log("!!!!!!!!!!!",productsArr)
    const [ loaded, setLoaded ] = useState( false )

    useEffect(()=>{
        dispatch(thunkCategoryProducts(categoryId))
        .then(setLoaded(true))
    },[dispatch, categoryId])

    if( !loaded ) return (
        <Spinner />
    )

    if ( productsArr.length === 0 && loaded ) {
        return <NoResultFound />
    }

    return (
        <div>
            <div className="all-products-outer container-fluid">
                {/* <h1>{productsArr.length} items found</h1> */}
                <div className="all-products-container row">
                    { productsArr.map( product => (
                        <div key={product.id} className='col-lg-3 col-md-4 col-sm-6'>
                            <SingleProductCard product={product}/>
                        </div>
                    ) ) }
                </div>
            </div>
            {/* { productsArr.length == 0 && <NoResultFound /> } */}
        </div>
    )
}
