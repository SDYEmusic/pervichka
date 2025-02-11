import './header.css'
import reactLogo from '../assets/logo.png'

function Header() {
    return (
        <>
            <header id="#header" className="header">
                <nav className="navbar">
                    <ul className="navbar__list">
                        <div className="navbar__item">
                            <li className="nav-item">
                                <a className="logo" href=""><img className='logo-img' src={reactLogo} alt="" /></a>
                            </li>
                        </div>
                        <div className="navbar__item">
                            <li className="nav-item"><a className="item" href="">Информация</a></li>
                            <li className="nav-item"><a className="item" href="">Главная</a></li>
                            <li className="nav-item"><a className="item" href="">Контакты</a></li>
                        </div>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Header