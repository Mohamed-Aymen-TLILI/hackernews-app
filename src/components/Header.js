import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <h1>HACKERNEWS.</h1>
        <div>
            <Link to="/newstories">
                New
            </Link>
            <Link to="/topstories">
                Past
            </Link>
        </div>
        </>
    )
}

export default Header;
