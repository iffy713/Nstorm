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
    // console.log("!!!!",products)
    const [ loaded, setLoaded ] = useState( false )

    useEffect(async()=>{
        dispatch(thunkCategoryProducts(categoryId))
        .then(setLoaded(true))
    },[dispatch])

    if( !loaded || !productsArr ) return (
        <Spinner />
    )

    return (
        <div>
            { productsArr.length? (<div className="all-products-outer">
                {/* <h1>{productsArr.length} items found</h1> */}
                <div className="all-products-container">
                    { productsArr.map( product => (
                        <div key={product.id}>
                            <SingleProductCard product={product}/>
                        </div>
                    ) ) }
                </div>
            </div>) : (<div>
                <NoResultFound />
            </div>)}
        </div>
    )
}
