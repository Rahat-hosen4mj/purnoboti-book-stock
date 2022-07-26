import React from 'react';

const ManageStockCard = ({book}) => {
    const {img, name, description} = book
    return (
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
                <p className="d-flex ">
                  <button className="btn btn-success">Deliver</button>
                  <button className="btn btn-danger border border-danger mx-5 border-2">Remove</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ManageStockCard;