import './Spinner.css'

export default function Spinner() {

    return (
        <div className='spinner-ctn'>
            {/* <div class="lds-roller"></div> */}
            <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}
