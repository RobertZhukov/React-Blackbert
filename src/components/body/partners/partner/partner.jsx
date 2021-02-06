import React from 'react';
import './partner.scss';

const Partner = (props) => {
	return (
		<div className='partner'>
			<img src={require(`../../../../img/body/partners/${props.name}`)} alt='partner'></img>
		</div>
	)
}

export default Partner;