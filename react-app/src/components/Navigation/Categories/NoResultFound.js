import ContinueShopping from "../../Buttons/ContinueShopping";
import "./NoResultFound.css"

export default function NoResultFound() {
    return (
        <div id="no-result-outer">
            <div>
                No item found.
            </div>
            <ContinueShopping />
        </div>
    )
}
