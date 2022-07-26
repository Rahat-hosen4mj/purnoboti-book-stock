import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageStockCard from './ManageStockCard';

const ManageStock = () => {
    const { data: books, isLoading, refetch } = useQuery('books', () => fetch('http://localhost:5000/book').then(res => res.json()));
  
  if (isLoading) {
      return <Loading></Loading>
  }
    return (
        <div className="container my-3">
        <h1 className="text-success content my-3 py-4 text-center">Our Books : {books?.length} </h1>
        <div className="row mx-auto w-100">
        
        {
            books?.map(book => <ManageStockCard book={book} refetch={refetch} key={book._id}></ManageStockCard>)
        }
        </div>
       </div>
    );
};

export default ManageStock;