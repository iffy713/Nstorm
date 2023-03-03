import './index.css'
export default function SearchBar() {

    return (
        <div>
            <form>
                <div id='search-bar-ctn'>
                    <div id='search-icon-ctn'>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <input placeholder="Search for products or brands" />
                </div>
            </form>
        </div>
    )
}
