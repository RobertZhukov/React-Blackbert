import React from 'react';
import './service_item.css';

const ServiceItem = (props) => {

	return (
		<div className={`${props.uniqClass} service-item`}>
			<div className="service-img">
				<img src={require(`../../../img/body/service/${props.path}`)} alt='banner'></img>
			</div>
			<div className="service-detail">
				<h3 className="service-title">{props.serviceName}</h3> 
				<span className="service-desc">{props.serviceDesc}</span> 
			</div>
		</div>
	)
}

export default ServiceItem;