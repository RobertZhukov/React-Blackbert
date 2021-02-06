import React from 'react';
import './category_slider.scss';
import CategorySliderBody from './category_slider_body/category_slider_body';
import CategorySliderHeader from './category_slider_header/category_slider_header';

const CategorySlider = () => {
	return (
		<div className='category-slider'>
			<div className='container'>
				<CategorySliderHeader />
				<CategorySliderBody />
			</div>
		</div>		
	)
}

export default CategorySlider;