import React from "react";
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
  const { name, img, description, _id, supplier, price, quantity } = service;
  const navigate = useNavigate()
  const navigateToUpdatePage = id =>{
    navigate(`/inventory/${id}`)
  }
  return (
    <>
      <div className="gx-3 col-sm-12 col-md-6">
        <div className="card mb-3" style={{maxWidth: "540px"} } >
          <div className="row g-0">
            <div className="col-md-4">
              <img src={img} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title fs-3">Name : {name}</h5>
                <p className=" fs-5">
                    {description}
                </p>
                <h4>Price : {price} </h4>
                <h5>Suplier : {supplier} </h5>
                <h4>Quantity : {quantity} </h4>
                <p className="card-text">
                  <button onClick={() => navigateToUpdatePage(_id)} className="btn btn-success">Update</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
