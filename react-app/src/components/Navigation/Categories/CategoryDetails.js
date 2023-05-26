import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { thunkCategoryProducts } from "../../../store/category"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"

export default function CategoryDetails() {

    const { categoryId } = useParams()
    console.log(categoryId)
    const dispatch = useDispatch()
    const products = useSelector(state => state.category.singleCategory)

    useEffect(()=>{
        dispatch(thunkCategoryProducts(categoryId))
    },[dispatch])

    return (
        <div>
            <h1>CategoryDetails</h1>
        </div>
    )
}
