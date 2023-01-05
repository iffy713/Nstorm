import "./DetailsAndCare.css"

export default function DetailsAndCare( { singleProduct } ){

    return (
        <div id="dc-ctn">
            <div className='dc-title'>
                Details & Care
            </div>
            <div>
                {singleProduct.about}
            </div>
            { singleProduct.brand_story === singleProduct.brand?(<div></div>):(
                <div>
                    <div className='dc-title'>{singleProduct.brand}</div>
                    <div>{singleProduct.brand_story}</div>
                </div>
            ) }
        </div>
    )
}
