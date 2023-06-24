import { Icon } from "Icons";
import React from "react";
import { NavLink } from 'react-router-dom';  // NavLink import edildi

const Menu = () => {
  return (
    <nav>
      <ul className="flex flex-col">
        <li>
          <NavLink exact to="/" activeClassName="text-white bg-active" className="h-10 flex gap-x-4 items-center text-sm font-semibold rounded hover:text-white px-4">
            <span>
              <Icon name='home' />
            </span>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/search" activeClassName="text-white bg-active" className="h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4">
            <span>
              <Icon name='search' />
            </span>
            Search
          </NavLink>
        </li>
        <li>
          <NavLink to="/library" activeClassName="text-white bg-active" className="h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4">
            <span>
              <Icon name='library' />
            </span>
            Your Library
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
