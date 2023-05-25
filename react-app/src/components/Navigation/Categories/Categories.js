
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./Categories.css"

export default function Categories({categoriesArr}) {

    // const dispatch = useDispatch()
    // const categoriesObj = useSelector(state => state.product.categories)
    // const categoriesArr = categoriesObj? Object.values(categoriesObj) : []
    // // console.log(categoriesArr)

    // useEffect(() =>{
    //     dispatch(thunkGetCategories())
    // }, [ dispatch ])

    return (
        <div className="category-outer">
            <ul className="category-list-ctn">
                {categoriesArr.map(category => (
                    <li key={category.id} className="nav-item">
                        {/* <NavLink > */}
                            {category.name}
                        {/* </NavLink> */}
                    </li>
                ))}
            </ul>
        </div>
    )
}
