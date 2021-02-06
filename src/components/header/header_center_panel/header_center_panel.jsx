import React from 'react';
import './header_center_panel.scss';

const HeaderCenterPanel = () => {
  return (
	<div className='center-panel'>
		<div className='logo'>
			<img src={require('../../../img/logo2.png')} alt='logo'/>
		</div>
	</div>
  );
};

export default HeaderCenterPanel;
