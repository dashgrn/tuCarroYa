import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Nav.css';

export const Navbar = () => {
    return (
        <div className="bg-dark">
            <div className="header">
                <nav>
                <Link className="text-light" to="/">Inicio</Link>
                <Link className="text-light" to="/Registro">Registra</Link>
                <Link className="text-light" to="/Todos">Todos</Link>
                </nav>
            </div>
            <hr/>
        </div>
    )
}
