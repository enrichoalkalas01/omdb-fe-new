import CinemaBanner from '../../Assets/images/cinema-banner.jpeg'
import Logo from '../../Assets/images/logo.svg'
import '../../Assets/css/footer.css'

export default function Footer() {
    return(
        <section className="row" id="footer" style={{ backgroundImage: `url('${ CinemaBanner }')`}}>
            <div className='col-12 wrapper-box-footer'>
                <div className='row wrapper-footer'>
                    <div className="col-12 col-sm-6 col-md-3 box-menu-footer">
                        <a href='/'>
                            <div className='wrapper-logo'>
                                <img src={ Logo } alt='logo-here' />
                                <span>Block Movies</span>
                            </div>
                        </a>
                        <div className='address-box'>
                            <span>Jl. Sukabakti V No.28, RT.002/RW.014, Sukasari, Kec. Tangerang, Kota Tangerang, Banten 15118</span>
                        </div>
                        <div className='telephone-box'>
                            <span>Call Us : <span className='phone'>021-240-420</span></span>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 box-menu-footer">
                        <h5>Resources</h5>
                        <ul>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Contact Us</a></li>
                            <li><a href="/">Forums</a></li>
                            <li><a href="/">Blog</a></li>
                            <li><a href="/">Help Center</a></li>
                            <li><a href="/">Terms Of Service</a></li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 box-menu-footer">
                        <h5>Account</h5>
                        <ul>
                            <li><a href="/">My Account</a></li>
                            <li><a href="/">Watchlist</a></li>
                            <li><a href="/">Collections</a></li>
                            <li><a href="/">User Guide</a></li>
                            <li><a href="/">Security</a></li>
                            <li><a href="/">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 box-menu-footer">
                        <h5>News Letter</h5>
                    </div>
                </div>
            </div>
        </section>
    )
}