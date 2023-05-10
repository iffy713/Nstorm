import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { thunkCategoryProducts } from "../../../store/product"

export default function categories() {

    const dispatch = useDispatch()
    const categoriesObj = useSelector(state => state.product.allProducts)
    const categoriesArr = categoriesObj ? Object.values(categoriesObj) : []

    useEffect(() => {
        dispatch(thunkCategoryProducts())
    },[dispatch])

    return (
        <>
            <h1>
                categories
            </h1>
        </>
    )
}
