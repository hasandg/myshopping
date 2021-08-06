import React from 'react';
import './Header.css';

function Header(props) {
    return (
        <div className='header'>
            <img className="header__logo" src="my_shopping.png"/>
            <div className="header__search">
                <div className="header__searchInput"></div>
                {/* LOGO */}
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Hello Guest
                    </span>
                    <span className="header__optionLineTwo">
                        Sign in
                    </span>
                </div>
                <div className="header__option"></div>
                <div className="header__option"></div>
            </div>
        </div>
    );
}

export default Header;