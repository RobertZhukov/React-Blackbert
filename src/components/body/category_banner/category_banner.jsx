import React from 'react';
import './category_banner.scss';

const CategoryBanner = () => {
	return (
		<div className='category-banner'>
			<ul>
				<li className='col-lg-3 col-md-3 col-sm-3 col-xs-12'>
					<img src={require('../../../img/body/category-banner_1.jpg')} alt='banner'></img>
				</li>
				<li className='col-lg-3 col-md-3 col-sm-3 col-xs-12'>
					<img src={require('../../../img/body/category-banner_2.jpg')} alt='banner'></img>
				</li>
				<li className='col-lg-3 col-md-3 col-sm-3 col-xs-12'>
					<img src={require('../../../img/body/category-banner_3.jpg')} alt='banner'></img>
				</li>
				<li className='col-lg-3 col-md-3 col-sm-3 col-xs-12'>
					<img src={require('../../../img/body/category-banner_4.jpg')} alt='banner'></img>
				</li>
			</ul>
		</div>
	)
}

export default CategoryBanner;