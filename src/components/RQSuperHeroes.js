import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useSuperHeroesData } from "../hooks/useSuperHeroesData";
import { Link } from "react-router-dom";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const RQSuperHeroes = () => {



  const onSuccess=(data)=>{
   console.log("perform side effect after data fetching",data)
  }

  const onError=(error)=>{
    console.log("perform side effect after encountering error",error)
  }

  const { isLoading, data, isError, error, isFetching,refetch } =useSuperHeroesData(onSuccess,onError) 

  console.log({ isLoading, isFetching });
  if (isLoading || isFetching) {
    return <h2>Loading</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQSuperHeroes</h2>
      <button onClick={refetch}>refetch</button>
      {
      data?.data.map((hero) => {
        return <div key={hero.id}><Link to={`/rqsuper/${hero.id}`}>{hero.name}</Link></div>;

      })}

      {/* {
        data.map((heroName)=>{
          return<div key={heroName}>{heroName}</div>
        })
      } */}
    </>
  );
};
