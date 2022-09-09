import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

export default function Header() {
  return (
    <header>
      <Navbar>
        <Link to="/" className="navbar-brand">
          
        </Link>
      </Navbar>
    </header>
  );
}
