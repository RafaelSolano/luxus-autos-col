import React from "react";
import IndividualIntervalsExample from "../../components/Slider";
import { CardProduct } from "../../components/CardCars";
import './styles.css';

export const HomePage = () => {
  return (
    <div>
      <IndividualIntervalsExample />
      <div className=" container container__cars">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
    </div>
  );
};
