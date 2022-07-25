import React from 'react';
import {  useParams } from "react-router-dom";

import useUpdateDetail from '../../../hook/useUpdateDetail';

const UpdateDetail = ({service}) => {
    const {updateId} = useParams();
    const [bookDetail] = useUpdateDetail(updateId);
    const {name, description, price,img} = bookDetail
   
    return (
       <div className='mt-5 py-5 mx-auto w-75 mx-auto'>
         <div className="gx-3 col-sm-12 col-md-6 pl-5 ml-5">
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
                <p className="card-text">
                  <button  className="btn btn-success">Deliver</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
       </div>
    );
};

export default UpdateDetail;