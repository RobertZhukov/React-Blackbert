import React from 'react';
import BurgerMenu from './burger_menu/burger_menu';
import './header_left_panel.scss';

const HeaderLeftPanel = () => {
  return (
	<div className='left-panel'>
		<BurgerMenu />
	</div>
  );
};

export default HeaderLeftPanel;
