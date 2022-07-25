import { useEffect, useState } from "react";

const useUpdateDetail = (updateId) =>{
    const [bookDetail, setBookDetail] = useState({});

    useEffect( () =>{
      fetch(`http://localhost:5000/book/${updateId}`)
      .then(res => res.json())
      .then(data => setBookDetail(data))
    },[updateId])
    return [bookDetail, setBookDetail]
}
export default useUpdateDetail;