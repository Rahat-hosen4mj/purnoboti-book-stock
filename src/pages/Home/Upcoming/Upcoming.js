import React from "react";
import book from '../../../images/book7.png'

const Upcoming = () => {
  return (
    <section class="deal">
        
        <div class="image">
          <img className="w-50" src={book} alt="" />
        </div>
        <div class="content">
          <h3>Upcoming product</h3>
          <h1>upto 50% off</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
            perspiciatis in atque dolore tempora quaerat at fuga dolorum natus
            velit.
          </p>
          
        </div>

      </section>
  );
};

export default Upcoming;
