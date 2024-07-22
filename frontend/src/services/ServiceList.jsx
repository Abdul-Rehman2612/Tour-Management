import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas magnam accusamus odio qui reprehenderit sapiente consectetur doloribus quo nemo nulla eos delectus dolore consequuntur, dolorem vel corporis voluptatem ipsam eveniet?",
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas magnam accusamus odio qui reprehenderit sapiente consectetur doloribus quo nemo nulla eos delectus dolore consequuntur, dolorem vel corporis voluptatem ipsam eveniet?",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas magnam accusamus odio qui reprehenderit sapiente consectetur doloribus quo nemo nulla eos delectus dolore consequuntur, dolorem vel corporis voluptatem ipsam eveniet?",
  },
];

const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
