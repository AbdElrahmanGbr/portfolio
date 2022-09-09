import { useState } from 'react';
import { Link } from 'react-router-dom';

import HamburgerMenu from '../../../assets/icons/hamburger.svg';
import CloseMenu from '../../../assets/icons/close.svg';

const Menu = () => {
    const [menu, setMenu] = useState(false);

    const openMenu = () => {
        setMenu((prevMenu) => !prevMenu);
    }
    return (
        <div className="header-menu" onClick={openMenu}>
            { !menu && <img className="xs:hidden sm:hidden block header-hamburger" src={HamburgerMenu} alt="Open the menu" /> }
            { menu &&
                <div className="grid">
                    <img className="place-self-end" src={CloseMenu} alt="Close the Menu" />
                    <div className="bg-[#33323D] text-[#FFFFFF] w-48 h-56 grid place-content-center">
                        <nav>
                            <ul className="text-center justify-items-center space-y-5">
                                <li className=""><Link to="/">HOME</Link></li>
                                <li className="nav-link"><Link to="/">PORTFOLIO</Link></li>
                                <li className="nav-link"><Link to="/">CONTACT ME</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            }
        </div>
    );
}

export default Menu;