import React from 'react';

import './footer.scss';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer-info'>
				<div className='social-networks'>
					<i className="fab fa-twitter"></i>
					<i className="fab fa-instagram"></i>
					<i className="fab fa-facebook-f"></i>
					<i className="fab fa-google-plus-g"></i>
				</div>
				<div className='footer-menu'>
					<div className='footer-menu-item'>Brands</div>
					<div className='footer-menu-item'>Gift Sertifiates</div>
					<div className='footer-menu-item'>Affiliates</div>
					<div className='footer-menu-item'>Site Map</div>
					<div className='footer-menu-item'>My Account</div>
				</div>
				<div className='ways-payment'>
					<div className='ways-payment-item'>
						<img src={require('../../img/footer/payment-1.jpg')} alt='banner'></img>
					</div>
					<div className='ways-payment-item'>
						<img src={require('../../img/footer/payment-2.jpg')} alt='banner'></img>
					</div>
					<div className='ways-payment-item'>
						<img src={require('../../img/footer/payment-3.jpg')} alt='banner'></img>
					</div>
					<div className='ways-payment-item'>
						<img src={require('../../img/footer/payment-4.jpg')} alt='banner'></img>
					</div>
					<div className='ways-payment-item'>
						<img src={require('../../img/footer/payment-5.jpg')} alt='banner'></img>
					</div>
				</div>
			</div>
			<div className='footer-subscribe'>
				<div className='footer-subscribe-email'>
					<div>
						<h3>SUBSCRIBE US</h3>
					</div>
					<div>
						<p>Get Our Latest News And Special Sales</p>
					</div>
					<div>
						<input type="email" name="txtemail" id="txtemail" placeholder="Enter Your e-mail" />
						<i className="fab fa-telegram-plane"></i>
					</div>
				</div>
				<div className='blackbert'>
					<p> BlackBert Start In © 2020. </p>
				</div>
			</div>
		</div>
	)
}

export default Footer;