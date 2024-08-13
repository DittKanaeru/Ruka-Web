import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { logo } from '../../../assets';
import { Toggle } from '../../index';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="container mx-auto md:flex justify-between py-2 max-width">
      <div className="flex justify-between items-center py-2">
        <NavLink to="/">
          <img className="w-12" src={logo} alt="logo" />
        </NavLink>
        <div onClick={toggler} className="cursor-pointer">
          <svg
            className="stroke-dark-heading dark:stroke-white md:hidden"
            width="25"
            height="20"
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625H1.4375ZM1.4375 6.3125H14.5625H1.4375Z"
              strokeWidth="1.875"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <nav
        className={`${
          !isOpen ? 'hidden' : null
        } text-center md:flex justify-between`}
      >
        <ul className="text-dark-content dark:text-light-content font-medium md:flex items-center md:space-x-5 md:mr-10">
          <li className="pb-1 md:pb-0">
            <NavLink to="/" onClick={toggler}>
              Home
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink to="/about" onClick={toggler}>
              About
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink to="/projects" onClick={toggler}>
              Features
            </NavLink>
          </li>
          {/* Added "Dixy Universe" text */}
          <li className="pb-1 md:pb-0">
            <span className="font-bold text-white">Dixy Project</span>
          </li>
        </ul>
        <ul className="flex justify-evenly items-center my-5 md:my-0 md:space-x-5 md:mr-5">
          <Toggle />
        </ul>
      </nav>
    </header>
  );
};
