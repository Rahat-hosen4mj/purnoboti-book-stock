import React from "react";
import blog1 from "../../images/blog-1.jpg";
import blog2 from "../../images/blog-2.jpg";
import blog3 from "../../images/blog-3.jpg";

const Blog = () => {
  return (
    <section>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <img src={blog1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
           
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={blog2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
            
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={blog3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 >Card title</h5>
              <p>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
