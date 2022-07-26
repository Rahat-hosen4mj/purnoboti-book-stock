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
           
            <div className="card-body">
              <h5 className="card-title fs-3"> Difference between javascript and nodejs</h5>
              <p className="card-text fs-5">
              JavaScript is a high-level programming language that makes our web pages and web applications dynamic and interactive by giving them the ability to think and act. JavaScript is a lightweight (easy to learn syntax) and object-oriented programming language whereas Node.js is a runtime environment built on google v8 engine and typically used to represent a list of objects and functions that JavaScript programs can access.
              </p>
            </div>
           
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
           
            <div className="card-body">
              <h5 className="card-title fs-3">Differences between sql and nosql databases</h5>
              <p className="card-text fs-5">
              SQL databases are relational, NoSQL databases are non-relational. SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
              </p>
            </div>
           
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
           
            <div className="card-body">
              <h5 className="card-title fs-3">What is the purpose of jwt and how does it work</h5>
              <p className="card-text fs-5">
              A JWT is a mechanism to verify the owner of some JSON data. It's an encoded, URL-safe string that can contain an unlimited amount of data (unlike a cookie) and is cryptographically signed.
              JWT is created with a secret key and that secret key is private to you which means you will never reveal that to the public or inject inside the JWT token. When you receive a JWT from the client, you can verify that JWT with this that secret key stored on the server..
              </p>
            </div>
           
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={blog1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Blog title</h5>
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
              <h5 className="card-title">Blog title</h5>
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
              <h5 >Blog title</h5>
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
