import React from 'react';
import './header.scss';
import HeaderCenterPanel from './header_center_panel/header_center_panel';
import HeaderLeftPanel from './header_left_panel/header_left_panel';
import HeaderRightPanel from './header_right_panel/header_right_panel';

const Header = () => {
  return (
    <header className='header'>
		<HeaderLeftPanel />
		<HeaderCenterPanel />
		<HeaderRightPanel />
    </header>
  );
};

export default Header;
