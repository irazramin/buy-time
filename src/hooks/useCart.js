// import { useEffect } from "react";
// import { useState } from "react";
// import { useQuery } from "react-query";
// const useCart = () => {
//     const [carts,setCarts] = useState([]);
//     const [isLoading,setIsLoading] = useState(false)
// //    const {data:carts,isLoading,refetch}  = useQuery("carts", () => fetch(`http://localhost:5000/api/addtocart`).then(res => res.json()));
    
    
//     useEffect(() =>{
//         setIsLoading(true)
//         fetch(`http://localhost:5000/api/addtocart`)
//         .then(res => res.json())
//         .then(data =>{
//             setCarts(data)
//             setIsLoading(false)
//         })
//     },[])
//       return {carts,isLoading,setCarts}
   
// }

// export default useCart