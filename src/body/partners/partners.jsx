import React from 'react';
import Partner from './partner/partner';
import './partners.css';

const Partners = () => {

	let partnerData = [
		{name:'partner-1.png'},
		{name:'partner-2.png'},
		{name:'partner-3.png'},
		{name:'partner-4.png'},
		{name:'partner-5.png'},
	];

	let partnerList = partnerData.map(partner => <Partner name={partner.name}/>);

	return (
		<div className='partners'>
			<div className='container'>
				<div className='slider-partners'>
					{ partnerList }
				</div>
			</div>
		</div>
	)
}

export default Partners;