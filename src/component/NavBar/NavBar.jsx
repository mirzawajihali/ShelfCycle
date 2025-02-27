import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className='w-full py-3 border-b'>
        <div className='flex justify-between px-20 items-center font-semibold'>
          <div>
            <h1 className="text-2xl">LOGO</h1>
          </div>
          <div className='flex xl:gap-10 md:gap-8 gap-2'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/about">About</NavLink>
          
          </div>
          <div>
            <button className='py-2 px-6 bg-black text-white rounded-3xl font-semibold'>
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
    
  );
};

export default Navbar;