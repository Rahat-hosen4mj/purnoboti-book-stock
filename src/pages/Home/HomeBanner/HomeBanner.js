import React from "react";
import book1 from "../../../images/book-1.png";
import book2 from "../../../images/book-2.png";

const HomeBanner = () => {
  return (
    <div>
      <section className="home" id="home">
        <div className="row">
          <div className="content">
            <h4 className="fs-3">
            Welcome to our site, it's full of beautiful books!
</h4>
            <p>
            Here you will find beautiful picture books, great fiction and information books on all topics to inspire young readers from babies to teenagers. There's even a few for the adults! We sell to all book lovers including the general public, schools and childcare centres
            </p>
            <a href="www" className="btn">
             More info
            </a>
          </div>

          <div className="swiper books-slider">
            <div className="swiper-wrapper">
              <a href="www" className="swiper-slide">
                <img src={book1} alt="" />
              </a>
              <a href="www" className="swiper-slide">
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
