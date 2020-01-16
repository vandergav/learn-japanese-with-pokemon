import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { Link } from 'react-router-dom';

export default function NavBar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h1>Pokémon</h1>
            <div className="click-me">
                <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                    className="btn btn-warning btn-lg"
                >
                    PokéNav
                </Button>
                <Collapse in={open}>
                    <div id="example-collapse-text">
                        <div>
                            <ul className="navbar-nav ml-auto">
                                <Link to='/normal'>
                                    <li className="nav-item">
                                        <a className="navbar-item" href="">Normal</a>
                                    </li>
                                </Link>
                                <li className="nav-item">
                                    <a className="navbar-item" href="">Option 2</a>
                                </li>
                                <li className="nav-item">
                                    <a className="navbar-item" href="">Option 3</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Collapse>
            </div>
        </nav>
    )
}
