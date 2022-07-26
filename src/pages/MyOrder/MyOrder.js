import React from "react";

const MyOrder = () => {
  return (
    <section className="my-order">
      <div className="content">
        <div className="w-75 mx-auto  fs-4">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Sl No:</th>
                <th scope="col">Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MyOrder;
