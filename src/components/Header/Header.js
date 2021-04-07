import React from 'react';
import logo from './image/Barcelona-logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className = "main">
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
                <div className="container">
                    <h5 className="navbar-brand"> <img src={logo} className="img-fluid" alt=""/>  FC BARCELONA</h5>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                        <p className="nav-link active" href="#">Home</p>
                        </li>
                        <li className="nav-item">
                        <p className="nav-link" href="#">Latest</p>
                        </li>
                        <li className="nav-item">
                        <p className="nav-link" href="#">Schedule</p>
                        </li>
                        <li className="nav-item">
                        <p className="nav-link" href="#">Results</p>
                        </li>
                        <li className="nav-item">
                        <p className="nav-link">Features</p>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
        </div>
    );
};

export default Header;