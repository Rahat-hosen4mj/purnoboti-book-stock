import React from 'react';
import notFound from '../../../images/nofound.png'

const NotFound = () => {
    return (
        <div className='d-flex justify-content-center align-items-center flex-column'>
             <img className='img-fluid' src={notFound} alt="" />
             <h2 className='text-danger'>Page not found</h2>
        </div>
    );
};

export default NotFound;