import React from 'react';
import './header_right_panel.scss';

const HeaderRightPanel = () => {
  return (
	<div className='right-panel'>
		<div className='search'><i className="fas fa-search"></i></div>
		<div className='profile'><i className="far fa-user"></i></div>
		<div className='basket'><i className="fas fa-gift"></i></div>
	</div>
  );
};

export default HeaderRightPanel;
