import React from "react";
import "./service_block.css";
import ServiceItem from "./service_item/service_item";

const ServiceBlock = () => {
  let serviceData = [
    {
      uniqClass: "free-shipping",
      path: "service-1.svg",
      serviceName: "Free Shipping",
      serviceDesc: "Free & Fast",
    },
    {
      uniqClass: "need-help",
      path: "service-2.svg",
      serviceName: "need help",
      serviceDesc: "24/7 Support Now",
    },
    {
      uniqClass: "guarantee",
      path: "service-3.svg",
      serviceName: "Guarantee",
      serviceDesc: "Money Back",
    },
    {
      uniqClass: "easy-returns",
      path: "service-4.svg",
      serviceName: "Easy Returns",
      serviceDesc: "Item Per Month",
    },
  ];

  let serviceList = serviceData.map((item) => {
    return (
      <ServiceItem
        uniqClass={item.uniqClass}
        path={item.path}
        serviceName={item.serviceName}
        serviceDesc={item.serviceDesc}
      />
    );
  });

  return (
    <div className="service-block">
      <div className="container">
        <div className="service">{serviceList}</div>
      </div>
    </div>
  );
};

export default ServiceBlock;
