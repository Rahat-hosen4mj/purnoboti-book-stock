import { useEffect, useState } from "react";

const useUpdateDetail = (updateId) =>{
    const [bookDetail, setBookDetail] = useState({});

    useEffect( () =>{
      fetch(`https://infinite-citadel-86759.herokuapp.com/book/${updateId}`)
      .then(res => res.json())
      .then(data => setBookDetail(data))
    },[updateId])
    return [bookDetail, setBookDetail]
}
export default useUpdateDetail;