import React from 'react';
import {Link} from "react-router-dom"
import "./style.scss";
export default function Navigation() {
    return (
    <header className="head">
        <nav className="nav-header content">
            <Link className="title" to={"/"} >
                League Of Legends
            </Link>
        </nav>
    </header>
    )
}
