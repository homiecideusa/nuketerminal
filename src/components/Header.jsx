import '../css/Header.styles.css'

const Header = () => {
    return (
        <nav>
            <div className="links-container">
                <ul id="menu">
                    <li data-menuanchor="logon-hint" id="logo-hint"><a href="https://pump.fun/coin/7MTsnvGFEVUCqY1K2aQhCeXCQ7ijymQG24WbrLopump" target="_blank" rel="noopener noreferrer">Buy Now</a></li>
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
