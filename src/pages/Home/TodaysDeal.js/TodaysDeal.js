import React from "react";
import dealImg from '../../../images/deal-img.jpg'

const TodaysDeal = () => {
  return (
    <div>
      <section className="deal">
        <div className="content">
          <h3>deal of the day</h3>
          <h1>upto 50% off</h1>
          <p>
          Check out some of the great books that have just arrived or our best sellers.
Lots of fantastic BARGAINS below, many for under $10.00.
          </p>
          <a href="www" className="btn">
            shop now
          </a>
        </div>

        <div className="image">
          <img src={dealImg} alt="" />
        </div>
      </section>
    </div>
  );
};

export default TodaysDeal;
