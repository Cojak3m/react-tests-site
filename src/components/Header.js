import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='ui menu'>
            <div className='header item'>
                <Link to='/' className='item'>
                    <i className='home icon' />
                </Link>
            </div>
            <Link to='/gallery' className='item'>
                Gallery
            </Link>
            <Link to='/videos' className='item'>
                Videos
            </Link>
            <Link to='/forms' className='item'>
                Forms
            </Link>
        </div>
    );
}

export default Header;