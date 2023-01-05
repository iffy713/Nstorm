import './GiftOptions.css'

export default function GiftOptions() {
    return (
        <div id="go-ctn">
            <div id="go-title">
                <i class="fa-solid fa-gift"></i>
                <span>
                    Gift Options
                </span>
            </div>
            <div>
                Choose your gift options at Checkout. Some items may not be eligible for all gift options.
            </div>
            <div id='go-options-ctn'>
                <ul id='go-options-ul'>
                    <li>
                        <i class="fa-solid fa-gift"></i>
                        Nstorm gift box
                    </li>
                    <li>
                        <i class="fa-solid fa-gifts"></i>
                        Signature gift wrap
                    </li>
                    <li>
                        <i class="fa-solid fa-envelope"></i>
                        Email gift message
                    </li>
                    <li>
                        <i className="fa-solid fa-box-open"></i>
                        DIY Nstorm gift box
                    </li>
                </ul>
            </div>
        </div>
    )
}
