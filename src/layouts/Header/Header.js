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
                    <ul className="flex space-x-10 text-xs">
                        <li className="text-homeFontColor"><Link to="/">HOME</Link></li>
                        <li><Link to="/portfolio">PORTFOLIO</Link></li>
                        <li><Link to="/contact">CONTACT ME</Link></li>
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