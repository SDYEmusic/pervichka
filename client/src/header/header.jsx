import './header.css'
import reactLogo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import App from '../App'

function Header() {
    return (
        <>
            <header id="#header" className="header">
                <nav className="navbar">
                    <ul className="navbar__list">
                        <div className="navbar__item">
                            <li className="nav-item">
                            <Link className="logo" to="/"><img className='logo-img' src={reactLogo} alt="" /></Link>
                            </li>
                        </div>
                        <div className="navbar__item">
                            {/* <li className="nav-item"><a className="item" href="/info">Информация</a></li>
                            <li className="nav-item"><a className="item" href="/">Главная</a></li> */}
                            {/* <li className="nav-item"><a className="item" href="/contact">Контакты</a></li> */}
                            <li className="nav-item"><Link className="item" to="/info">Информация</Link></li>
                            <li className="nav-item"><Link className="item" to="/">Главная</Link></li>
                            <li className="nav-item"><Link className="item" to="/contact">Контакты</Link></li>
                        </div>
                    </ul>
                </nav>
            </header>
            
        </>
    )
}
export default Header