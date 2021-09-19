import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import logo from "../images/logo.png"

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <img src={logo} alt="logo"/>
            <a className="navbar-brand" href="#"><span>T</span>he <span>E</span>ntrepreneurship <span>N</span>etwork</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ms-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Online Courses</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">We're Hiring</a>
                </li>

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    More
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="#">Blog</a>
                        <a className="dropdown-item" href="#">Certification</a>
                        <a className="dropdown-item" href="#">Alumini Team</a>
                        <a className="dropdown-item" href="#">Forum</a>
                        <a className="dropdown-item" href="#">Member Registration</a>
                        <a className="dropdown-item" href="#">Campus Ambassador Program</a>
                        <a className="dropdown-item" href="#">Mentorship</a>
                        <a className="dropdown-item" href="#">Social Media</a>
                        <a className="dropdown-item" href="#">Testimonials</a>
                        <a className="dropdown-item" href="#">Complaints</a>

            
                    </div>
                </li>

                <li>
                <div className="container-fluid search-container">
                
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
                </li>
                
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;