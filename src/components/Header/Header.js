import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import "./Header.css"

const Header = () => {
    return (
        <nav className='header'>
            <CustomLink className="header-text" to="/home">HOME</CustomLink>
            <CustomLink className="header-text" to="/reviews">REVIEWS</CustomLink>
            <CustomLink className="header-text" to="/dashboard">DASHBOARD</CustomLink>
            <CustomLink className="header-text" to="/blogs">BLOGS</CustomLink>
            <CustomLink className="header-text" to="/about">ABOUT</CustomLink>
        </nav>

    );
};

export default Header;