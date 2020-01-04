import React from 'react';

import './header.css';

const Header = ({onServiceChange}) => {
    return (
        <div className="header d-flex">
            <h3>
                <a href="#1">
                    Star DB
                </a>
            </h3>
            <ul className="d-flex">
                <li>
                    <a href="#2">People</a>
                </li>
                <li>
                    <a href="#3">Planets</a>
                </li>
                <li>
                    <a href="#4">Starships</a>
                </li>
            </ul>
            <button
                onClick={onServiceChange}
                className="btn btn-primary btn-sm">
                Change Service
            </button>
        </div>
    );
};

export default Header;