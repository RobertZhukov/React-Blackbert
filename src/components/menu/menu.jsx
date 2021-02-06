import React from "react";

import "./menu.scss";

const Menu = () => {
  return (
    <nav className="menu">
		<div className='nav-flex'>
		<ul>
        <li>
          <a className='menu-kids' href="#">Детские</a>
			<ul>
				<li><a href="#">0 - 6 лет</a></li>
				<li><a href="#">6 - 14 лет</a></li>
				<li><a href="#">14 - 18 лет</a></li>
			</ul>
        </li>
        <li>
			<a className='menu-teenage' href="#">Подростковые</a>
			<ul>
				<li><a href="#">Парням</a></li>
				<li><a href="#">Девушкам</a></li>
				<li><a href="#">Трансфиститам</a></li>
				<li><a href="#">Парням</a></li>
				<li><a href="#">Девушкам</a></li>
				<li><a href="#">Трансфиститам</a></li>
				<li><a href="#">Парням</a></li>
			</ul>
        </li>
        <li>
          <a className='menu-woman' href="#">
            Женщине
          </a>
        </li>
        <li>
          <a className='menu-man' href="#">
            Мужчине
          </a>
        </li>
        <li>
          <a className='menu-parents' href="#">
            Родителям
          </a>
        </li>
        <li>
          <a className='menu-wedding' href="#">
            На Свадьбу
          </a>
        </li>
        <li>
          <a className='menu-8march' href="#">
            8 марта
          </a>
        </li>
        <li>
          <a className='menu-23february' href="#">
            23 февраля
          </a>
        </li>
        <li>
          <a className='menu-new-year' href="#">
            Новый год
          </a>
        </li>
      </ul>
		</div>
    </nav>
  );
};

export default Menu;
