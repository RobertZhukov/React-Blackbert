import React from 'react';
import './body.scss';
import CategoryBanner from './category_banner/category_banner';
import CategorySlider from './category_slider/category_slider';
import Partners from './partners/partners';
import ServiceBlock from './service_block/service_block';
import SliderBanner from './slider_banner/slider_banner';

const Body = () => {
	return (
		<div className='body'>
			<SliderBanner />
			<CategoryBanner />
			<ServiceBlock />
			<CategorySlider />		
			<Partners />
		</div>
	)
}

export default Body;