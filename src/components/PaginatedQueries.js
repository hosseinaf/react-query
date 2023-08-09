import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { useState } from "react";
const fetchColors = (pageNumber) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber} `);
};
export const PaginatedQueries = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { isLoading, isError, error, data,isFetching } = useQuery(
     ["colors",pageNumber ],
     ()=>fetchColors(pageNumber),
     {
      keepPreviousData:false 
     }
    
     
     
  );
  if (isLoading) {
    return <h1>loading...</h1>;
  }
  if (isError) {
    return <h1>{error}</h1>;
  }

  console.log(data);

  return (
    <>
    <div>
    {data?.data.map((color) => {
        return (
          <div key={color.id}>
            <h1>
              {color.id},{color.label}
            </h1>
          </div>
        );
      })}
    </div>
   <div>
   <button onClick={()=>setPageNumber(prevState=>prevState-1)} disabled={pageNumber===1}>previous Page</button>
      <button onClick={()=>setPageNumber(prevState=>prevState+1)} disabled={pageNumber===4}>Next Page</button>
   </div>

   {isFetching && 'loading'}
      
    </>
  );
};
