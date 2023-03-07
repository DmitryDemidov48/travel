import React, {useState} from 'react';
import './navbar-module.css';
import {MdOutlineTravelExplore} from "react-icons/md";
import {AiFillCloseCircle} from "react-icons/ai";
import{TbGridDots} from "react-icons/tb"

export const Navbar = () => {
    const [active, setActive] = useState('navBar')

    const showNav = () => {
        setActive('navBar activeNavbar' )
    }

    const removeNavbar = () => {
        setActive('navBar' )
    }
    return (
        <section className='navBarSection'>
            <header className='header flex'>
                <div className="logoDiv">
                    <a href="" className="logo">
                        <h1><MdOutlineTravelExplore className='icon'/>Travel</h1>
                    </a>
                </div>
                <div className={active}>
                    <ul className='navList flex'>
                        <li className='navItem'>
                            <a href="#" className="navLink">Home</a>
                        </li>
                        <li className='navItem'>
                            <a href="#" className="navLink">Packages</a>
                        </li>
                        <li className='navItem'>
                            <a href="#" className="navLink">Shop</a>
                        </li>
                        <li className='navItem'>
                            <a href="#" className="navLink">About</a>
                        </li>
                        <li className='navItem'>
                            <a href="#" className="navLink">Pages</a>
                        </li>
                        <button className="btn">
                            <a href="#">Book Now</a>
                        </button>
                    </ul>
                    <div onClick={removeNavbar} className="closeNavbar">
                        <AiFillCloseCircle className="icon"/>
                    </div>
                </div>
                <div onClick={showNav} className="toggleNavbar">
                    <TbGridDots className="icon"/>
                </div>
            </header>
        </section>
    );
};

