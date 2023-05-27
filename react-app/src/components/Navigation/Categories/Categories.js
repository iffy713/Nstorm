
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

import "./Categories.css"

export default function Categories({categoriesArr}) {

    return (
        <div className="category-outer">
            <ul className="category-list-ctn">
                {categoriesArr.map(category => (
                    <li key={category.id} className="nav-item category-name-border">
                        <NavLink to={`/category/${category.id}`} className="category-name">
                            {category.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}
