import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <div className='py-1'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" to="/">Lender</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <div className="navbar-nav">
                                        <NavLink className="nav-link active" to="/">Home</NavLink>
                                        <NavLink className="nav-link" to="/">Features</NavLink>
                                        <NavLink className="nav-link" to="/">Pricing</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex justify-content-end me-2 text-decoration-none'>
                                <NavLink to='/login'>Login</NavLink>
                                <span>&nbsp;|&nbsp;</span>
                                <NavLink to='/signup'>SignUp</NavLink>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>            
        </div>
    );
}

export default Header;