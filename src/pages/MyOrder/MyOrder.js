import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([])
    const navigate = useNavigate()
    useEffect(() =>{
        if(user){
            fetch(`http://localhost:5000/item?email=${user.email}`)
           .then(res => res.json())
            .then(data => setOrders(data))
        }
    },[user])
  return (
    <section className="my-order">
        <h2>Total items : {orders.length} </h2>
      <div className="content">
        <div className="w-75 mx-auto  fs-4">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Sl No:</th>
                <th scope="col">Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">Suplier</th>
              </tr>
            </thead>
            <tbody>
               {
                orders.map(order => <>
                <tr>
                <th scope="row">1</th>
                <td>{order.name}</td>
                <td>{order.quantity}</td>
                <td>{order.price}</td>
                <td>{order.suplier}</td>
              </tr>
                </>)
               }
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MyOrder;
