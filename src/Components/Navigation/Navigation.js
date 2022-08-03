import Logo from '../../Assets/images/logo.svg'
import '../../Assets/css/navigation.css'

export default function Navigation() {
    return(
        <section className="row" id="navigation-bar">
            <div className="col-12 col-sm-2 col-md-2 col-lg-2 logo-box">
                <a href='/'>
                    <div className='wrapper-logo'>
                        <img src={ Logo } alt='logo-here' />
                        <span>Block Movies</span>
                    </div>
                </a>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 left-box">
                <ul className='menu-nav-box'>
                    <li className='menu'><a href="/">Home</a></li>
                    <li className='menu'><a href="/">Movies</a></li>
                    <li className='menu'><a href="/">Celebrities</a></li>
                    <li className='menu'><a href="/">News</a></li>
                    <li className='menu'><a href="/">Community</a></li>
                </ul>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-4 right-box">
                <ul className='menu-nav-box'>
                    <li className='menu'><a href="/">Pages</a></li>
                    <li className='menu'><a href="/">Help</a></li>
                    <li className='menu'><a href="/login">Log In</a></li>
                    <li className='menu'><a href="/register">Sign Up</a></li>
                </ul>
            </div>
        </section>
    )
}