import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { thunkCategoryProducts } from "../../../store/category"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import Spinner from "../../Spinner/Spinner"
import SingleProductCard from "../../Products/SingleProductCard"

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
        <div className="row justify-content-start">
            <h1>{productsArr.length} items found</h1>
            { productsArr.map( product => (
                <div key={product.id} className="col-lg-3 col-md-4 col-sm-6">
                    <SingleProductCard product={product}/>
                </div>
            ) ) }
        </div>
    )
}
