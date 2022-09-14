import { useState } from 'react';
import { Link } from 'react-router-dom';

import HamburgerMenu from '../../../assets/icons/hamburger.svg';
import CloseMenu from '../../../assets/icons/close.svg';

const Menu = () => {
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        setShowMenu((prevMenu) => !prevMenu);
    }
    return (
        <div onClick={openMenu}>
            { !showMenu && <img className="tablet:hidden block header-hamburger" src={HamburgerMenu} alt="Open the menu" /> }
            { showMenu &&
                <div className="grid tablet:hidden">
                    <img className="place-self-end" src={CloseMenu} alt="Close the Menu" />
                    <div className="bg-blue-magenta text-white w-48 h-56 grid place-content-center z-50">
                        <nav>
                            <ul className="text-center justify-items-center space-y-5 text-xs">
                                <li><Link to="/">HOME</Link></li>
                                <li><Link to="/">PORTFOLIO</Link></li>
                                <li><Link to="/">CONTACT ME</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            }
        </div>
    );
}

export default Menu;