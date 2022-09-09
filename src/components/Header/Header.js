import { Link } from 'react-router-dom';

import LogoImg from '../../assets/logo.svg';
import Menu from './Menu/Menu';

const Header = () => {
    return (
        <header className="">
            <div className="flex justify-between m-8">
                <Link to='/'>
                    <img src={LogoImg} alt="Design logo" />
                </Link>

                <nav className="header-nav xs:flex hidden">
                    <ul className="header-nav-list flex space-x-5">
                        <li className="nav-link nav-link-black"><Link to="/">HOME</Link></li>
                        <li className="nav-link nav-link-black"><Link to="/">PORTFOLIO</Link></li>
                        <li className="nav-link nav-link-black"><Link to="/">CONTACT ME</Link></li>
                    </ul>
                </nav>

                <Menu />
            </div>
        </header>
    );
}

export default Header;