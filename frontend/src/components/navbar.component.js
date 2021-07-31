import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {

    render(){
        return(
       
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark topbar mb-6 static-top shadow">
                <Link to="/" className="navbar-brand">Subscribers</Link>
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">Users </Link>
                    </li>
                <li className="nav-item">
                        <Link to="/create" className="nav-link">Create User</Link>
                </li>
                {/* <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                </li> */}
                </ul>
            </nav>

        );
    }
}