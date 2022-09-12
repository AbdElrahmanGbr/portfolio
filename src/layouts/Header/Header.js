import { Link } from 'react-router-dom';

import LogoImg from '../../assets/logo.svg';
import Menu from './Menu/Menu';

const Header = () => {
    return (
        <header>
            <div className="flex justify-between my-8">
                <Link to='/'>
                    <img src={LogoImg} alt="Design logo" />
                </Link>
                <nav className="tablet:flex flex hidden self-center">
                    <ul className="header-nav-list flex space-x-5">
                        <li className="nav-link nav-link-black"><Link to="/">HOME</Link></li>
                        <li className="nav-link nav-link-black"><Link to="/portfolio">PORTFOLIO</Link></li>
                        <li className="nav-link nav-link-black"><Link to="/">CONTACT ME</Link></li>
                    </ul>
                </nav>
                <div className="absolute top-8 right-8">
                    <Menu />
                </div>
            </div>
        </header>

);
}

export default Header;