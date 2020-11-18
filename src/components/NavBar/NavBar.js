import React from 'react';
import { MdHome, MdPersonOutline, MdAnnouncement } from 'react-icons/md';
import { Nav, Link } from './styles';

const fontSize = '32px';

export const NavBar = () => {
  return (
    <Nav>
      <Link to="/">
        <MdHome size={fontSize} />
      </Link>
      <Link to="/profile">
        <MdPersonOutline size={fontSize} />
      </Link>
      <Link to="/instructions">
        <MdAnnouncement size={fontSize} />
      </Link>
    </Nav>
  )
}