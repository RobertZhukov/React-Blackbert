import React from 'react';
import ReactDom from 'react-dom';
import App from './app/app';
import './index.css';

ReactDom.render(<App />, document.getElementById('root'));

document.querySelector('.fa-bars').addEventListener('click', function(){
	document.querySelector('.burger').style.display = 'none';
	document.querySelector('.cross').style.display = 'block';
	document.querySelector('.menu').classList.add('showMenu')
})

document.querySelector('.fa-times').addEventListener('click', function(){
	document.querySelector('.burger').style.display = 'block';
	document.querySelector('.cross').style.display = 'none';
	document.querySelector('.menu').classList.remove('showMenu')
})



