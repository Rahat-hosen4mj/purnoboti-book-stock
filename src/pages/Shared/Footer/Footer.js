import React from "react";
import "./Footer.css";
import worldMap from '../../../images/worldmap.png'

const Footer = () => {
  return (
    <div>
      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>our locations</h3>
            <a href="www">
              {" "}
              <i className="fas fa-map-marker-alt"></i> india{" "}
            </a>
            <a href="www">
              {" "}
              <i className="fas fa-map-marker-alt"></i> USA{" "}
            </a>
            <a href="www">
              {" "}
              <i className="fas fa-map-marker-alt"></i> russia{" "}
            </a>
            <a href="www">
              {" "}
              <i className="fas fa-map-marker-alt"></i> france{" "}
            </a>
            <a href="www">
              {" "}
              <i className="fas fa-map-marker-alt"></i> japan{" "}
            </a>
            <a href="www">
              {" "}
              <i className="fas fa-map-marker-alt"></i> africa{" "}
            </a>
          </div>

          <div className="box">
            <h3>quick links</h3>
            <a href="www">
              {" "}
              <i className="fas fa-arrow-right"></i> home{" "}
            </a>
            <a href="www">
              {" "}
              <i className="fas fa-arrow-right"></i> featured{" "}
            </a>
            <a href="www">
              {" "}
              <i className="fas fa-arrow-right"></i> arrivals{" "}
            </a>
            <a href="www">
              {" "}
              <i className="fas fa-arrow-right"></i> reviews{" "}
            </a>
            <a href="www">
              {" "}
              <i className="fas fa-arrow-right"></i> blogs{" "}
            </a>
          </div>

          <div className="box">
            <h3>extra links</h3>
            <a href="www">
              {" "}
              <i className="fas fa-arrow-right"></i> account info{" "}
            </a>
            <a href="www">
              {" "}
              <i className="fas fa-arrow-right"></i> ordered items{" "}
            </a>
            <a href="www">
              {" "}
              <i className="fas fa-arrow-right"></i> privacy policy{" "}
            </a>
            <a href="www">
              {" "}
              <i className="fas fa-arrow-right"></i> payment method{" "}
            </a>
            <a href="www">
              {" "}
              <i className="fas fa-arrow-right"></i> our serivces{" "}
            </a>
          </div>

          <div className="box">
            <h3>contact info</h3>
            <a href="www">
              {" "}
              <i className="fas fa-phone"></i> +123-456-7890{" "}
            </a>
            <a href="www">
              {" "}
              <i className="fas fa-phone"></i> +111-222-3333{" "}
            </a>
            <a href="www">
              {" "}
              <i className="fas fa-envelope"></i> shaikhanas@gmail.com{" "}
            </a>
           
          </div>
        </div>

        <div className="credit">
          {" "}
          created by <span>@mr. Rahat hosen</span> | all rights reserved!{" "}
        </div>
      </section>
    </div>
  );
};

export default Footer;
