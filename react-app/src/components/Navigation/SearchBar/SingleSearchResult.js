import './SingleSearchResult.css'


export default function SingleSearchResult({product}) {

    return (
        <div id='single-search-result-ctn'>
            <div>
                <img id='search-result-preview-img' src={product.preview_image}/>
            </div>
            <div>
                {product.name}
            </div>
        </div>
    )
}
