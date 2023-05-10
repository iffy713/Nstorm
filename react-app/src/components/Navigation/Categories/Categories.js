import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { thunkGetCategories } from "../../../store/product"


export default function Categories() {

    const dispatch = useDispatch()
    const categoriesObj = useSelector(state => state.product.categories)
    const categoriesArr = categoriesObj? Object.values(categoriesObj) : []
    console.log(categoriesArr)

    useEffect(() =>{
        dispatch(thunkGetCategories())
    }, [ dispatch ])

    return (
        <>
            <ul>
                {categoriesArr.map(category => (
                    <li>
                        {category.name}
                    </li>
                ))}
            </ul>
        </>
    )
}
