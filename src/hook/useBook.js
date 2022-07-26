import { useEffect, useState } from "react";

const useBook = () =>{
    const [books, setBooks] = useState([]);
 
  useEffect(() => {
    fetch(`https://infinite-citadel-86759.herokuapp.com/book`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return [books, setBooks]
}
export default useBook;