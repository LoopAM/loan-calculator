import React from 'react';
import { NavLink } from 'react-router-dom'

import './Header.css';

export default function Header() {
  return (
    <header className="header-wrapper">
      <NavLink className="header-link" to='/'>
        <h1 className="logo">Logo</h1>
      </NavLink>
      <div className="header-links-wrapper">
        <NavLink
          activeClassName="active-link"
          className="header-link"
          exact
          to='/'>
            Calculator
        </NavLink>
        <NavLink
          activeClassName="active-link"
          className="header-link"
          exact
          to='/loans'>
            Loans
        </NavLink>
      </div>
    </header>
  );
}
