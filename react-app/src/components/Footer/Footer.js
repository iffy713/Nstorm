import './Footer.css'

export default function Footer() {

    return (
        <footer id="footer-outer-ctn">
            <div id='footer-inner-ctn'>
                <div>
                    <h4>
                        Copyright &copy; 2023 nstorm
                    </h4>
                </div>
                <div>
                    <h4>
                        Developed by Yifan Xin
                    </h4>
                </div>
                <div id='contact-icon-ctn'>
                    <a href={'https://github.com/iffy713/Nstorm'} target="_blank">
                        <i className="fa-brands fa-square-github"></i>
                    </a>
                    <a href='https://www.linkedin.com/in/yifan-xin/' target='_blank'>
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}
