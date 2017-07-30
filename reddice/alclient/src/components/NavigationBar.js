import React from 'react';
import { Link } from 'react-router-dom';
export default () => {
    return (
            <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link to="/" className="navbar-brand">Red Dice</Link>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <Link to="/signup" className="nav-link">Sign up</Link>
                        </li>
                    </ul>
                </div>
            </nav>
    );
}