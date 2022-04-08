import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import "../css/Nav.css";

function Nav() {
    // let navigate = useNavigate();

    // function handleClick() {
    //     navigate('/');
    // }

    return (
        <div className="navigation">
            <Link to="/" className="name">
                <span>🐶 Vicky Chou</span>
            </Link>
            <Outlet/>
        </div>
    )
}

export default Nav;