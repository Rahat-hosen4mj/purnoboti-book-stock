import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../Shared/Loading';
import ManageStockCard from './ManageStockCard';

const ManageStock = () => {
    const { data: books, isLoading, refetch } = useQuery('books', () => fetch('https://infinite-citadel-86759.herokuapp.com/book').then(res => res.json()));
  
  if (isLoading) {
      return <Loading></Loading>
  }
    return (
        <div className="container my-3">
        <h1 className="text-success content my-3 py-4 text-center">Total Books : {books?.length} </h1>
        <div className="row mx-auto w-100">
        
        {
            books?.map(book => <ManageStockCard book={book} refetch={refetch} key={book._id}></ManageStockCard>)
        }
        </div>
        <h1 className="text-success content my-3 py-4 text-center">
      <Link to='/addItem'>
        Add a New item
      </Link>         
      </h1>
       </div>
    );
};

export default ManageStock;