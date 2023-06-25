import React from 'react'
import "./Navbar.css";
import Logo from "./Logo";
import Button from './Button';
import Search from './Search';

const Navbar = () => {
  return (
    <nav className="navbar">
        <Logo />
        <Search />
        <Button children="Give Feedback" />
    </nav>
  )
}

export default Navbar;
