import React from "react";
import book1 from "../../../images/book-1.png";
import book2 from "../../../images/book-2.png";

const HomeBanner = () => {
  return (
    <div>
      <section class="home" id="home">
        <div class="row">
          <div class="content">
            <h3>upto 75% off</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              deserunt nostrum accusamus. Nam alias sit necessitatibus, aliquid
              ex minima at!
            </p>
            <a href="#" class="btn">
              shop now
            </a>
          </div>

          <div class="swiper books-slider">
            <div class="swiper-wrapper">
              <a href="#" class="swiper-slide">
                <img src={book1} alt="" />
              </a>
              <a href="#" class="swiper-slide">
                <img src={book2} alt="" />
              </a>
            </div>
            <img src="image/stand.png" class="stand" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeBanner;
