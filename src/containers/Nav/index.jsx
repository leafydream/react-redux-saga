import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            {' '}
            <Link to="/counter">Counter</Link> 
            {' '}
            <Link to="/author">Author</Link> 
            {' '}
            <Link to="/test">Test</Link> 
        </div>
    )
}

export default Header;
