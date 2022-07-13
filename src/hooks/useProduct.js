import  { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import Loading from '../Components/Shared/Loading';
const useProduct = () => {
 
    const {
        data: products,
        isLoading,
        refetch,
      } = useQuery("products", () =>
        fetch(`http://localhost:5000/api/watches`).then((res) => res.json())
      );
    
      if(isLoading){
        return <Loading />
      }

    return [products,refetch]
}

export default useProduct