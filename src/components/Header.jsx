import '../css/Header.styles.css'

const Header = () => {
    return (
        <nav>
            <div className="links-container">
                <ul id="menu">
                    <li data-menuanchor="logon-hint" id="logo-hint"><a href="https://pump.fun/" target="_blank" rel="noopener noreferrer">Pump.Fun</a></li>
                    <li data-menuanchor="twitter" className='social'>
                        <a href="https://x.com/nuketerminal" className="social-image-container">
                            <img src="/assets/images/socials/twitter-icon-white.png" alt="Twitter image" />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
      )
}

export default Header;
