import React from 'react';
import './Header.css';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpIcon from '@material-ui/icons/Help';
import { useStateValue } from '../StateProvider';

function Header() {
  const [{ user }] = useStateValue();
  return (
    <div className='header'>
      <div className='headerLeft'>
        <Avatar
          className='headerAvatar'
          alt={user?.displayName}
          src={user?.photoURL}
        />
        <AccessTimeIcon />
      </div>
      <div className='headerSearch'>
        <SearchIcon />
        <input placeholder='search for whatever' />
      </div>
      <div className='headerRight'>
        <HelpIcon />
      </div>
    </div>
  );
}

export default Header;
