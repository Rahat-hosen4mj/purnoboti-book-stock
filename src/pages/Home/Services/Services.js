import { Link, useNavigate } from "react-router-dom";
import useBook from "../../../hook/useBook";
import Service from "../Service/Service";

const Services = () => {
  const [books] = useBook();
  const disPlayBook = books.slice(0, 4);
  return (
    <div className="container my-3">
      <h1 className="text-success content my-3 py-4 text-center">
        Total Stock books : {books.length}{" "}
      </h1>
      <div className="row mx-auto w-100">
        {disPlayBook.map((service) => (
          <Service service={service} key={service._id}></Service>
        ))}
      </div>
      <h1 className="text-success content my-3 py-4 text-center">
      <Link to='/manageStock'>
        Manage item
      </Link>         
      </h1>
    </div>
  );
};

export default Services;
