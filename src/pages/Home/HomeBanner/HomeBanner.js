import React from "react";
import book1 from "../../../images/book-1.png";
import book2 from "../../../images/book-2.png";

const HomeBanner = () => {
  return (
    <div>
      <section className="home" id="home">
        <div className="row">
          <div className="content">
            <h3>upto 75% off</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              deserunt nostrum accusamus. Nam alias sit necessitatibus, aliquid
              ex minima at!
            </p>
            <a href="#" className="btn">
              shop now
            </a>
          </div>

          <div className="swiper books-slider">
            <div className="swiper-wrapper">
              <a href="#" className="swiper-slide">
                <img src={book1} alt="" />
              </a>
              <a href="#" className="swiper-slide">
                <img src={book2} alt="" />
              </a>
            </div>
            <img src="image/stand.png" className="stand" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeBanner;
