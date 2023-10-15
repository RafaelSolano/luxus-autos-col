import React from "react";
import "./styles.css";
import { Facebook, Whatsapp, Instagram } from "react-bootstrap-icons";

function FooterLuxus() {
  return (
    <div className="footer__container">
      <section className="">
        <img className="footer__logo" src="https://res.cloudinary.com/djsupmnmo/image/upload/v1697311901/luxusAutosInventario/Logos_Luxus_Autos_PNG_q4s2uq.png" alt="logo luxus Autos" />
      </section>
      <section className="">
        <h2>Contactanos</h2>
        <ul>
          <li>3138990861</li>
          <li>3204590520</li>
          <li>3204590520</li>


          

        </ul>
      </section>
      <section className="">
        <h2>Logo</h2>
      </section>
      <section className="footer__social_networks">
        <h2>Siguenos</h2>
        <div className="social_networks__container">
          <a href="#">
            <Facebook color="white" size={48} />
            <span className=" social_networks__label">Facebook </span>
          </a>
          <a href="#">
            <Instagram color="white" size={48} />
            <span className=" social_networks__label" >Instagram </span>

            
          </a>
          <a href="#">
            <Whatsapp color="white" size={48} />
            <span className=" social_networks__label" >Whatsapp </span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default FooterLuxus;
