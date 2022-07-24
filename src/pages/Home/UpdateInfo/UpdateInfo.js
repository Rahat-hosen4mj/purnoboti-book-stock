import React from 'react';
import {  useParams } from "react-router-dom";
import useBook from '../../../hook/useBook';

const UpdateInfo = () => {
    const {updateId} = useParams();
    const [books] = useBook();
   
    return (
        <div>
            <h2>Welcome to update info page...</h2>
            <p>Your service id is : {updateId}</p>
            {
                books.length
            }
        </div>
    );
};

export default UpdateInfo;