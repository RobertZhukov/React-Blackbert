import React from 'react';
import Header from '../header/header'
import Body from '../body/body'
import Footer from '../footer/footer'
import Menu from '../menu/menu'
import './app.scss';

const App = () => {
	return (
		<div className='application'>
			<Header />
			<Menu />
			<Body />
			<Footer />
		</div>
	)
}

export default App;