import React from "react";
import book from '../../../images/book7.png'

const Upcoming = () => {
  return (
    <section className="deal">
        
        <div className="image">
          <img className="w-50" src={book} alt="" />
        </div>
        <div className="content">
          <h3>Upcoming product</h3>
          <h1>Pig The Star (Sp. Edition)</h1>
          <p>
            
Pig just LOVES attention.

In fact, hes a great, bit SHOW-OFF.

But when ANOTHER star appears at the photo shoot, Pig doesn't like it.

No, Pig doesn't like it at ALL…
          </p>
          
        </div>

      </section>
  );
};

export default Upcoming;
