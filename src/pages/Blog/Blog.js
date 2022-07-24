import React from "react";
import blog1 from "../../images/blog-1.jpg";
import blog2 from "../../images/blog-2.jpg";
import blog3 from "../../images/blog-3.jpg";

const Blog = () => {
  return (
    <section>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-100">
            <img src={blog1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
           
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={blog2} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
            
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={blog3} class="card-img-top" alt="..." />
            <div class="card-body">
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
