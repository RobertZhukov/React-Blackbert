import React from 'react';
import './category_slider_product.scss';

const CategorySliderProduct = (props) => {
	return (
		<div className='slider-item'>
			<div className='slider-img'>
				<img src={require(`../../../../../img/body/products/${props.path}`)} alt='banner'></img>
			</div>
			<div className='slider-title'>
				<span>{props.title}</span>
			</div>
			<div className='slider-price'>
				<span>{props.price}</span>
			</div>
		</div>
	)
}

export default CategorySliderProduct;