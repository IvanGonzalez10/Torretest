import React from 'react';
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md';
import { Nav, Link } from './styles';

const fontSize = '32px';

export const NavBar = () => {
  return (
    <Nav>
      <Link to="/">
        <MdHome size={fontSize} />
      </Link>
      <Link to="/profile">
        <MdFavoriteBorder size={fontSize} />
      </Link>
      <Link to="/facts">
        <MdPersonOutline size={fontSize} />
      </Link>
    </Nav>
  )
}