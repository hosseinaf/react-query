import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
const fetchSuperHeroes = () => {
    return axios.get("http://localhost:4000/superheroes");
  };
  

     
export const useSuperHeroesData = (onSuccess,onError) => {
  return useQuery("super-heroes", fetchSuperHeroes, {
     // cacheTime:5000,
    //staleTime:3000
   //refetchOnMount:true
    // refetchOnWindowFocus:"true"
   // refetchInterval:2000
  //  refetchIntervalInBackground:true

  //dont fire request by iteself
  enabled:false,
    onSuccess,
    onError,
    // select: (data) => {
    //   const superHeroNames = data.data.map((hero) => hero.name);
    //   return superHeroNames;
    // },
  });
};
