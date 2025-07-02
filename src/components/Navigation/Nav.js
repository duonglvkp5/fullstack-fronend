import React from 'react';
import './Nav.scss';
import { NavLink, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect, useState } from 'react';
const Nav = (props) => {
    const [isShow, setIsShow] = useState(false);
    let location = useLocation();
    useEffect(() => {
        if (location.pathname === '/login') {
            setIsShow(true)
        }
    }, []);
    return (
        <>
            {isShow === false &&
                <div className="topnav">
                    <NavLink to="/" exact>Home</NavLink>
                    <NavLink to="/users">users</NavLink>
                    <NavLink to="/projects">projects</NavLink>
                    <NavLink to="/about">About</NavLink>
                </div>
            }
        </>
    );
}

export default Nav;