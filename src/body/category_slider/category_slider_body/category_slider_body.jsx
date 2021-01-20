import React from 'react';
import './category_slider_body.css';
import CategorySliderProduct from './category_slider_product/category_slider_product';

const CategorySliderBody = () => {

	let sliderProductData = [
		{
			path:'gifts.jpg', 
			title:'Gifts in New Year', 
			price:'$830.00'
		},
		{
			path:'cup.jpg', 
			title:'Hameleon cup', 
			price:'$750.00'
		},
		{
			path:'reward.jpg', 
			title:'Football reward', 
			price:'$1,999.00'
		},
		{
			path:'glass.jpg', 
			title:'Glass for water', 
			price:'$150.00'
		},
		{
			path:'statuetka.jpg', 
			title:'Souvenir statuetka', 
			price:'$650.00'
		},
		{
			path:'swing.jpg', 
			title:'Baby swing', 
			price:'$1,200.00'
		},
		{
			path:'hammock-1.jpg', 
			title:'Hammock Black & Red', 
			price:'$1,350.00'
		},
		{
			path:'hammock-2.jpg', 
			title:'Hammock Grafit', 
			price:'$2,580.00'
		},
		{
			path:'hammock-3.jpg', 
			title:'Hammock Pink', 
			price:'$1,490.00'
		},
		{
			path:'hammock-4.jpg', 
			title:'Hammock Gold', 
			price:'$1,900.00'
		},
	];

	let sliderProductList = sliderProductData.map(product => {
		return (
			<CategorySliderProduct 
				path={product.path} 
				title={product.title} 
				price={product.price}
			/>
		)}
	);

	return (
		<div className='category-slider-body'>
			{ sliderProductList }
		</div>
	)
}

export default CategorySliderBody;