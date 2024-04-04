import React from 'react';
import '../styles/navbar.css';
const Navbar = () => {
    return (
        <div className='navbar'>
           <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/about'>AboutUs</a></li>
            <li><a href='/courses'>Courses</a></li>
            <li><a href='/login'>Login</a></li>
            <li><a href='/register'>Signup</a></li>
            </ul> 
        </div>
    );
};

export default Navbar;