import React from 'react';
import banner from "../../../images/banner.jpg";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const AddItem = () => {
    const navigate = useNavigate();

    const addItem = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const description = event.target.description.value;
        const suplier = event.target.suplier.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const image = event.target.image.value
       
        const book = {
            name: name,
            suplier: suplier,
            price: price,
          };
          fetch("http://localhost:5000/book", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(book),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data) {
                toast(`Successfully add your  ${name} book`);
                navigate("/");
              }
            });
          console.log("handle btn cliced kora hoice", name, price, description, suplier);
          event.target.reset();

    }
    return (
        <div
        style={{
          background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.2)), url(${banner})`,
        }}
        className="hero"
      >
        <div id='signUp-formBox' className="form-box">
          <form onSubmit={addItem} id="login" className="addItem-group">
            <input
              type="text"
              name="name"
              className="input-field"
              placeholder="book name.."
            />
            <input
              type="text"
              name="description"
              className="input-field"
              placeholder="short descrip.."
            />
            <input
              type="text"
              name="suplier"
              className="input-field"
              placeholder="Suplier name.."
            />
            <input
              type="number"
              name="price"
              className="input-field"
              placeholder="Price.."
            />
            <input
              type="number"
              name="quantity"
              className="input-field"
              placeholder="Quantity.."
            />
            <input
              type="file"
              name="image"
              className="input-field"
              placeholder="Image..."
            />
            
           
            <input
              className="form-submit btn rounded btn-success py-2 mt-2 px-5"
              type="submit"
              value="Add"
            />{" "}
            <br />
          </form>
       
        </div>
        
       
      </div>
    );
};

export default AddItem;