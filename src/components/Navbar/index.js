import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import '../Navbar/Navbar.css';
import Logo from '../../images/urbanShop.svg';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = { clicked: false }
    render() {
        return(
            <nav className="NavbarItems">
                <h1 className = "navbar-logo">
                    <img src={Logo}
                        alt="logo" />
                        <Link to="/"></Link>
                    </h1>
                <div className="menu-icon" onClick={this.handleClick}>
                </div>
                <ul className='nav-menu'>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                           </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}
export default Navbar;