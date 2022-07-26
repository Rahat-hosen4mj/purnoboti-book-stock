import React from "react";
import book1 from "../../../images/book-1.png";
import book2 from "../../../images/book-2.png";
import book3 from "../../../images/book-3.png";
import book4 from "../../../images/book-4.png";
import book5 from "../../../images/book-5.png";
import book6 from "../../../images/book-6.png";

const NewArrival = () => {
  return (
    <div>
      <section className="arrivals" id="arrivals">
       <h1 className="text-center py-4">new Arrival</h1>

        <div className="swiper arrivals-slider">
          <div className="row w-full ">
            <div className="col col-md-2 col-lg-3">
              <a href="www" className="swiper-slide box">
                <div className="image">
                  <img src={book1} alt="" />
                </div>
                <div>
                  <h3>The Art City</h3>
                  <div className="price">
                    $15.99 <br />  <span>$20.99</span>
                  </div>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </a>
            </div>
            <div className="col col-md-2 col-lg-3">
              <a href="www" className="swiper-slide box">
                <div className="image">
                  <img src={book2} alt="" />
                </div>
                <div >
                  <h3>Thanks of Thanking</h3>
                  <div className="price">
                    $15.99 <br /> <span>$20.99</span>
                  </div>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </a>
            </div>
            <div className="col col-md-2 col-lg-3">
              <a href="www" className="swiper-slide box">
                <div className="image">
                  <img src={book3} alt="" />
                </div>
                <div >
                  <h3>Your Name</h3>
                  <div className="price">
                    $15.99 <br /> <span>$20.99</span>
                  </div>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </a>
            </div>
            <div className="col col-md-2 col-lg-3">
              <a href="www" className="swiper-slide box">
                <div className="image">
                  <img src={book4} alt="" />
                </div>
                <div >
                  <h3>Your Goals here</h3>
                  <div className="price">
                    $15.99 <br /> <span>$20.99</span>
                  </div>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </a>
            </div>
            <div className="col col-md-2 col-lg-3">
              <a href="www" className="swiper-slide box">
                <div className="image">
                  <img src={book6} alt="" />
                </div>
                <div >
                  <h3>Sample Test</h3>
                  <div className="price">
                    $15.99 <br /> <span>$20.99</span>
                  </div>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </a>
            </div>
            <div className="col col-md-2 col-lg-3">
              <a href="www" className="swiper-slide box">
                <div className="image">
                  <img src={book5} alt="" />
                </div>
                <div >
                  <h3>Music Rocks</h3>
                  <div className="price">
                    $15.99  <br /> <span>$20.99</span>
                  </div>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </a>
            </div>
            <div className="col col-md-2 col-lg-3">
              <a href="www" className="swiper-slide box">
                <div className="image">
                  <img src={book2} alt="" />
                </div>
                <div >
                  <h3>new arrivals</h3>
                  <div className="price">
                    $15.99 <br /> <span>$20.99</span>
                  </div>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </a>
            </div>
            <div className="col col-md-2 col-lg-3">
              <a href="www" className="swiper-slide box">
                <div className="image">
                  <img src={book1} alt="" />
                </div>
                <div >
                  <h3>The Art City</h3>
                  <div className="price">
                    $15.99 <br /> <span>$20.99</span>
                  </div>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewArrival;
