import React, { useState  } from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const navMenuItems = ['Home', 'Introduction', 'Sholai School', 'Articles', 'Join Us', 'SUNBIRD Natural Products', 'Media Gallery', 'Contact Us']

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo'>
                        Sholai <i className='fab fa-typo3' />
                    </Link>
                    <div className='menu-icon' onClick = {handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        {navMenuItems.map(item => {
                            return (
                            <li className='nav-item'>       
                                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                    {item}
                                </Link>
                            </li>
                            )
                        })}
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
